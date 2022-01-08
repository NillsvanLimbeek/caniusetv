export interface Rule {
	id: string;
	title: string;
	note?: string;

	webOs: TvModel[];
	tizen: TvModel[];
	philips: TvModel[];
}

export interface TvModel {
	model: string;
	supported: boolean;
}
