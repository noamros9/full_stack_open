import axios from 'axios'

import ReactDOM from 'react-dom/client'
const root = ReactDOM.createRoot(document.getElementById('root'));

import App from './App'
import CourseInfoApp from './part1/courseinfo/CourseInfoApp'
import AnecdotesApp from './part1/anecdotes/AnecdotesApp'
import UnicafeApp from './part1/unicafe/UnicafeApp'
import NotesApp from './part2/notes/NotesApp'
import PhonebookApp from './part2/phonebook/PhonebookApp'

export const renderApp = () => {
    root.render(<App />);
}

export const renderCourseInfoApp = () => {
    root.render(<CourseInfoApp />);
}

export const renderAnecdotesApp = () => {
    root.render(<AnecdotesApp />);
}

export const renderUnicafeApp = () => {
    root.render(<UnicafeApp />);
}

export const renderNotesApp = () => {
    root.render(<NotesApp />);
}

export const renderPhonebookApp = () => {
    root.render(<PhonebookApp />);
}