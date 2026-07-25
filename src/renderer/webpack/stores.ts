import type * as AllStores from "@kea/dtypes";
import { WebpackFinder } from "./finder";

export const Stores = new Proxy({} as typeof AllStores, {
	get(_target, prop: string) {
		return WebpackFinder.findByStoreName(prop);
	},
});
