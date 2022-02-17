import {useState, useEffect} from 'react';
import CountriesList from '../components/CountriesList';

const CountriesContainer = () => {

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        getCountries();
    }, [])

    const getCountries = function(){
        fetch('https://restcountries.com/v3.1/all')
        .then(result => result.json())
        .then(data => setCountries(data))
    }

    const worldPopulation = countries.reduce((total, currentCountry) => {
        return total += currentCountry.population;
    }, 0)

    return (
        <div className='countries-container'>
            <h2>World Population: {worldPopulation}</h2>
            <CountriesList countries={countries} />
        </div>
    )
}

export default CountriesContainer;