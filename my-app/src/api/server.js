import {setupWorker} from 'msw/browser';
import {factory, oneOf, manyOf, primaryKey} from '@mswjs/data';
import { nanoid } from 'nanoid';

const teachNames = ['Федоров А.В.', 'Смирнов А.В.', 'Матрешкин А.В.'];
const teachScience = ['математика', 'информатика', 'физика'];

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

const createTeacherData = (num) => {
    const name = teachNames[num];
    const science = teachScience[num];

    return {
        name: `${name}`,
        science: `${science}`,
    }
}

function getrandInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const worker = setupWorker();