<script>
	import '../app.css';
	import '../lib/firebase';
</script>

<svelte:head>
	<title>Can I use... TV</title>
</svelte:head>

<main class="bg-neutral-600 h-screen">
	<h1 class="text-4xl font-extralight text-white text-center py-5 mb-5 border-b border-gray-400">
		Can I use... TV
	</h1>

	<slot />
</main>
