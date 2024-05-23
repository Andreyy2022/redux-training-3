import { createSlice } from '@reduxjs/toolkit';

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
        studentAdded(state, action) {
            state.push(action.payload)
        },
    },
});
/*
const addStudent = newStudent => {
    return {
        type: 'students/studentAdded',
        playload: newStudent,
    }
}
*/
export const { studentAdded } = studentsSlice.actions;
export default studentsSlice.reducer;