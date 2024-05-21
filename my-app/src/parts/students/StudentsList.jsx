import { useSelector } from 'react-redux';
import { NewStudentForm } from './NewStudentForm';

export const StudentsList = () => {
    const students = useSelector((state) => state.students);

    const dispStudents = students.map((student) => (
        <div key={student.id}>
            <h3>{student.title}</h3>
            <p>name: {student.name}</p>
            <p>surname: {student.surname}</p>
            <p>age: {student.age}</p>
            <p>occupation: {student.occupation}</p>
        </div>
    ));

    return (
        <div>
            <NewStudentForm />
            <div>
                <h2>Students</h2>
                {dispStudents}
            </div>
        </div>
    );
}