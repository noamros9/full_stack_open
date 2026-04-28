import { useState } from 'react'
import FilterPhonebook from '../../components/Phonebook/FilterPhonebook'
import PhonebookRegistrationForm from '../../components/Phonebook/PhonebookRegistrationForm'
import PersonsList from '../../components/Phonebook/PersonsList'

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456', id: 1 },
        { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
        { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
        { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
    ])


    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [newSearch, setNewSearch] = useState('')

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

    const handleSearch = (e) => {
        setNewSearch(e.target.value)
    }


    return (
        <div>
            <h2>Phonebook</h2>
            <FilterPhonebook newSearch={newSearch} handleSearch={handleSearch} />
            <h3>Add a New Contact</h3>
            <PhonebookRegistrationForm
                addPerson={addPerson}
                newName={newName}
                newNumber={newNumber}
                handlePersonChange={handlePersonChange}
            />
            <h2>Numbers</h2>
            <PersonsList persons={persons} newSearch={newSearch} />
        </div>
    )
}

export default App