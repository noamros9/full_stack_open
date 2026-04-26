const CourseInfoTotal = ({ courseContent }) => {
    return (
        <p>Number of exercises {Object.values(courseContent).reduce((sum, { exercises }) => sum + exercises, 0)}</p>
    )
}

export default CourseInfoTotal