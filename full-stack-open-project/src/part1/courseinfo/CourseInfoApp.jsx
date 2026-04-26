import CourseInfoHeader from '../../components/CourseInfo/CourseInfoHeader'
import CourseInfoContent from '../../components/CourseInfo/CourseInfoContent'
import CourseInfoTotal from '../../components/CourseInfo/CourseInfoTotal'

const App = () => {
    const course = 'Half Stack application development'
    const part1 = {
        name: 'Fundamentals of React',
        exercises: 10
    }
    const part2 = {
        name: 'Using props to pass data',
        exercises: 7
    }
    const part3 = {
        name: 'State of a component',
        exercises: 14
    }
    const courseInfo = {
        name: course,
        parts: [part1, part2, part3]
    }

    return (
        <div>
            <CourseInfoHeader courseName={courseInfo.name} />
            <CourseInfoContent courseContent={courseInfo.parts} />
            <CourseInfoTotal courseContent={courseInfo.parts} />
        </div>
    )
}

export default App