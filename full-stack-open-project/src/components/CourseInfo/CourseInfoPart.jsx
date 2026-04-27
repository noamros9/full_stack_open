const CourseInfoPart = ({ part }) => {
    return (<p>
        Part name: <b>{part.name}</b> - includes {part.exercises} excercises
    </p>
    )
}

export default CourseInfoPart