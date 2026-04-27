import { useState } from 'react'
import NotesList from '../../components/Notes/NotesList'

const App = (props) => {
    const notes = [
        {
            id: 1,
            content: 'HTML is easy',
            important: false
        },
        {
            id: 2,
            content: 'Browser can execute only JavaScript',
            important: true
        },
        {
            id: 3,
            content: 'GET and POST are the most important methods of HTTP protocol',
            important: true
        }
    ]

    return (
        <NotesList notes={notes} />
    )
}

export default App