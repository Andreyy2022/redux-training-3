import { useState } from "react";

export const NewStudentForm = () => {
    const [title, setTitle] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [age, setAge] = useState(0);
    const [occupation, setOccupation] = useState('');

    const onTitleChange = (e) => setTitle(e.target.value);
    const onNameChange = (e) => setName(e.target.value);
    const onSurnameChange = (e) => setSurname(e.target.value);
    const onAgeChange = (e) => setAge(e.target.value);
    const onOccupationChange = (e) => setOccupation(e.target.value);

    return (
        <div>
            <h2>Add a New Student</h2>
            <form>

            </form>
        </div>
    );
}