import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

// import countries from './../countries.json'


const CountryDetails = ({ countries }) => {

    const [foundcountry, setCountry] = useState(null)

    const { id } = useParams()


    useEffect(() => {
        const country = countries.find((x) => {
            return x.alpha3Code === id
        })
        if (country) {

            setCountry(country)
        }
    }, [id])




    return foundcountry && (



        (
            <div className="col-7">
                <h1>{foundcountry.name.common}</h1>
                <table className="table">
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td style={{ width: "30%" }}>Capital</td>
                            <td>{foundcountry.capital}</td>
                        </tr>
                        <tr>
                            <td>Area</td>
                            <td>
                                {foundcountry.area}
                                <sup>2</sup>
                            </td>
                        </tr>
                        <tr>
                            <td>Borders</td>
                            <td>
                                <ul>

                                    {foundcountry.borders.map((e) => {
                                        return (
                                            <li><Link to={`/${e}`}>{e}</Link></li>
                                        )
                                    })}

                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div >
        )





    )
}

export default CountryDetails