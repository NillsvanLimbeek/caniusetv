<script lang="ts">
	export let outline: boolean = false;
</script>

<button class="button" class:button-outline={outline} on:click {...$$restProps}>
	<slot />
</button>
