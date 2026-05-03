import { useState } from 'react'

const PersonsList = ({ persons, newSearch, deletePerson }) => {
    return (
        <ul>
            {persons
                .filter(person => person.name.toLowerCase().includes(newSearch.toLowerCase()))
                .map(person =>
                    <li key={person.id}>{person.name} - {person.number}
                        <button onClick={() => deletePerson(person)}>delete</button>
                    </li>
                )}
        </ul>
    )
}

export default PersonsList