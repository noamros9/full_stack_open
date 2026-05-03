import axios from 'axios'

import ReactDOM from 'react-dom/client'
const root = ReactDOM.createRoot(document.getElementById('root'));

import App from './App'
import CourseInfoApp from './part1/courseinfo/CourseInfoApp'
import AnecdotesApp from './part1/anecdotes/AnecdotesApp'
import UnicafeApp from './part1/unicafe/UnicafeApp'
import NotesApp from './part2/notes/NotesApp'
import PhonebookApp from './part2/phonebook/PhonebookApp'
import CountriesInfoApp from './part2/countriesInfo/CountriesInfoApp'

const renderApp = () => {
    root.render(<App />);
}

const renderCourseInfoApp = () => {
    root.render(<CourseInfoApp />);
}

const renderAnecdotesApp = () => {
    root.render(<AnecdotesApp />);
}

const renderUnicafeApp = () => {
    root.render(<UnicafeApp />);
}

const renderNotesApp = () => {
    root.render(<NotesApp />);
}

const renderPhonebookApp = () => {
    root.render(<PhonebookApp />);
}

const renderCountriesInfoApp = () => {
    root.render(<CountriesInfoApp />);
}

export {
    renderApp,
    renderCourseInfoApp,
    renderAnecdotesApp,
    renderUnicafeApp,
    renderNotesApp,
    renderPhonebookApp,
    renderCountriesInfoApp
}