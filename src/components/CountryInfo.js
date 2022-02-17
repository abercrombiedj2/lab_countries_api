import CountriesContainer from "../containers/CountriesContainer";

const CountryInfo = ({country, onAddFavourite}) => {

    const handleButtonClick = function(event){
        onAddFavourite(country);
    }

    const currencyKey = Object.keys(country.currencies);

    return (
        <div className='country-info'>
            <img src={country.flags.png} />
            <h3>{country.name.common}</h3>
            <p>Population: {country.population}</p>
            <p>Region: {country.continents}</p>
            <p>Subregion: {country.subregion}</p>
            <p>Capital City: {country.capital}</p>
            <p>Currency: {country.currencies[currencyKey].name}</p>
            <p>Languages: {Object.values(country.languages).join(', ')}</p>
            <button value={country} onClick={handleButtonClick}>Add to Favourites</button>
        </div>
    )
}

export default CountryInfo;