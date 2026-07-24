export type PatchType = "before" | "after" | "instead";

export interface Patch {
	caller: string;
	type: PatchType;
	unpatch: () => void;
}

interface PatchEntry {
	original: (...args: any[]) => any;
	patches: Set<Patch>;
	originalDescriptor?: PropertyDescriptor | undefined;
}

export class Patcher {
	private static patchMap = new Map<any, Map<string, PatchEntry>>();

	private static getPatchEntry(parent: any, key: string): PatchEntry {
		let parentMap = Patcher.patchMap.get(parent);
		if (!parentMap) {
			parentMap = new Map();
			Patcher.patchMap.set(parent, parentMap);
		}

		let entry = parentMap.get(key);
		if (!entry) {
			const originalDescriptor = Object.getOwnPropertyDescriptor(parent, key);

			let original = parent[key];
			if (typeof original !== "function" && originalDescriptor?.get) {
				original = originalDescriptor.get.call(parent);
			}

			if (typeof original !== "function") {
				throw new Error(`[kPatcher] target property '${key}' is not a function`);
			}

			const newEntry: PatchEntry = {
				original,
				patches: new Set(),
				originalDescriptor,
			};
			entry = newEntry;
			parentMap.set(key, newEntry);

			const patchedFunc = function (this: any, ...args: any[]) {
				const currentEntry = Patcher.patchMap.get(parent)?.get(key);
				if (!currentEntry || currentEntry.patches.size === 0) {
					return original.apply(this, args);
				}

				for (const patch of currentEntry.patches) {
					if (patch.type === "before") {
						try {
							(patch as any).callback.call(this, args);
						} catch (e) {
							console.error(`[kea] error in 'before' patch (${patch.caller}):`, e);
						}
					}
				}

				let result: any;
				const insteadPatch = Array.from(currentEntry.patches).find((p) => p.type === "instead");
				if (insteadPatch) {
					try {
						result = (insteadPatch as any).callback.call(this, args, original.bind(this));
					} catch (e) {
						console.error(`[kea] error in 'instead' patch (${insteadPatch.caller}):`, e);
						result = original.apply(this, args);
					}
				} else {
					result = original.apply(this, args);
				}

				for (const patch of currentEntry.patches) {
					if (patch.type === "after") {
						try {
							const override = (patch as any).callback.call(this, args, result);
							if (override !== undefined) {
								result = override;
							}
						} catch (e) {
							console.error(`[kea] error in 'after' patch (${patch.caller}):`, e);
						}
					}
				}

				return result;
            };

			Object.assign(patchedFunc, original);
			patchedFunc.toString = () => original.toString();

			try {
				if (originalDescriptor?.get && !originalDescriptor.set) {
					Object.defineProperty(parent, key, {
						get: () => patchedFunc,
						configurable: true,
						enumerable: originalDescriptor.enumerable ?? true,
					});
				} else {
					Object.defineProperty(parent, key, {
						value: patchedFunc,
						writable: true,
						configurable: true,
						enumerable: originalDescriptor?.enumerable ?? true,
					});
				}
			} catch (e) {
				console.error(`[kea] failed to redefine property '${key}':`, e);
			}
		}

		return entry;
	}

	public static before(
		caller: string,
		parent: any,
		key: string,
		callback: (args: any[]) => void
	): () => void {
		return Patcher.patch(caller, parent, key, "before", callback);
	}

	public static after(
		caller: string,
		parent: any,
		key: string,
		callback: (args: any[], result: any) => any
	): () => void {
		return Patcher.patch(caller, parent, key, "after", callback);
	}

	public static instead(
		caller: string,
		parent: any,
		key: string,
		callback: (args: any[], orig: (...args: any[]) => any) => any
	): () => void {
		return Patcher.patch(caller, parent, key, "instead", callback);
	}

	private static patch(
		caller: string,
		parent: any,
		key: string,
		type: PatchType,
		callback: (...args: any[]) => any
	): () => void {
		const entry = Patcher.getPatchEntry(parent, key);
		const patchObj: Patch = {
			caller,
			type,
			unpatch: () => {
				entry.patches.delete(patchObj);
				if (entry.patches.size === 0) {
					if (entry.originalDescriptor) {
						try {
							Object.defineProperty(parent, key, entry.originalDescriptor);
						} catch {
							parent[key] = entry.original;
						}
					} else {
						parent[key] = entry.original;
					}
					Patcher.patchMap.get(parent)?.delete(key);
					if (Patcher.patchMap.get(parent)?.size === 0) Patcher.patchMap.delete(parent);
				}
			},
		};
		(patchObj as any).callback = callback;
		entry.patches.add(patchObj);
		return patchObj.unpatch;
	}

	public static unpatchAll(caller?: string): void {
		for (const [, parentMap] of Patcher.patchMap) {
			for (const [, entry] of parentMap) {
				for (const patch of Array.from(entry.patches)) {
					if (!caller || patch.caller === caller) {
						patch.unpatch();
					}
				}
			}
		}
	}
}
