import Country from './Country';

const CountriesList = ({countries}) => {

    const countriesItems = countries.map((country, index) => {
        return <Country key={index} country={country} />
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