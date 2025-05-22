async function getDog() {
  try {
    const response = await fetch("https://api.thedogapi.com/v1/images/search?has_breeds=1&api_key=live_W1bVWn6lmxGl1s2Z9BD3ZGDYUFSGC7DTA603LpJIBIp7j6cOCxBwzoG2MdBZHDkP");
    const data = await response.json();
    console.log(data); // View the full response in the console

    const dogImage = data[0].url;
    const breedName = data[0].breeds[0]?.name || "Unknown Breed";

    document.getElementById("dog-image").src = dogImage;
    document.getElementById("breed-name").textContent = `Breed: ${breedName}`;
  } catch (error) {
    console.error("Error fetching dog data:", error);
  }
}

// Fetch dog on page load
getDog();
