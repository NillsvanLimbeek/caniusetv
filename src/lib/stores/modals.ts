import { writable } from 'svelte/store';

interface ModalStore {
	newRule: boolean;
	editRule: boolean;
	deleteRule: boolean;
	notes: boolean;
}

type ModalName = 'newRule' | 'editRule' | 'deleteRule' | 'notes';

export const modals = writable<ModalStore>({
	deleteRule: false,
	editRule: false,
	newRule: false,
	notes: false
});

export function openModal(modal: ModalName): void {
	modals.update((store) => {
		store[modal] = true;
		return store;
	});
}

export function closeModal(modal: ModalName): void {
	modals.update((store) => {
		store[modal] = false;
		return store;
	});
}
