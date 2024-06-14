import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = {
    students: [],
    status: 'idle',
    error: null,
}

const studentsSlice = createSlice({
    name: 'students',
    initialState,
    reducers: {
        voteClicked(state, action) {
            const {studentId, vote} = action.payload;
            const currentStudent = state.students.find(student => student.id === studentId);
            if (currentStudent) {
                currentStudent.votes[vote]++;
            }
        },
        studentAdded: {
            reducer(state, action) {
                state.students.push(action.payload);
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
                        votes: {
                            leader: 0,
                            captain: 0,
                        },
                    },
                }
            },
        },
        studentUpdated(state, action) {
            const { id, title, name, surname, age, occupation } = action.payload;
            const desireStudent = state.students.find(student => student.id === id);
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

export const selectAllStudents = (state) => state.students.students;
export const selectStudentById = (state, studentId) =>
    state.students.students.find((student) => student.id === studentId);