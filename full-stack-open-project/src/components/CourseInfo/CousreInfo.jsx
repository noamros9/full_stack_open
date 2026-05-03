import CourseInfoHeader from './CourseInfoHeader'
import CourseInfoContent from './CourseInfoContent'
import CourseInfoTotal from './CourseInfoTotal'


const CousreInfo = ({ courseInfo }) => {
    return (
        <div>
            <CourseInfoHeader courseName={courseInfo.name} />
            <CourseInfoContent courseContent={courseInfo.parts} />
            <CourseInfoTotal courseContent={courseInfo.parts} />
        </div>
    )
}

export default CousreInfo