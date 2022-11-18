import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";

function RandomBeer() {
const [randomBeer, setRandomBeer] = useState()

useEffect(() => {
    const fetchRandomBeer = async () => {
        let response = await axios.get("https://ih-beers-api2.herokuapp.com/beers/random");
        setRandomBeer(response.data)
    }
    fetchRandomBeer();
}, [] )
    return randomBeer ? (
<>
<Navbar/>
<div>
<img className="Image" src={randomBeer.image_url} alt="beer bottle/keg"/>
<h2>{randomBeer.name}</h2>
<p>{randomBeer.tagline}</p>    
<p>{randomBeer.first_brewed}</p>    
<p>{randomBeer.attenuation_level}</p>    
<p>{randomBeer.description}</p>    
<p>{randomBeer.contributed_by}</p>     
</div>
</>
) : (
    <h1>Loading...</h1>
)

}

export default RandomBeer;