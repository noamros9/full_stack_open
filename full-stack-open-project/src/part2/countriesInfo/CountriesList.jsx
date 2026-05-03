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
    if (filteredCountries.length === 1) {
        const country = filteredCountries[0]
        return (<div>
            <h2>{country.name.common}</h2>
            <p>Capital: {country.capital}</p>
            <p>Area: {country.area} km²</p>
            <h3>Languages:</h3>
            <ul>
                {Object.values(country.languages).map(language =>
                    <li key={language}>{language}</li>
                )}
            </ul>
            <img src={country.flags.png} alt={country.flags.alt} width="200" />
        </div>)
    }
    return (
        <ul>
            {filteredCountries.map(country =>
                <li key={country.cca3}>
                    {country.name.common} <br />
                    Capital: {country.capital} <br />
                    Area: {country.area} km²
                </li>
            )}
        </ul>
    )
}

export default CountriesList