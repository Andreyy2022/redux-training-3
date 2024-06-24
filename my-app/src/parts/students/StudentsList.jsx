import { useSelector, useDispatch } from 'react-redux';
import { NewStudentForm } from './NewStudentForm';
import { Link } from 'react-router-dom';
import { TeacherOfStud } from './TeacherOfStud';
import { UserVotes } from './UserVotes';
import { selectAllStudents, fetchStudens } from './studentsSlice';
import { useEffect } from 'react';

export const StudentsList = () => {

    const dispatch = useDispatch();

    const students = useSelector(selectAllStudents);
    const studentStatus = useSelector((state) => state.students.status);

    useEffect(() => {
        if (studentStatus === 'idle') {
            dispatch(fetchStudens());
        }
    }, [studentStatus, dispatch]);

    const dispStudents = students.map((student) => (
        <div key={student.id} className='student-excerpt'>
            <h3>{student.title}</h3>
            <TeacherOfStud teacherId={student.teacher} />
            <p>occupation: {student.occupation.substring(0, 100)}</p>
            <UserVotes student={student} />
            <Link to={`/students/${student.id}`} className="link-btn">
                view
            </Link>
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