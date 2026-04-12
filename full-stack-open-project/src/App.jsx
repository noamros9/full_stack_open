const App = () => {
  const course = 'Half Stack application development'
  const content = [{
    name: 'Fundamentals of React',
    exercises: 10
  }, {
    name: 'Using props to pass data',
    exercises: 7
  }, {
    name: 'State of a component',
    exercises: 14
  }]

  return (
    <div>
      <Header course={course} />
      <Content {...content} />
      <Total {...content} />
    </div>
  )
}

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Content = (content) => {
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