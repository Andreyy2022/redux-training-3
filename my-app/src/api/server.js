import {setupWorker} from 'msw/browser';
import {factory, oneOf, manyOf, primaryKey} from '@mswjs/data';
import { nanoid } from 'nanoid';
import {faker} from '@faker-js/faker';

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

const createStudentData = () => {
    return {
        title: `Studet${getRandInt(1, 100)}`,
        name: faker.lorem.names({min: 1, max: 1}),
        surname: faker.lorem.surnames({min: 1, max: 1}),
        age: getRandInt(18, 65),
        occupation: faker.lorem.occupations({min: 1, max: 1}),
        votes: db.vote.create(),
        teacher,
    }
}

export const worker = setupWorker();