import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";

function Beers() {
const [beers, setBeers] = useState([])
useEffect(() => {
    const fetchBeers = async () => {
        let response = await axios.get("https://ih-beers-api2.herokuapp.com/beers");
        console.log(response.data)
        setBeers(response.data)
    }
    fetchBeers();
})
    return(
<>
<Navbar/>
{beers.map((beer) =>
<Link className="Link" key={beer._id} to="/beers/:beerId">
<img className="Image" src={beer.image_url}/>
<p>{beer.name}</p>
<p>{beer.tagline}</p>
<p>{beer.contributed_by}</p>
</Link>
)}
</>
    )
}

export default Beers;