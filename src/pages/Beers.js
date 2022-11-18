import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import Search from "../components/Search"

function Beers({beers, setBeers}) {
const [query, setQuery] = useState("")
useEffect(() => {
    const fetchBeers = async () => {
        let response = await axios.get("https://ih-beers-api2.herokuapp.com/beers");
        
        setBeers(response.data)
    }
    fetchBeers();
})
    return(
<>
<Navbar/>
<div className="Search">
<Search className="Search" query={query} setQuery={setQuery}/>
</div>
{beers.filter((beer) => beer.name.toLowerCase().includes(query.toLowerCase())).map((beer) =>
<Link className="Link" key={beer._id} to={`/beers/${beer._id}`}>
<img className="Image" src={beer.image_url} alt="some beer"/>
<p>{beer.name}</p>
<p>{beer.tagline}</p>
<p>{beer.contributed_by}</p>
</Link>
)}
</>
    )
}

export default Beers;