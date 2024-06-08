import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import{ useDispatch, useSelector } from 'react-redux';
import { studentAdded } from "./studentsSlice";

export const NewStudentForm = () => {
    const [title, setTitle] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [age, setAge] = useState(0);
    const [occupation, setOccupation] = useState('');
    const [teacherId, setTeacherId] = useState('');

    const dispatch = useDispatch();

    const teachers = useSelector((state) => state.teachers);

    const onTitleChange = (e) => setTitle(e.target.value);
    const onNameChange = (e) => setName(e.target.value);
    const onSurnameChange = (e) => setSurname(e.target.value);
    const onAgeChange = (e) => setAge(e.target.value);
    const onOccupationChange = (e) => setOccupation(e.target.value);
    const onTeacherChange = (e) => setTeacherId(e.target.value);

    const onSaveStudentClick = () => {
        if (title && name && surname && age && occupation) {
            dispatch(
                studentAdded(
                    title,
                    name,
                    surname,
                    age,
                    occupation,
                    teacherId
                )
            );

            setTitle('');
            setName('');
            setSurname('');
            setAge(0);
            setOccupation('');
        }
    }

    const teachersList = teachers.map((teacher) => (
        <option key={teacher.id} value={teacher.id}>
            {teacher.name}
        </option>
    ));

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
                    <label htmlFor="studTeacher">Teacher:</label>
                    <select id="studTeacher" value={teacherId} onChange={onTeacherChange}>
                        <option value=""></option>
                        {teachersList}
                    </select>
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