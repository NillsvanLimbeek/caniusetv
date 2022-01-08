import type { TvModel } from './../types/Rule';

export function findSupported(entries: TvModel[], name: string): boolean {
	return entries.find((rule) => rule.model === name).supported;
}
