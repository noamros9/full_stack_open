import { useState } from 'react'
import SingleCountryInfo from './SingleCountryInfo'

const CountriesList = ({ countries, newSearch }) => {
    const [countriesToShow, setCountriesToShow] = useState([])

    const toggleShowCountryInfo = (countryName) => {
        if (countriesToShow.includes(countryName)) {
            setCountriesToShow(countriesToShow.filter(name => name !== countryName))
        } else {
            setCountriesToShow(countriesToShow.concat(countryName))
        }
    }


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
                countriesToShow.includes(country.name.common) ?
                    <li key={country.cca3}>
                        <SingleCountryInfo country={country} />
                        <button onClick={() => toggleShowCountryInfo(country.name.common)}>hide full info</button>
                    </li> :
                    <li key={country.cca3}>
                        {country.name.common}
                        <button onClick={() => toggleShowCountryInfo(country.name.common)}>show full info</button>
                    </li>
            )}
        </ul>
    )
}

export default CountriesList