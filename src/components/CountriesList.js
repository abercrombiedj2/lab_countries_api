import Country from './Country';

const CountriesList = ({countries, onCountryClick}) => {

    const countriesItems = countries.map((country, index) => {
        return <Country key={index} country={country} onCountryClick={onCountryClick} />
    })

    return (
        <div className='countries-list'>
            <ul>
                {countriesItems}
            </ul>
        </div>
    )
}

export default CountriesList;