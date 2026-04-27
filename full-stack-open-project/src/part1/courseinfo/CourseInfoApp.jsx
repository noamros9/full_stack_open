import CourseInfo from '../../components/CourseInfo/CousreInfo'

const App = () => {

    const courseInfo = {
        name: 'Half Stack application development',
        id: 1,
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10,
                id: 1
            },
            {
                name: 'Using props to pass data',
                exercises: 7,
                id: 2
            },
            {
                name: 'State of a component',
                exercises: 14,
                id: 3
            }
        ]
    }


    return (
        <CourseInfo courseInfo={courseInfo} />
    )
}

export default App