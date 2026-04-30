import { useState } from 'react'

const CountriesList = ({ countries, newSearch }) => {
    if (newSearch === '') {
        return <p>Type a country name to search for information</p>
    }
    const filteredCountries = countries.filter(country => country.name.common.toLowerCase().includes(newSearch.toLowerCase()))
    if (filteredCountries.length > 10) {
        return <p>Too many matches, please filter some more</p>
    }
    if (filteredCountries.length === 0) {
        return <p>No countries found</p>
    }
    return (
        <ul>
            {filteredCountries.map(country =>
                <li key={country.cca3}>
                    {country.name.common} <br />
                    Capital: {country.capital} <br />
                    Area: {country.area}
                </li>
            )}
        </ul>
    )
}

export default CountriesList