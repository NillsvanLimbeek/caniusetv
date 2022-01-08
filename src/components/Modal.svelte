<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { fly, fade } from 'svelte/transition';

	import Icon from './Icon.svelte';
	import Portal from './Portal.svelte';

	export let showModal: boolean;
	export let title: string;

	const dispatch = createEventDispatcher();

	function closeModal() {
		dispatch('close');
	}
</script>

{#if showModal}
	<Portal>
		<div
			class="absolute top-0 left-0 bottom-0 right-0 bg-black/50"
			transition:fade
			on:click={closeModal}
		/>

		<div
			class="absolute top-[10%] left-[50%] -translate-x-[50%] bg-neutral-400 rounded-md p-5"
			transition:fly={{ y: 100 }}
		>
			<div
				class="absolute right-3 top-3 hover:rotate-90 ease-in-out duration-500 transform cursor-pointer"
				on:click={closeModal}
			>
				<Icon name="close" props={{ size: '30' }} />
			</div>

			<h1 class="text-4xl font-extralight mb-5">{title}</h1>

			<slot />
		</div>
	</Portal>
{/if}
