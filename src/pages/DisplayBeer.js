import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import axios from "axios";

function DisplayBeer() {
    const { beerId } = useParams()
const [displayBeer, setDisplayBeer] = useState([])

useEffect(() => {
    const fetchDisplayBeer = async () => {
        let response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`);
        console.log(response.data)
        setDisplayBeer(response.data)
    }
    fetchDisplayBeer();
})
    return displayBeer ? (
<>
<Navbar/>
<div>
<img className="Image" src={displayBeer.image_url} />
<h2>{displayBeer.name}</h2>
<p>{displayBeer.tagline}</p>    
<p>{displayBeer.first_brewed}</p>    
<p>{displayBeer.attenuation_level}</p>    
<p>{displayBeer.description}</p>    
<p>{displayBeer.contributed_by}</p>     
</div>
</>
) : (
    <h1>Loading...</h1>
)

}

export default DisplayBeer;