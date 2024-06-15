import {setupWorker} from 'msw/browser';
import {factory, oneOf, manyOf, primaryKey} from '@mswjs/data';
import { nanoid } from 'nanoid';


export const db = factory({
    student: {
        id: primaryKey(nanoid),
    },
    teacher: {
        id: primaryKey(nanoid),
    },
    vote: {
        id: primaryKey(nanoid),
    },
});
export const worker = setupWorker();