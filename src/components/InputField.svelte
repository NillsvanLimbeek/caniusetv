<script lang="ts">
	export let errors: string | string[] | undefined = undefined;
</script>

<div class="relative">
	<input
		class="w-full px-3 py-2 mb-7 rounded text-gray-800 outline-none focus:ring-2 focus:ring-amber-300"
		class:input-field__error={errors}
		{...$$restProps}
	/>

	{#if errors}
		<p class="absolute right-0 bottom-1 text-sm text-red-600">{errors}</p>
	{/if}
</div>
