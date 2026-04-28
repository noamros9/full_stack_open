import { useState } from 'react'
import NotesList from '../../components/Notes/NotesList'

const App = ({ notes }) => {
    return (
        <NotesList notes={notes} />
    )
}

export default App