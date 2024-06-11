import { useDispatch } from 'react-redux';
import { voteClicked } from './studentsSlice';

const votesObj = {
    leader: 'GL',
    captain: 'TC',
}

export const UserVotes = ({student}) => {
    const dispatch = useDispatch();

    const userReaction = Object.entries(votesObj).map(([title, image]) => {
        return (
            <button 
                key={title} 
                type="button" 
                className="reacton-button"
                onClick={() => dispatch( voteClicked( {studentId: student.id, vote: title} ) )}
            >
                {image} {student.votes[title]}
            </button>
        )
    });

    return <div>{userReaction}</div>
}