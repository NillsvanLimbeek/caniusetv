<div class="wrapper grid-cols-4 gap-6 mb-2">
	<slot name="title" class="title" />
	<slot name="webos" class="webos" />
	<slot name="tizen" class="tizen" />
	<slot name="philips" class="philips" />
</div>

<style>
	.wrapper {
		display: grid;
		grid-template-areas: 'title webos tizen philips';
	}

	.title {
		grid-area: title;
	}

	.webos {
		grid-area: webos;
	}

	.tizen {
		grid-area: tizen;
	}

	.philips {
		grid-area: philips;
	}
</style>
