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
      <Header courseName={courseInfo.name} />
      <Content courseContent={courseInfo.parts} />
      <Total courseContent={courseInfo.parts} />
    </div>
  )
}

const Header = ({ courseName }) => {
  return (
    <h1>{courseName}</h1>
  )
}

const Content = ({ courseContent }) => {
  return (
    <>
      <Part part={courseContent[0]} />
      <Part part={courseContent[1]} />
      <Part part={courseContent[2]} />
    </>
  )
}

const Part = ({ part }) => {
  console.log(part)
  return (<p>
    Part name: <b>{part.name}</b> - includes {part.exercises} excercises
  </p>
  )
}

const Total = ({ courseContent }) => {
  return (
    <p>Number of exercises {Object.values(courseContent).reduce((sum, { exercises }) => sum + exercises, 0)}</p>
  )
}

export default App