import { useState, useEffect } from 'react'
import axios from 'axios'
import countriesInfoService from '../../services/countriesInfo'
import FilterCountries from '../../components/CountriesInfo/FilterCountries'
import CountriesList from '../../components/CountriesInfo/CountriesList'

const App = () => {
    const [newSearch, setNewSearch] = useState('')
    const [countries, setCountries] = useState([])

    useEffect(() => {
        countriesInfoService
            .getAllCountries()
            .then(initialCountries => {
                setCountries(initialCountries)
            })
    }, [])

    const handleSearch = (event) => {
        setNewSearch(event.target.value)
    }

    return (
        <div>
            <h1>Countries Information</h1>
            <FilterCountries newSearch={newSearch} handleSearch={handleSearch} />
            <CountriesList countries={countries} newSearch={newSearch} />
        </div>
    )
}

export default App

