import { writable } from 'svelte/store';

import type { Toast, ToastStore } from '$lib/types';

export const toast = writable<ToastStore>({
	toast: []
});

export async function sendToast(newToast: Omit<Toast, 'id'>): Promise<void> {
	toast.update(($store) => {
		$store.toast = [...$store.toast, { ...newToast, id: Math.floor(Math.random() * 10000) }];
		return $store;
	});
}

export async function removeToast(id: number): Promise<void> {
	toast.update(($store) => {
		$store.toast = $store.toast.filter((t) => t.id !== id);
		return $store;
	});
}
