import ReactDOM from 'react-dom/client'

import App from './App'
import CourseInfoApp from './part1/courseinfo/CourseInfoApp'
import AnecdotesApp from './part1/anecdotes/AnecdotesApp'
import UnicafeApp from './part1/unicafe/UnicafeApp'
import NotesApp from './part2/notes/NotesApp'
import PhonebookApp from './part2/phonebook/PhonebookApp'

const root = ReactDOM.createRoot(document.getElementById('root'));

switch (import.meta.env.VITE_ROOT_APP) {
    case 'CourseInfoApp':
        root.render(<CourseInfoApp />);
        break;
    case 'AnecdotesApp':
        root.render(<AnecdotesApp />);
        break;
    case 'UnicafeApp':
        root.render(<UnicafeApp />);
        break;
    case 'NotesApp':
        root.render(<NotesApp />);
        break;
    case 'PhonebookApp':
        root.render(<PhonebookApp />);
        break;
    default:
        root.render(<App />);
}

