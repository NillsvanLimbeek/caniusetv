<script lang="ts">
	function portal(node: HTMLElement) {
		let target: HTMLElement;

		function update() {
			target = document.querySelector('body');
			target.appendChild(node);
		}

		function destroy() {
			if (node.parentNode) {
				node.parentNode.removeChild(node);
			}
		}

		update();

		return {
			update,
			destroy
		};
	}
</script>

<div use:portal>
	<slot />
</div>
