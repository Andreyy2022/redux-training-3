import {useSelector} from 'react-redux';

export const TeacherOfStud = ({teacherId}) => {
    const teacher = useSelector((state) => 
        state.teachers.find((teacher) => teacher.id === teacherId)
    )

    return <span>by {teacher ? teacher.name : 'unknown'}</span>
}