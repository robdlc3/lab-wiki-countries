import { Link } from "react-router-dom"

const CountriesList = ({ countries }) => {

    return (


        <div >

            <div>

                <div className="col-5" style={{ maxHeight: "90vh", overflow: "scroll" }}>
                    <div className="list-group">

                        {countries.map((e) => {
                            return <Link to={`/${e.alpha3Code}`}>{e.name.common}</Link>
                        })}

                    </div>
                </div>
            </div>
        </div>

    )
}


export default CountriesList