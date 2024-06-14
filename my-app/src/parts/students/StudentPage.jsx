import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { TeacherOfStud } from './TeacherOfStud';
import { UserVotes } from './UserVotes';
import { selectStudentById } from './studentsSlice';

export const StudentPage = () => {
    let params = useParams();
    const {studentId} = params;

    const student = useSelector((state) => 
        selectStudentById(state, studentId)
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
            <UserVotes student={student} />
            <Link to={`/editStudent/${student.id}`} className='link-btn'>
                edit
            </Link>
        </div>
    );
}