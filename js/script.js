const container = document.getElementById("cards-container");

// Buscar lista de Pokémon
fetch("https://pokeapi.co/api/v2/pokemon?limit=54")
    .then(response => response.json())
    .then(data => {
        data.results.forEach(pokemon => {

            // Puxado dos detalhes de cada Pokémon
            fetch(pokemon.url)
                .then(response => response.json())
                .then(details => {
                    
                    // Criação do card do Pokémon da API
                    const card = document.createElement("div");
                    card.classList.add("card");

                    const fav = document.createElement("div");
                    fav.classList.add("favorite");
                    fav.innerHTML = "♡";

                    fav.addEventListener("click", () => {
                        fav.classList.toggle("Active");
                        fav.innerHTML = fav.classList.contains("Active") ? "♥" : "♡";
                    });


                    const img = document.createElement("img");
                    img.src = details.sprites.front_default;

                    const name = document.createElement("h3");
                    name.innerText = details.name.toUpperCase();

                    const type = document.createElement("p");
                    type.innerText = "Tipo: " + details.types[0].type.name;

                    card.appendChild(fav);
                    card.appendChild(img);
                    card.appendChild(name);
                    card.appendChild(type);

                    container.appendChild(card);

                });
        });
    });
