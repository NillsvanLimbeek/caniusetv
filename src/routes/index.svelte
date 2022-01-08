<script lang="ts">
	import { cssRules } from '$lib/stores/css-rules';
	import { closeModal, modals, openModal } from '$lib/stores/modals';

	import Modal from '$components/Modal.svelte';
	import Button from '$components/Button.svelte';
	import AddRule from '$components/forms/AddRule.svelte';
	import Toast from '$components/Toast.svelte';
	import RulesList from '$components/rules/RulesList.svelte';
	import Icon from '$components/Icon.svelte';
</script>

<div class="flex justify-center my-7">
	<Button on:click={() => openModal('newRule')}>
		<div class="flex items-center gap-2 p-1">
			<Icon name="add" props={{ size: '35' }} />
			<p class="text-3xl">Add a new rule</p>
		</div>
	</Button>
</div>

<div class="w-2/3 mx-auto">
	<RulesList rules={$cssRules.rules} />
</div>

<Toast />

<Modal showModal={$modals.newRule} title="Add new rule" on:close={() => closeModal('newRule')}>
	<AddRule />
</Modal>
