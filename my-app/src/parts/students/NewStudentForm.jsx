import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import{ useDispatch } from 'react-redux';
import { studentAdded } from "./studentsSlice";

export const NewStudentForm = () => {
    const [title, setTitle] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [age, setAge] = useState(0);
    const [occupation, setOccupation] = useState('');

    const dispatch = useDispatch();

    const onTitleChange = (e) => setTitle(e.target.value);
    const onNameChange = (e) => setName(e.target.value);
    const onSurnameChange = (e) => setSurname(e.target.value);
    const onAgeChange = (e) => setAge(e.target.value);
    const onOccupationChange = (e) => setOccupation(e.target.value);

    const onSaveStudentClick = () => {
        if (title && name && surname && age && occupation) {
            dispatch(
                studentAdded(
                    title,
                    name,
                    surname,
                    age,
                    occupation
                )
            );

            setTitle('');
            setName('');
            setSurname('');
            setAge(0);
            setOccupation('');
        }
    }

    return (
        <div>
            <h2>Add a New Student</h2>
            <form>
                <p>
                    <label htmlFor="studentTitle">Title </label>
                    <input
                        id="studentTitle"
                        title="studentTitle"
                        value={title}
                        onChange={onTitleChange}
                    />
                </p>
                <p>
                    <label htmlFor="studentName">Name </label>
                    <input 
                        id="studentName"
                        name="studentName"
                        value={name}
                        onChange={onNameChange}
                    />
                </p>
                <p>
                    <label htmlFor="studentSurname">Surname </label>
                    <input 
                        id="studentSurname"
                        name="studentSurname"
                        value={surname}
                        onChange={onSurnameChange}
                    />
                </p>
                <p>
                    <label htmlFor="studentAge">Age </label>
                    <input 
                        id="studentAge"
                        name="studentAge"
                        value={age}
                        onChange={onAgeChange}
                    />
                </p>
                <p>
                    <label htmlFor="studentOccupation">Occupation </label>
                    <textarea 
                        id="studentOccupation"
                        name="studentOccupation"
                        value={occupation}
                        onChange={onOccupationChange}
                    />
                </p>
                <button type="button" onClick={onSaveStudentClick}>save</button>
            </form>
        </div>
    );
}