const CountrySelect = ({countries, onCountryClick}) => {

    const handleCountryChange = function(event){
        const chosenCountry = countries[event.target.value];
        onCountryClick(chosenCountry);
    }

    const countryOptions = countries.map((country, index) => {
        return <option key={index} value={index}>{country.name.common}</option>
    })

    return (
        <div className='country-select'>
            <select defaultValue='' onChange={handleCountryChange}>
                <option value='' selected>Pick a country</option>
                {countryOptions}
            </select>
        </div>
    )
}

export default CountrySelect;