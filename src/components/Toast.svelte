<script lang="ts">
	import { fly, fade } from 'svelte/transition';
	import { flip } from 'svelte/animate';

	import { toast } from '$lib/stores/toast';

	import Portal from './Portal.svelte';
	import ToastMessage from './ToastMessage.svelte';
</script>

<Portal>
	<div class="fixed top-5 absolute-center">
		{#each $toast.toast as toast (toast.id)}
			<div animate:flip in:fly={{ opacity: 0, y: -200 }} out:fade>
				<ToastMessage {toast} />
			</div>
		{/each}
	</div>
</Portal>
