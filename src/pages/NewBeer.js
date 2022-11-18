import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function NewBeer() {
const navigate = useNavigate();
const [newName, setNewName] = useState("")
const [newTagline, setNewTagline] = useState("")
const [newDescription, setNewDescription] = useState("")
const [newBrewed, setNewBrewed] = useState("")
const [newTips, setNewTips] = useState("")
const [newLevel, setNewLevel] = useState(0)
const [newCont, setNewCont] = useState("")

const handleSubmit = async event => {
event.preventDefault()
await fetch("https://ih-beers-api2.herokuapp.com/beers/new", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({name: newName, tagline: newTagline, description: newDescription, first_brewed: newBrewed, brewers_tips: newTips, attenuation_level: newLevel, contributed_by: newCont})
})
navigate("/beers")
}

    return(
<>
<Navbar/>
<form className="Form" onSubmit={handleSubmit}>
        <label>
          Name <input value={newName} onChange={event => setNewName(event.target.value)} />
        </label>
        <label>
          Tagline <input value={newTagline} onChange={event => setNewTagline(event.target.value)} />
        </label>
        <label>
          Description <input value={newDescription} onChange={event => setNewDescription(event.target.value)}/>
        </label>
        <label>
          First Brewed <input value={newBrewed} onChange={event => setNewBrewed(event.target.value)}/>
        </label>
        <label>
          Brewers' Tips <input value={newTips} onChange={event => setNewTips(event.target.value)}/>
        </label>
        <label>
          Attenuation Level <input type='number' value={newLevel} onChange={event => setNewLevel(event.target.value)}/>
        </label>
        <label>
          Contributed By <input value={newCont} onChange={event => setNewCont(event.target.value)}/>
        </label>
<button className="Button" type='submit'>Add</button>
</form>
</>
)

}

export default NewBeer;