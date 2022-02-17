import {useState, useEffect} from 'react';
import CountriesList from '../components/CountriesList';
import CountryInfo from '../components/CountryInfo';
import CountrySelect from '../components/CountrySelect';
import FavouriteCountries from '../components/FavouriteCountries';

const CountriesContainer = () => {

    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [favouriteCountries, setFavouriteCountries] = useState([]);

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

    const onCountryClick = function(country){
        setSelectedCountry(country);
    }

    const onAddFavourite = function(country){
        const newFavourites = Array.from(new Set([...favouriteCountries, country]));
        setFavouriteCountries(newFavourites);
    }

    return (
        <div className='countries-container'>
            <h2>World Population: {worldPopulation}</h2>
            <CountrySelect countries={countries} onCountryClick={onCountryClick} />
            {/* <CountriesList countries={countries} onCountryClick={onCountryClick} /> */}
            {selectedCountry ? <CountryInfo country={selectedCountry} onAddFavourite={onAddFavourite} /> : null}
            <FavouriteCountries countries={favouriteCountries} />
        </div>
    )
}

export default CountriesContainer;