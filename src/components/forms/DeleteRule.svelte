<script lang="ts">
	import { deleteRule } from '$lib/stores/css-rules';
	import { closeModal } from '$lib/stores/modals';

	import Button from '$components/Button.svelte';

	export let id: string;

	function handleDelete() {
		deleteRule(id);
		closeModal('deleteRule');
	}
</script>

<p class="mb-5 font-light">Are you sure you want to delete this rule?</p>

<div class="flex justify-end gap-2">
	<Button outline on:click={() => closeModal('deleteRule')}>Cancel</Button>
	<Button on:click={handleDelete}>Delete</Button>
</div>
