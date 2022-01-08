import type { Icon } from '$lib/types';

import Close from './Close.svelte';
import Check from './Check.svelte';
import Chevron from './Chevron.svelte';
import Pencil from './Pencil.svelte';
import Thrash from './Thrash.svelte';
import Note from './Note.svelte';
import Add from './Add.svelte';

export const ICONS: Icon[] = [
	{ name: 'close', component: Close },
	{ name: 'check', component: Check },
	{ name: 'chevron', component: Chevron },
	{ name: 'pencil', component: Pencil },
	{ name: 'thrash', component: Thrash },
	{ name: 'note', component: Note },
	{ name: 'add', component: Add }
];
