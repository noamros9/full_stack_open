import CourseInfoPart from "./CourseInfoPart"

const CourseInfoContent = ({ courseContent }) => {
    return (
        <>
            <CourseInfoPart part={courseContent[0]} />
            <CourseInfoPart part={courseContent[1]} />
            <CourseInfoPart part={courseContent[2]} />
        </>
    )
}

export default CourseInfoContent