import { useState } from "react";
import{ useDispatch } from 'react-redux';
import { studentUpdated } from "./studentsSlice";
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from "react-redux";
import { selectStudentById } from "./studentsSlice";

export const EditStudentForm = () => {
    let params = useParams();
    const {studentId} = params;

    const student = useSelector((state) => 
        selectStudentById(state, studentId)
    );

    const [title, setTitle] = useState(student.title);
    const [name, setName] = useState(student.name);
    const [surname, setSurname] = useState(student.surname);
    const [age, setAge] = useState(student.age);
    const [occupation, setOccupation] = useState(student.occupation);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const onTitleChange = (e) => setTitle(e.target.value);
    const onNameChange = (e) => setName(e.target.value);
    const onSurnameChange = (e) => setSurname(e.target.value);
    const onAgeChange = (e) => setAge(e.target.value);
    const onOccupationChange = (e) => setOccupation(e.target.value);

    const onSaveStudentClick = () => {
        if (title && name && surname && age && occupation) {
            dispatch(
                studentUpdated({
                    id: studentId,
                    title,
                    name,
                    surname,
                    age,
                    occupation
                })
            );

        navigate(`/students/${studentId}`)
        }
    }

    return (
        <div>
            <h2>Edit Student</h2>
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