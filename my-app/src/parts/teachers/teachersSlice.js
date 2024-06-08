import {createSlice} from '@reduxjs/toolkit';

const initialState = [
    {id: '0', name: 'Федоров А.В.', science: 'математика'},
    {id: '1', name: 'Смирнов А.В.', science: 'математика'},
    {id: '2', name: 'Матрешкин А.В.', science: 'математика'},
];

const teachersSlice = createSlice({
    name: 'teachers',
    initialState,
    reducers: {},
});

export default teachersSlice.reducer;