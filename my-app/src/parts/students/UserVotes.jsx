const votesObj = {
    leader: 'GL',
    captain: 'TC',
}

export const UserVotes = ({student}) => {
    const userReaction = Object.entries(votesObj).map(([title, image]) => {
        return (
            <button key={title} type="button" className="reacton-button">
                {image} {student.reactions[title]}
            </button>
        )
    });

    return <div>{userReaction}</div>
}