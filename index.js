
function showSection(sectionId) {
  const sections = document.querySelectorAll('.content-section');
  sections.forEach(sec => {
    sec.style.display = (sec.id === sectionId) ? 'block' : 'none';
  });

  if (sectionId === 'random-dog') {
    getDog(); // Load a random dog
  } else if (sectionId === 'breed-list') {
    getBreeds(); // Load breed list
  }
}

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

async function getBreeds() {
  try {
    const response = await fetch("https://api.thedogapi.com/v1/breeds");
    const breeds = await response.json();

    const list = document.getElementById("breed-ul");
    list.innerHTML = ""; 
    breeds.forEach(breed => {
      const li = document.createElement("li");
      li.textContent = `${breed.name} — ${breed.temperament || "No temperament info"}`;
      list.appendChild(li);
    });
  } catch (error) {
    console.error("Error fetching breed list:", error);
  }
}
