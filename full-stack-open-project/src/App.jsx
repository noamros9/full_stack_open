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
  const content = [part1, part2, part3]

  return (
    <div>
      <Header course={course} />
      <Content {...content} />
      <Total {...content} />
    </div>
  )
}

const Header = ({ course }) => {
  return (
    <h1>{course}</h1>
  )
}

const Content = (content) => {
  console.log(content)
  return (
    <>
      <Part part={content[0]} />
      <Part part={content[1]} />
      <Part part={content[2]} />
    </>
  )
}

const Part = ({ part }) => {
  return (<p>
    Part name: <b>{part.name}</b> - includes {part.exercises} excercises
  </p>
  )
}

const Total = (content) => {
  return (
    <p>Number of exercises {Object.values(content).reduce((sum, { exercises }) => sum + exercises, 0)}</p>
  )
}

export default App