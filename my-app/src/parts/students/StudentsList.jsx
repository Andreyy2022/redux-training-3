import { useSelector } from 'react-redux';
import { NewStudentForm } from './NewStudentForm';
import { Link } from 'react-router-dom';

export const StudentsList = () => {
    const students = useSelector((state) => state.students);

    const dispStudents = students.map((student) => (
        <div key={student.id} className='student-excerpt'>
            <h3>{student.title}</h3>
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