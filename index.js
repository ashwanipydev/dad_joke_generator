const btnEl  = document.getElementById("btn")
const jokeEL = document.getElementById("joke")

const apiKey = "p65FDQhD3HNSSObYZKKbIA==Gpenifks2DrnaY66"

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey
    }
}


const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1"


async function getJoke(){

    try {
        jokeEL.innerText = "Updating...."
        btnEl.disabled = true
        btnEl.innerText = "Loading......"
        const response = await fetch(apiURL, options)
        const data = await response.json();
        
    
        btnEl.disabled = false
        btnEl.innerText = "Tell Me A Joke"
        jokeEL.innerText = data[0].joke
    } catch (error) {
        btnEl.disabled = false
        btnEl.innerText = "Tell Me A Joke"
        jokeEL.innerText = "An error happened, try again letter"

    }



}


btnEl.addEventListener('click', getJoke)