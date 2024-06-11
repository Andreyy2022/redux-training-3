import { useSelector } from 'react-redux';
import { NewStudentForm } from './NewStudentForm';
import { Link } from 'react-router-dom';
import { TeacherOfStud } from './TeacherOfStud';
import { UserVotes } from './UserVotes';

export const StudentsList = () => {
    const students = useSelector((state) => state.students);0

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