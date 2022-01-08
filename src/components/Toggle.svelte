<script lang="ts">
	import Icon from './Icon.svelte';

	export let label;
	export let name;
</script>

<div class="flex justify-between items-center mb-2">
	<p class="text-gray-800 mr-3">{label}</p>

	<div>
		<label for={name} class="flex items-center cursor-pointer">
			<div class="relative mx-2">
				<input type="checkbox" {name} id={name} class="sr-only" />

				<div class="block bg-gray-800 w-10 h-4 rounded-full" />
				<div class="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition" />
			</div>
		</label>
	</div>
</div>

<style>
	input:checked ~ .dot {
		transform: translateX(100%);
		background-color: #fcd34d;
	}
</style>
