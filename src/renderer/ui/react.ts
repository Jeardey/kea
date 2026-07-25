import { WebpackFinder } from "../webpack/finder";

export class ReactComponents {
	public static React: typeof import("react");
	public static FormTitle: any;
	public static FormSection: any;
	public static FormText: any;
	public static FormDivider: any;
	public static SwitchItem: any;
	public static Button: any;

	public static async init(): Promise<void> {
		await WebpackFinder.init();

		ReactComponents.React = (await WebpackFinder.waitForProps("createElement", "useState")) as any;

		const formComponents = WebpackFinder.findByProps("FormTitle", "FormText") || {};
		ReactComponents.FormTitle = formComponents.FormTitle ?? formComponents.default;
		ReactComponents.FormSection = formComponents.FormSection ?? formComponents.default;
		ReactComponents.FormText = formComponents.FormText ?? formComponents.default;
		ReactComponents.FormDivider = formComponents.FormDivider ?? formComponents.default;

		const switchModule =
			WebpackFinder.findByProps("SwitchItem") || WebpackFinder.findByProps("FormSwitch");
		ReactComponents.SwitchItem =
			switchModule?.SwitchItem ?? switchModule?.FormSwitch ?? switchModule?.default;

		const buttonModule =
			WebpackFinder.findByProps("Button") || WebpackFinder.findByProps("Colors", "Link");
		ReactComponents.Button = buttonModule?.Button ?? buttonModule?.default;
	}
}
