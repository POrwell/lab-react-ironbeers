import { Link } from "react-router-dom";
import image1 from "../assets/beers.png"
import image2 from "../assets/new-beer.png"
import image3 from "../assets/random-beer.png"

function Home() {
    return(
<div className="Home">
    <Link className="Link" to="/beers">
    <img src={image1} alt="beer glass"/>
    <p>All Beers</p>
    </Link>
    <Link className="Link" to="/randombeer">
    <img src={image2} alt="beer glass"/>
    <p>Random Beer</p>
    </Link>
    <Link className="Link" to="/newbeer">
    <img src={image3} alt="beer glass"/>
    <p>New Beer</p>
    </Link>
</div>
    )
}

export default Home;