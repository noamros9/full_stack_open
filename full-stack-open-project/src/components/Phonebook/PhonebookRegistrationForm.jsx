import { useState } from 'react'

const PhonebookRegistrationForm = ({ addPerson, newName, newNumber, handlePersonChange }) => {
    return (
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
    )
}

export default PhonebookRegistrationForm