const FavouriteCountries = ({countries}) => {

    const favCountries = countries.map(country => <li>{country.name.common}</li>)

    return (
        <div className='favourite-countries'>
            <h3>Your Favourite Countries</h3>
            <ul>
                {favCountries}
            </ul>
        </div>
    )
}

export default FavouriteCountries;