import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = [
    {
        id: '1',
        title: 'student1',
        name: 'Ivan',
        surname: 'Ivanov',
        age: '25',
        occupation: 'frontend',
    },
    {
        id: '2',
        title: 'student2',
        name: 'Petr',
        surname: 'Petrov',
        age: '30',
        occupation: 'backend',
    },
]

const studentsSlice = createSlice({
    name: 'students',
    initialState,
    reducers: {
        studentAdded: {
            reducer(state, action) {
                state.push(action.payload);
            },
            prepare(title, name, surname, age, occupation) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        name,
                        surname,
                        age,
                        occupation,
                    },
                }
            },
        },
        studentUpdated(state, action) {
            const { id, title, name, surname, age, occupation } = action.payload;
            const desireStudent = state.find(student => student.id === id);
            if (desireStudent) {
                desireStudent.title = title;
                desireStudent.name = name;
                desireStudent.surname = surname;
                desireStudent.age = age;
                desireStudent.occupation = occupation;
            }
        },
    },
});

export const { studentAdded, studentUpdated } = studentsSlice.actions;
export default studentsSlice.reducer;