<script lang="ts">
	import { createForm } from 'felte';
	import { validator } from '@felte/validator-zod';
	import type { ValidatorConfig } from '@felte/validator-zod';
	import type { z } from 'zod';

	import { RuleSchema } from '$lib/schema';
	import { addNewRule } from '$lib/stores/css-rules';
	import type { Rule } from '$lib/types';

	import InputField from '$components/InputField.svelte';
	import Button from '$components/Button.svelte';
	import Toggle from '$components/Toggle.svelte';
	import { closeModal } from '$lib/stores/modals';

	const { form, errors } = createForm<z.infer<typeof RuleSchema>, ValidatorConfig>({
		extend: validator,
		validateSchema: RuleSchema,
		onSubmit: (values) => {
			const rule: Omit<Rule, 'id'> = {
				title: values.title,
				note: values.note,

				webOs: [
					{ model: 'webOs 1', supported: values.webOs_1 },
					{ model: 'webOs 2', supported: values.webOs_2 },
					{ model: 'webOs 3', supported: values.webOs_3 },
					{ model: 'webOs 4', supported: values.webOs_4 },
					{ model: 'webOs 5', supported: values.webOs_5 },
					{ model: 'webOs 6', supported: values.webOs_6 }
				],

				tizen: [
					{ model: 'Tizen 1', supported: values.tizen_1 },
					{ model: 'Tizen 2', supported: values.tizen_2 },
					{ model: 'Tizen 3', supported: values.tizen_3 },
					{ model: 'Tizen 4', supported: values.tizen_4 },
					{ model: 'Tizen 5', supported: values.tizen_5 }
				],

				philips: [{ model: 'Philips 1', supported: values.philips_1 }]
			};

			addNewRule(rule);
			closeModal('newRule');
		}
	});
</script>

<form use:form>
	<div class="">
		<InputField type="text" name="title" placeholder="Title" errors={$errors.title} />
		<InputField type="text" name="note" placeholder="Note" />
	</div>

	<div class="flex gap-10">
		<div>
			<h2 class="add-rule__heading">WebOs</h2>
			{#each Array(6) as _, index}
				<Toggle label="WebOs {index + 1}" name="webOs_{index + 1}" />
			{/each}
		</div>

		<div>
			<h2 class="add-rule__heading">Tizen</h2>
			{#each Array(5) as _, index}
				<Toggle label="Tizen {index + 1}" name="tizen_{index + 1}" />
			{/each}
		</div>

		<div class="">
			<h2 class="add-rule__heading">Philips</h2>
			<Toggle label="Philips 1" name="philips_1" />
		</div>
	</div>

	<div class="flex justify-end mt-5">
		<Button type="submit">Add rule</Button>
	</div>
</form>
