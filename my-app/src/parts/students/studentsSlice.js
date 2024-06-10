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
        voteClicked(state, action) {
            const {studentId, vote} = action.payload;
            const currentStudent = state.find(student => student.id === studentId);
            if (currentStudent) {
                currentStudent.votes[vote]++;
            }
        },
        studentAdded: {
            reducer(state, action) {
                state.push(action.payload);
            },
            prepare(title, name, surname, age, occupation, teacherId) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        name,
                        surname,
                        age,
                        occupation,
                        teacher: teacherId,
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

export const { voteClicked, studentAdded, studentUpdated } = studentsSlice.actions;
export default studentsSlice.reducer;