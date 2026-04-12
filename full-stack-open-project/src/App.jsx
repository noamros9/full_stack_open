const App = () => {
  const course = 'Half Stack application development'
  const content = {
    part1: 'Fundamentals of React',
    exercises1: 10,
    part2: 'Using props to pass data',
    exercises2: 7,
    part3: 'State of a component',
    exercises3: 14
  }

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
      <p>
        {content.part1} {content.exercises1}
      </p>
      <p>
        {content.part2} {content.exercises2}
      </p>
      <p>
        {content.part3} {content.exercises3}
      </p>
    </>
  )
}

const Total = (content) => {
  return (
    <p>Number of exercises {content.exercises1 + content.exercises2 + content.exercises3}</p>
  )
}

export default App