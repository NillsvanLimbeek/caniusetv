import type { SvelteComponent } from 'svelte';

export interface Icon {
	name: string;
	component: typeof SvelteComponent;
}

export interface IconProps {
	size?: string;
}
