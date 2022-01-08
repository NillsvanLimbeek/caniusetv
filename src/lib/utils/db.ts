// https://medium.com/swlh/using-firestore-with-typescript-65bd2a602945
import { collection, QueryDocumentSnapshot, doc, DocumentReference } from 'firebase/firestore';

import { db as database } from '$lib/firebase';
import type { Rule } from '$lib/types';

const converter = <T>() => ({
	toFirestore: (data: T) => data,
	fromFirestore: (snapshot: QueryDocumentSnapshot) => snapshot.data() as T
});

const dataCollection = <T>(collectionPath: string) => {
	return collection(database, collectionPath).withConverter(converter<T>());
};

export const singleRule = (id: string): DocumentReference<Rule> => {
	return doc(database, 'css-rules', id).withConverter(converter<Rule>());
};

export const rules = dataCollection<Rule>('css-rules');
