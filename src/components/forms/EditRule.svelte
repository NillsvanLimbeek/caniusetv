<script lang="ts">
	import { createForm } from 'felte';
	import { validator } from '@felte/validator-zod';
	import type { ValidatorConfig } from '@felte/validator-zod';
	import type { z } from 'zod';
	import { onMount } from 'svelte';

	import { RuleSchema } from '$lib/schema';
	import { editRule } from '$lib/stores/css-rules';
	import type { Rule } from '$lib/types';
	import { cssRules } from '$lib/stores/css-rules';
	import { closeModal } from '$lib/stores/modals';

	import InputField from '$components/InputField.svelte';
	import Button from '$components/Button.svelte';
	import Toggle from '$components/Toggle.svelte';
	import { webosModels } from '$lib/data';
	import { findSupported } from '$lib/utils';

	export let id: string;

	let rule: Rule;

	const { form, errors, setFields } = createForm<z.infer<typeof RuleSchema>, ValidatorConfig>({
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
			editRule(id, rule);
			closeModal('editRule');
		}
	});

	onMount(() => {
		rule = $cssRules.rules.find((rule) => rule.id === id);
		setFields({
			title: rule.title,
			note: rule.note,
			webOs_1: findSupported(rule.webOs, 'webOs 1'),
			webOs_2: findSupported(rule.webOs, 'webOs 2'),
			webOs_3: findSupported(rule.webOs, 'webOs 3'),
			webOs_4: findSupported(rule.webOs, 'webOs 4'),
			webOs_5: findSupported(rule.webOs, 'webOs 5'),
			webOs_6: findSupported(rule.webOs, 'webOs 6'),
			tizen_1: findSupported(rule.tizen, 'Tizen 1'),
			tizen_2: findSupported(rule.tizen, 'Tizen 2'),
			tizen_3: findSupported(rule.tizen, 'Tizen 3'),
			tizen_4: findSupported(rule.tizen, 'Tizen 4'),
			tizen_5: findSupported(rule.tizen, 'Tizen 5'),
			philips_1: findSupported(rule.philips, 'Philips 1')
		});
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
			{#each webosModels as model}
				<Toggle label="WebOs {model}" name="webOs_{model}" />
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
		<Button type="submit">Edit rule</Button>
	</div>
</form>
