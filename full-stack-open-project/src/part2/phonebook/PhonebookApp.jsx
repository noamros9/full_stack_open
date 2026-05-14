import { useState, useEffect } from 'react'
import axios from 'axios'
import phonebookService from '../../services/phonebook'
import FilterPhonebook from '../../components/Phonebook/FilterPhonebook'
import PhonebookRegistrationForm from '../../components/Phonebook/PhonebookRegistrationForm'
import PersonsList from '../../components/Phonebook/PersonsList'
import Notification from '../../components/Notification'

const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [notificationMessage, setNotificationMessage] = useState(null)
    const [notificationClassName, setNotificationClassName] = useState('')
    const [newSearch, setNewSearch] = useState('')

    useEffect(() => {
        phonebookService
            .getAll()
            .then(initialPersons => {
                setPersons(initialPersons)
            })
    }, [])

    const updateNumber = (person) => {
        window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)
        const changedPerson = { ...person, number: newNumber }
        phonebookService
            .update(person.id, changedPerson)
            .then(returnedPerson => {
                setPersons(persons.map(p => p.id !== person.id ? p : returnedPerson))
                setNotificationMessage(`Updated ${person.name}'s number`)
                setNotificationClassName('success')
                setTimeout(() => {
                    setNotificationMessage(null)
                    setNotificationClassName('')
                }, 5000)
            })
            .catch(error => {
                setNotificationMessage(`Information of ${person.name} has already been removed from server`)
                setNotificationClassName('error')
                setTimeout(() => {
                    setNotificationMessage(null)
                    setNotificationClassName('')
                }, 5000)
                setPersons(persons.filter(p => p.id !== person.id))
            })
        return
    }

    const addPerson = (e) => {
        e.preventDefault()
        if (persons.some(person => person.name === newName)) {
            return updateNumber(persons.find(p => p.name === newName))
        }
        const personObject = {
            name: newName,
            number: newNumber,
            id: persons.length + 1,
        }
        phonebookService
            .create(personObject)
            .then(returnedPerson => {
                setPersons(persons.concat(returnedPerson))
                setNewName('')
                setNewNumber('')
            })
        setNotificationMessage(`Added ${personObject.name}`)
        setNotificationClassName('success')
        setTimeout(() => {
            setNotificationMessage(null)
            setNotificationClassName('')
        }, 5000)
    }


    const handlePersonChange = (e) => {
        const newPersonForm = e.target.form
        setNewName(newPersonForm.elements.name.value)
        setNewNumber(newPersonForm.elements.number.value)
    }

    const handleSearch = (e) => {
        setNewSearch(e.target.value)
    }

    const deletePerson = (person) => {
        if (window.confirm(`Are you sure you want to delete ${person.name}?`)) {
            phonebookService
                .deletePerson(person.id)
                .then(() => {
                    setPersons(persons.filter(p => p.id !== person.id))
                })
            setNotificationMessage(`Deleted ${person.name}`)
            setNotificationClassName('success')
            setTimeout(() => {
                setNotificationMessage(null)
                setNotificationClassName('')
            }, 5000)
        }
    }


    return (
        <div>
            <h1>Phonebook</h1>
            <Notification message={notificationMessage} className={notificationClassName} />
            <FilterPhonebook newSearch={newSearch} handleSearch={handleSearch} />
            <h3>Add a New Contact</h3>
            <PhonebookRegistrationForm
                addPerson={addPerson}
                newName={newName}
                newNumber={newNumber}
                handlePersonChange={handlePersonChange}
            />
            <h2>Numbers</h2>
            <PersonsList persons={persons} newSearch={newSearch} deletePerson={deletePerson} />
        </div>
    )
}

export default App