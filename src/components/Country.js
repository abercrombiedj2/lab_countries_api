const Country = ({country}) => {
    return (
        <div className='country'>
        <li>
            <img src={country.flags.png}/>
            <br/>
            <h3>{country.name.common}</h3>
        </li>
    </div>
    )
}

export default Country;