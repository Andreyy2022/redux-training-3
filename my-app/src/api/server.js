import {setupWorker} from 'msw/browser';
import {factory, oneOf, manyOf, primaryKey} from '@mswjs/data';
import { nanoid } from 'nanoid';


export const db = factory({
    student: {
        id: primaryKey(nanoid),
        title: String,
        name: String,
        surname: String,
        age: Number,
        occupation: String,
        votes: oneOf('vote'),
        teacher: oneOf('teacher'),

    },
    teacher: {
        id: primaryKey(nanoid),
        name: String,
        science: String,
        students: manyOf('student'),
    },
    vote: {
        id: primaryKey(nanoid),
        'group leader': Number,
        'sport captain teams': Number,
        student: oneOf('student'),
    },
});
export const worker = setupWorker();