const Country = ({country, onCountryClick}) => {

    const handleCountryClick = function(){
        onCountryClick(country);
    }

    return (
        <div className='country'>
        <li>
            <img src={country.flags.png} onClick={handleCountryClick} />
            <br/>
            <h3>{country.name.common}</h3>
        </li>
    </div>
    )
}

export default Country;