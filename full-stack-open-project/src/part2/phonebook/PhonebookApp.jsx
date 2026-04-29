import { useState, useEffect } from 'react'
import axios from 'axios'
import FilterPhonebook from '../../components/Phonebook/FilterPhonebook'
import PhonebookRegistrationForm from '../../components/Phonebook/PhonebookRegistrationForm'
import PersonsList from '../../components/Phonebook/PersonsList'

const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [newSearch, setNewSearch] = useState('')

    useEffect(() => {
        axios
            .get('http://localhost:3001/persons')
            .then(response => {
                setPersons(response.data)
            })
    }, [])

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