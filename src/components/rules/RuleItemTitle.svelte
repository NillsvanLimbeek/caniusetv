<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	import type { Rule } from '$lib/types';
	import { closeModal, modals, openModal } from '$lib/stores/modals';

	import Icon from '$components/Icon.svelte';
	import Modal from '$components/Modal.svelte';
	import Button from '$components/Button.svelte';

	export let rule: Rule;

	const dispatch = createEventDispatcher();
</script>

<div class="flex justify-between bg-neutral-500 rounded-md px-3 py-2 ">
	<p class="font-light">{rule.title}</p>

	<div class="flex gap-2">
		{#if rule.note}
			<div
				on:click={() => openModal('notes')}
				class="text-neutral-700 cursor-pointer hover:text-neutral-900"
			>
				<Icon name="note" props={{ size: '20' }} />
			</div>
		{/if}

		<div
			on:click={() => dispatch('edit', { id: rule.id })}
			class="text-neutral-700 cursor-pointer hover:text-neutral-900"
		>
			<Icon name="pencil" props={{ size: '20' }} />
		</div>

		<div
			on:click={() => dispatch('delete', { id: rule.id })}
			class="text-neutral-700 cursor-pointer hover:text-neutral-900"
		>
			<Icon name="thrash" props={{ size: '20' }} />
		</div>
	</div>
</div>

<Modal showModal={$modals.notes} title="Notes" on:close={() => closeModal('notes')}>
	<p class="font-light my-5">{rule.note}</p>

	<div class="flex justify-end">
		<Button on:click={() => closeModal('notes')}>Close</Button>
	</div>
</Modal>
