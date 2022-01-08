<script lang="ts">
	import { onMount } from 'svelte';
	import { tweened } from 'svelte/motion';

	import { removeToast } from '$lib/stores/toast';
	import type { Toast } from '$lib/types';
	import Icon from './Icon.svelte';

	export let toast: Toast;

	const progress = tweened<number>(100, { duration: 2500 });

	onMount(async () => {
		await progress.set(0);
		removeToast(toast.id);
	});
</script>

<div
	class="border-2 bg-neutral-500 px-20 py-5 rounded shadow-lg mb-3"
	class:toast-succes={toast.type === 'succes'}
	class:toast-error={toast.type === 'error'}
	on:click={() => removeToast(toast.id)}
>
	<div class="flex gap-2">
		<Icon name={toast.type === 'succes' ? 'check' : 'close'} />
		<p class="font-light">{toast.message}</p>
	</div>
</div>
