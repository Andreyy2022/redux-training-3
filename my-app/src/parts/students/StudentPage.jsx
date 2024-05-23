import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export const StudentPage = () => {
    let params = useParams();
    const {studentId} = params;

    const student = useSelector((state) => 
        state.students.find((student) => student.id === studentId)
    );

    if (!student) {
        return <p>No such student</p>;
    }

    return (
        <div>
            <h2>{student.title}</h2>
            <p>Name: {student.name}</p>
            <p>Surname: {student.surname}</p>
            <p>Age: {student.age}</p>
            <p>Occupation: {student.occupation}</p>
        </div>
    );
}