import { useSelector } from 'react-redux';

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
            <h2>Students</h2>
            {dispStudents}
        </div>
    );
}