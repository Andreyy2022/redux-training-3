import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { TeacherOfStud } from './TeacherOfStud';

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
            <TeacherOfStud teacherId={student.teacher} />
            <p>Name: {student.name}</p>
            <p>Surname: {student.surname}</p>
            <p>Age: {student.age}</p>
            <p>Occupation: {student.occupation}</p>
            <Link to={`/editStudent/${student.id}`} className='link-btn'>
                edit
            </Link>
        </div>
    );
}