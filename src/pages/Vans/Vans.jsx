import React from "react"
import { Link } from "react-router-dom"

export default function Vans() {
    const [vans, setVans] = React.useState([])
    React.useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])

    const vanElements = vans.map(van => (
        <div key={van.id} className="van-tile">
            <Link 
                to={`/vans/${van.id}`} 
                aria-label={`View details for $${van.name} priced at ${van.price} per day`}
            >
                <img src={van.imageUrl} alt={`Image of ${van.name}`}/>
                <div className="van-info">
                    <p className="van-title">{van.name}</p>
                    <p>${van.price}<span>/day</span></p>
                </div>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </Link>
        </div>
    ))

    return (
        <div className="van-list-container">
            <h1>Explore our van options</h1>
            <div className="van-list">
                {vanElements}
            </div>
        </div>
    )
}
