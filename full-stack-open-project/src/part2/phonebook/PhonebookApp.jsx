import { useState } from 'react'

const App = () => {
    const [persons, setPersons] = useState([
        {
            name: 'Arto Hellas',
            number: '040-123456',
            id: 1
        },
    ])

    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const addPerson = (e) => {
        e.preventDefault()
        if (persons.some(person => person.name === newName)) {
            alert(`${newName} is already added to phonebook`)
            return
        }

        const personObject = {
            name: newName,
            number: newNumber,
            id: persons.length + 1,
        }

        setPersons(persons.concat(personObject))
        setNewName('')
        setNewNumber('')
    }


    const handlePersonChange = (e) => {
        const newPersonForm = e.target.form
        setNewName(newPersonForm.elements.name.value)
        setNewNumber(newPersonForm.elements.number.value)
    }


    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={addPerson}>
                <div>
                    <input name="name" placeholder="Insert name here" value={newName} onChange={handlePersonChange} />
                </div>
                <div>
                    <input name="number" placeholder="Insert number here" value={newNumber} onChange={handlePersonChange} />
                </div>
                <div>
                    <button type="submit">Add</button>
                </div>
            </form>

            <h2>Numbers</h2>
            <ul>
                {persons.map(person =>
                    <li key={person.id}>{person.name} - {person.number}</li>
                )}
            </ul>
        </div>
    )
}

export default App