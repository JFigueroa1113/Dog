async function getDog() {
  try {
    const response = await fetch("https://api.thedogapi.com/v1/images/search?has_breeds=1&api_key=live_W1bVWn6lmxGl1s2Z9BD3ZGDYUFSGC7DTA603LpJIBIp7j6cOCxBwzoG2MdBZHDkP");
    const data = await response.json();
    console.log(data); 

    const dogImage = data[0].url;
    const breedName = data[0].breeds[0]?.name || "Unknown Breed";
    const temperament = data[0].breeds[0]?.temperament || "Temperament not available";
    const origin = data[0].breeds[0]?.origin || "Origin unknown";

    document.getElementById("dog-image").src = dogImage;
    document.getElementById("breed-name").textContent = `Breed: ${breedName}`;
    document.getElementById("dog-temperament").textContent = `Temperament: ${temperament}`;
    document.getElementById("dog-origin").textContent = `Origin: ${origin}`;
  } catch (error) {
    console.error("Error fetching dog data:", error);
  }
}

async function getDogFact() {
  try {
    const response = await fetch("https://dog-api.kinduff.com/api/facts");
    const data = await response.json();
    document.getElementById("dog-fact").textContent = `Fact: ${data.facts[0]}`;
  } catch (error) {
    console.error("Error fetching dog fact:", error);
  }
}


getDog();
