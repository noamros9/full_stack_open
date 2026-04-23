import { useState } from 'react'

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    return (
        <div>
            <h1>Give feedback</h1>
            <Button onClick={() => setGood(good + 1)} text='good' />
            <Button onClick={() => setNeutral(neutral + 1)} text='neutral' />
            <Button onClick={() => setBad(bad + 1)} text='bad' />
            <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
    )
}

const Button = ({ onClick, text }) => {
    return (
        <button onClick={onClick}>{text}</button>
    )
}

const Statistics = ({ good, neutral, bad }) => {
    if (good === 0 && neutral === 0 && bad === 0) {
        return (
            <p>No feedback given</p>
        )
    }
    return (
        <div>
            <h1>Statistics</h1>
            <StatisticLine text="All" value={good + neutral + bad} />
            <StatisticLine text="Good" value={good} />
            <StatisticLine text="Neutral" value={neutral} />
            <StatisticLine text="Bad" value={bad} />
            <StatisticLine text="Average" value={(good - bad) / (good + neutral + bad)} />
            <StatisticLine text="Positive" value={`${(good / (good + neutral + bad)) * 100}%`} />
        </div>
    )
}

const StatisticLine = ({ text, value }) => {
    return (
        <p>{text}: {value}</p>
    )
}


export default App