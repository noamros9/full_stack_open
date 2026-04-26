import ReactDOM from 'react-dom/client'

import App from './App'
import AnecdotesApp from './part1/anecdotes/AnecdotesApp'
import UnicafeApp from './part1/unicafe/UnicafeApp'
import NotesApp from './part2/NotesApp'

const root = ReactDOM.createRoot(document.getElementById('root'));

switch (import.meta.env.VITE_ROOT_APP) {
    case 'AnecdotesApp':
        root.render(<AnecdotesApp />);
        break;
    case 'UnicafeApp':
        root.render(<UnicafeApp />);
        break;
    case 'NotesApp':
        const notes = [
            {
                id: 1,
                content: 'HTML is easy',
                important: true
            },
            {
                id: 2,
                content: 'Browser can execute only JavaScript',
                important: false
            },
            {
                id: 3,
                content: 'GET and POST are the most important methods of HTTP protocol',
                important: true
            }
        ]
        root.render(<NotesApp notes={notes} />);
        break;
    default:
        root.render(<App />);
}

