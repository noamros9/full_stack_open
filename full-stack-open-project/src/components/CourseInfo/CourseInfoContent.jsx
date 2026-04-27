import CourseInfoPart from "./CourseInfoPart"

const CourseInfoContent = ({ courseContent }) => {
    return (
        <>
            {courseContent.map(part => <CourseInfoPart key={part.id} part={part} />)}
        </>
    )
}

export default CourseInfoContent