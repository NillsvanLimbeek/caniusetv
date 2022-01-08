import { writable } from 'svelte/store';
import { addDoc, onSnapshot, deleteDoc, updateDoc } from 'firebase/firestore';

import { sendToast } from './toast';
import type { RuleStore, Rule } from '$lib/types';
import { singleRule, rules } from '$lib/utils/db';

export const cssRules = writable<RuleStore>({
	rules: []
});

const rulesRef = rules;

// automatic subscription
onSnapshot(rulesRef, (snapshot) => {
	// clear old rules
	cssRules.set({ rules: [] });

	const rules: Rule[] = [];

	snapshot.forEach((doc) => {
		rules.push({ ...doc.data(), id: doc.id });
	});

	cssRules.update((data) => {
		data.rules = [...rules];
		return data;
	});
});

export async function addNewRule(newRule: Omit<Rule, 'id'>): Promise<void> {
	try {
		await addDoc(rulesRef, newRule);
		sendToast({ message: 'Your rule has been added!', type: 'succes' });
	} catch (e) {
		sendToast({ message: 'Someting went wrong...', type: 'error' });
	}
}

export async function deleteRule(id: string): Promise<void> {
	const docRef = singleRule(id);

	try {
		await deleteDoc(docRef);
		sendToast({ message: 'Your rule has been deleted!', type: 'succes' });
	} catch (e) {
		sendToast({ message: 'Someting went wrong...', type: 'error' });
	}
}

export async function editRule(id: string, rule: Omit<Rule, 'id'>): Promise<void> {
	const docRef = singleRule(id);

	try {
		await updateDoc(docRef, rule);
		sendToast({ message: 'Your rule has been updated!', type: 'succes' });
	} catch (e) {
		sendToast({ message: 'Someting went wrong...', type: 'error' });
	}
}
