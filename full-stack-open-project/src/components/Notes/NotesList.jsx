import { useState, useEffect } from "react";
import noteService from "../../services/notes";
import Note from "./Note";

const NotesList = () => {
    const [notes, setNotes] = useState([])
    const [newNote, setNewNote] = useState('')
    const [showAll, setShowAll] = useState(true)

    useEffect(() => {
        noteService
            .getAll()
            .then(initialNotes => {
                setNotes(initialNotes)
            })
    }, [])

    const addNote = (e) => {
        e.preventDefault()
        const noteObject = {
            content: newNote,
            important: Math.random() < 0.5,
            id: notes.length + 1,
        }

        noteService
            .create(noteObject)
            .then(returnedNotes => {
                setNotes(notes.concat(returnedNotes))
                setNewNote('')
            })
    }

    const handleNoteChange = (e) => {
        setNewNote(e.target.value)
    }

    const toggleImportanceOf = (id) => {
        const note = notes.find(n => n.id === id)
        const changedNote = { ...note, important: !note.important }

        noteService
            .update(id, changedNote)
            .then(returnedNote => {
                setNotes(notes.map(note => note.id !== id ? note : returnedNote))
            })
            .catch(error => {
                alert(
                    `the note '${note.content}' was already deleted from server`
                )
                setNotes(notes.filter(n => n.id !== id))
            })
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
                        <Note key={note.id} note={note} toggleImportance={() => toggleImportanceOf(note.id)} />
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