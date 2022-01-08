<script lang="ts">
	import type { TvModel } from '$lib/types';

	import Icon from '$components/Icon.svelte';

	export let rule: TvModel;
</script>

<div
	class="h-10 w-10 flex justify-center items-center bg-neutral-500 rounded-md p-2"
	class:toast-succes={rule.supported === true}
	class:toast-error={rule.supported === false}
>
	<Icon name={rule.supported === true ? 'check' : 'close'} />
</div>
