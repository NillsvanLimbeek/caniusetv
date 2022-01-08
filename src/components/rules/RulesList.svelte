<script lang="ts">
	import { webosModels, tizenModels, philipsModels } from '$lib/data';
	import type { Rule } from '$lib/types';
	import { modals, closeModal, openModal } from '$lib/stores/modals';

	import RuleItem from './RuleItem.svelte';
	import RuleHeaderItem from './RulesHeaderItem.svelte';
	import RuleLayout from './RuleLayout.svelte';
	import RuleItemTitle from './RuleItemTitle.svelte';
	import Modal from '$components/Modal.svelte';
	import DeleteRule from '$components/forms/DeleteRule.svelte';
	import EditRule from '$components/forms/EditRule.svelte';

	export let rules: Rule[];

	let showEditModal: boolean = false;
	let selectedRule: string = '';

	function handleEdit(e: CustomEvent<{ id: string }>) {
		selectedRule = e.detail.id;
		openModal('editRule');
	}

	function handleDelete(e: CustomEvent<{ id: string }>) {
		selectedRule = e.detail.id;
		openModal('deleteRule');
	}
</script>

<!-- header -->
<RuleLayout>
	<div slot="title" />

	<div slot="webos">
		<p class="rules-list__title bg-neutral-500">WebOs</p>

		<div class="flex justify-between">
			{#each webosModels as model}
				<RuleHeaderItem {model} />
			{/each}
		</div>
	</div>

	<div slot="tizen">
		<p class="rules-list__title bg-neutral-500">Tizen</p>

		<div class="flex justify-between">
			{#each tizenModels as model}
				<RuleHeaderItem {model} />
			{/each}
		</div>
	</div>

	<div slot="philips">
		<p class="rules-list__title bg-neutral-500">Philips</p>

		<div class="flex justify-start gap-2">
			{#each philipsModels as model}
				<RuleHeaderItem {model} />
			{/each}
		</div>
	</div>
</RuleLayout>

<!-- rules -->
{#each rules as rule}
	<RuleLayout>
		<div slot="title">
			<RuleItemTitle {rule} on:edit={handleEdit} on:delete={handleDelete} />
		</div>

		<div slot="webos" class="flex justify-between">
			{#each rule.webOs as webos}
				<RuleItem rule={webos} />
			{/each}
		</div>

		<div slot="tizen" class="flex justify-between">
			{#each rule.tizen as tizen}
				<RuleItem rule={tizen} />
			{/each}
		</div>

		<div slot="philips" class="flex justify-start gap-2">
			{#each rule.philips as philips}
				<RuleItem rule={philips} />
			{/each}
		</div>
	</RuleLayout>
{/each}

{#if selectedRule}
	<Modal
		title="Delete rule"
		showModal={$modals.deleteRule}
		on:close={() => closeModal('deleteRule')}
	>
		<DeleteRule id={selectedRule} />
	</Modal>
{/if}

{#if selectedRule}
	<Modal title="Edit rule" showModal={$modals.editRule} on:close={() => closeModal('editRule')}>
		<EditRule id={selectedRule} />
	</Modal>
{/if}
