export interface IPluginInfo {
	readonly mainFile: string;
	readonly location: string;
	readonly name: string;
	readonly version: string;
	readonly dependencies: { [name: string]: string };
}

export interface IPluginInfoForList {
	readonly name: string;
	readonly version: string;
}