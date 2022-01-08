<script lang="ts">
	import { onMount, SvelteComponent, createEventDispatcher } from 'svelte';

	import type { IconProps } from '$lib/types';

	import { ICONS } from './icons';

	export let name: string;
	export let props: IconProps = {};

	let component: typeof SvelteComponent;

	const dispatch = createEventDispatcher();

	onMount(() => {
		const icon = ICONS.find((icon) => icon.name === name);
		if (!icon) throw new Error(`${name} was not found as icon`);
		component = icon.component;
	});
</script>

<svelte:component this={component} {...props} on:click={() => dispatch('click')} />
