import { useState, useEffect } from "react";
import axios from "axios";
import Note from "./Note";

const NotesList = () => {
    const [notes, setNotes] = useState([])
    const [newNote, setNewNote] = useState('')
    const [showAll, setShowAll] = useState(false)

    useEffect(() => {
        axios
            .get('http://localhost:3001/notes')
            .then(response => {
                setNotes(response.data)
            })
    }, [])

    const addNote = (e) => {
        e.preventDefault()
        const noteObject = {
            content: newNote,
            important: Math.random() < 0.5,
            id: String(notes.length + 1),
        }

        setNotes(notes.concat(noteObject))
        setNewNote('')
    }

    const handleNoteChange = (e) => {
        setNewNote(e.target.value)
    }

    return (
        <div>
            <h1>Notes</h1>
            <div>
                <button onClick={() => setShowAll(!showAll)}>
                    show {showAll ? 'important notes only' : 'all notes'}
                </button>
            </div>
            <ul>
                {notes
                    .filter(note => showAll || note.important)
                    .map(note =>
                        <Note key={note.id} note={note} />
                    )}
            </ul>
            <form onSubmit={addNote}>
                <input placeholder={'a new note...'} value={newNote} onChange={handleNoteChange} />
                <button type="submit">save</button>
            </form>
        </div>
    )
}

export default NotesList