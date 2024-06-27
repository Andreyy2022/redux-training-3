import {setupWorker} from 'msw/browser';
import {factory, oneOf, manyOf, primaryKey} from '@mswjs/data';
import { nanoid } from 'nanoid';
import {faker} from '@faker-js/faker';
import {http, HttpResponse, delay} from 'msw';

const NUM_TEACHERS = 3;
const STUDS_PER_TEACHER = 3;

const ARTIFICIAL_DELAY_MS = 2000;

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

function getRandInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const createStudentData = () => {
    return {
        title: `Student${getRandInt(1, 100)}`,
        name: () => faker.name.name(),
        surname: () => faker.name.surnames(),
        age: getRandInt(18, 65),
        occupation: () => faker.lorem.occupation(), // is it ok like that?
        votes: db.vote.create(),
        teacher,
    }
}

export const handlers = [
    http.get('/fakeServer/students', async() => {
        const students = db.student.getAll().map(serializeStudent);
        await delay(ARTIFICIAL_DELAY_MS);

        return HttpResponse.json(students);
    }),
];

for (let i = 0; i < NUM_TEACHERS; i++) {
    const newTeacher = db.teacher.create(createTeacherData(i));

    for (let j = 0; j < STUDS_PER_TEACHER; j++) {
        const newStudent = createStudentData(newTeacher);
        db.student.create(newStudent);
    }
}

const serializeStudent = (student) => ({
    ...student,
    teacher: student.teacher.id,
});

export const worker = setupWorker(...handlers);