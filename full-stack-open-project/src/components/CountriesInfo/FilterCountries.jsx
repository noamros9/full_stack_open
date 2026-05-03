import { useState } from 'react'

const FilterCountries = ({ newSearch, handleSearch }) => {
    return (
        <div>
            Search for: <input name="search" value={newSearch} onChange={handleSearch} />
        </div>
    )
}

export default FilterCountries
