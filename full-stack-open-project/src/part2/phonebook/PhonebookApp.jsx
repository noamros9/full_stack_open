import { useState } from 'react'

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', id: 1 },
    ])
    const [newName, setNewName] = useState('')

    const addPerson = (e) => {
        e.preventDefault()
        const personObject = {
            name: newName,
            id: persons.length + 1,
        }

        setPersons(persons.concat(personObject))
        setNewName('')
    }


    const handlePersonChange = (e) => {
        setNewName(e.target.value)
    }


    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={addPerson}>
                <div>
                    <input value={newName} onChange={handlePersonChange} />
                </div>
                <div>
                    <button type="submit">Add</button>
                </div>
            </form>
            <ul>
                {persons.map(person =>
                    <li key={person.id}>{person.name}</li>
                )}
            </ul>
            <h2>Numbers</h2>
            ...
        </div>
    )
}

export default App