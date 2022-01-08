import { z } from 'zod';

export const RuleSchema = z.object({
	title: z.string({ required_error: 'Title is required' }).min(1, { message: 'Title is required' }),
	note: z.string(),

	// webos
	webOs_1: z.boolean(),
	webOs_2: z.boolean(),
	webOs_3: z.boolean(),
	webOs_4: z.boolean(),
	webOs_5: z.boolean(),
	webOs_6: z.boolean(),

	// tizen
	tizen_1: z.boolean(),
	tizen_2: z.boolean(),
	tizen_3: z.boolean(),
	tizen_4: z.boolean(),
	tizen_5: z.boolean(),

	// philips
	philips_1: z.boolean()
});
