import { WebpackFinder } from "./finder";

export interface DiscoveredStoreInfo {
	id: string | number;
	rawName: string;
	cleanName: string;
	properties: string[];
	methods: string[];
}

export function sanitizeIdentifier(name: string): string {
	if (!name) return "UnknownStore";

	const cleaned = name
		.replace(/[-_\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ""))
		.replace(/[^a-zA-Z0-9_$]/g, "");

	const result = cleaned.charAt(0).toUpperCase() + cleaned.slice(1);

	if (!result || /^[0-9]/.test(result)) {
		return `Store_${result}`;
	}

	return result;
}

export class MappingGenerator {
	public static generateStoreMappings(): Record<string, DiscoveredStoreInfo> {
		const wp = (window as any).__kea_wpRequire;
		if (!wp) throw new Error("Webpack require hook not initialized!");

		WebpackFinder.loadAll();

		const storeMappings: Record<string, DiscoveredStoreInfo> = {};

		const inspectObj = (obj: any, id: string | number) => {
			if (!obj || (typeof obj !== "object" && typeof obj !== "function")) return;
			if (obj.$$loader || obj.$$baseObject) return; // skip i18n translation proxies

			try {
				let rawName: string | null = null;
				if (typeof obj.getName === "function") {
					try {
						rawName = obj.getName();
					} catch {}
				}

				if (
					typeof rawName === "string" &&
					rawName.toLowerCase().endsWith("store") &&
					rawName.toLowerCase() !== "store"
				) {
					const cleanName = sanitizeIdentifier(rawName);

					if (!storeMappings[cleanName]) {
						const proto = Object.getPrototypeOf(obj);
						const keys = new Set([
							...Object.keys(obj),
							...(proto ? Object.getOwnPropertyNames(proto) : []),
						]);

						const properties: string[] = [];
						const methods: string[] = [];

						for (const key of keys) {
							if (key === "constructor" || key.startsWith("_") || key.startsWith("$$")) continue;
							try {
								if (typeof obj[key] === "function") {
									methods.push(key);
								} else {
									properties.push(key);
								}
							} catch {}
						}

						storeMappings[cleanName] = {
							id,
							rawName,
							cleanName,
							properties,
							methods,
						};
					}
				}
			} catch {}
		};

		for (const id in wp.c) {
			const mod = wp.c[id];
			if (!mod?.exports || mod.exports === window) continue;
			const exp = mod.exports;

			inspectObj(exp, id);
			try {
				if (exp.default) inspectObj(exp.default, id);
			} catch {}

			try {
				for (const key in exp) {
					try {
						const val = exp[key];
						if (val && val !== exp) inspectObj(val, id);
					} catch {}
				}
			} catch {}
		}

		return storeMappings;
	}

	public static generateObjectType(interfaceName: string, obj: any): string {
		const cleanInterfaceName = sanitizeIdentifier(interfaceName);

		if (!obj || (typeof obj !== "object" && typeof obj !== "function")) {
			return `export type ${cleanInterfaceName} = any;\n`;
		}

		const lines: string[] = [`export interface ${cleanInterfaceName} {`];
		const proto = Object.getPrototypeOf(obj);
		const keys = new Set([
			...Object.keys(obj),
			...(proto ? Object.getOwnPropertyNames(proto) : []),
		]);

		for (const key of keys) {
			if (key === "constructor" || key.startsWith("_") || key.startsWith("$$")) continue;

			try {
				const val = obj[key];
				if (typeof val === "function") {
					lines.push(`    ${key}(...args: any[]): any;`);
				} else if (typeof val === "string") {
					lines.push(`    ${key}: string;`);
				} else if (typeof val === "number") {
					lines.push(`    ${key}: number;`);
				} else if (typeof val === "boolean") {
					lines.push(`    ${key}: boolean;`);
				} else if (Array.isArray(val)) {
					lines.push(`    ${key}: any[];`);
				} else if (val && typeof val === "object") {
					lines.push(`    ${key}: Record<string, any>;`);
				} else {
					lines.push(`    ${key}: any;`);
				}
			} catch {
				lines.push(`    ${key}: any;`);
			}
		}

		lines.push("}\n");
		return lines.join("\n");
	}

	public static generateAllStoreTypes(): string {
		const mappings = MappingGenerator.generateStoreMappings();
		const wp = (window as any).__kea_wpRequire;
		const dtsHeader = `// Auto-generated Kea Discord Types\n// Generated: ${new Date().toISOString()}\n\n`;
		let dtsBody = "";

		const sortedCleanNames = Object.keys(mappings).sort();

		for (const cleanName of sortedCleanNames) {
			const info = mappings[cleanName];
			if (!info) continue;

			try {
				const mod = wp.c[info.id];
				if (!mod?.exports) continue;

				let storeObj: any = null;
				const check = (o: any) => {
					try {
						if (o && typeof o.getName === "function" && o.getName() === info.rawName) {
							storeObj = o;
						}
					} catch {}
				};

				check(mod.exports);
				if (!storeObj) check(mod.exports.default);
				if (!storeObj) {
					for (const k in mod.exports) {
						check(mod.exports[k]);
						if (storeObj) break;
					}
				}

				if (storeObj) {
					dtsBody += `${MappingGenerator.generateObjectType(cleanName, storeObj)}\n`;
				}
			} catch {}
		}

		return dtsHeader + dtsBody;
	}

	public static logTypeDefinitions(): void {
		console.log(MappingGenerator.generateAllStoreTypes());
	}

	public static async copyTypeDefinitions(): Promise<void> {
		const types = MappingGenerator.generateAllStoreTypes();
		try {
			await navigator.clipboard.writeText(types);
			console.log(
				"%c[kea] copied type definitions to clipboard",
				"color: #10b981; font-weight: bold;"
			);
		} catch {
			console.log(types);
		}
	}

	public static downloadTypeDefinitions(filename: string = "discord-stores.d.ts"): void {
		const content = MappingGenerator.generateAllStoreTypes();
		const blob = new Blob([content], { type: "text/typescript" });
		const url = URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = filename;
		a.click();
		URL.revokeObjectURL(url);
		console.log(
			`%c[kea] downloaded type definitions: ${filename}`,
			"color: #10b981; font-weight: bold;"
		);
	}
}
