import { useSelector } from 'react-redux';
import { NewStudentForm } from './NewStudentForm';
import { Link } from 'react-router-dom';
import { TeacherOfStud } from './TeacherOfStud';

export const StudentsList = () => {
    const students = useSelector((state) => state.students);

    const dispStudents = students.map((student) => (
        <div key={student.id} className='student-excerpt'>
            <h3>{student.title}</h3>
            <TeacherOfStud teacherId={student.teacher} />
            <p>occupation: {student.occupation.substring(0, 100)}</p>
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