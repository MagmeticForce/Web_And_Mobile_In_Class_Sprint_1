(
    function () {
        "use strict()";

        let images = []

        const showDogButton = document.getElementById("button-dog");
        const showCatButton = document.getElementById("button-cat");
        const showCowButton = document.getElementById("button-cow");

        const animalCardContainer = document.getElementById("animal-card-container");

        function addAnimalImage(imageInput) {
                imageData = {
                id: crypto.randomUUID(),
                src: "images/" + imageInput + ".jpg"
            }
            images.unshift(imageData);
            renderAnimalImages();   
        }

        function renderAnimalImages() {
            const fragment = document.createDocumentFragment();
            images.forEach( (image) => {
                const card = document.createElement("div");
                card.className = "image-card"
                card.innerHTML = `
                    <img src="${image.src}" alt="image of a ${image.src}.">
                    <button type="button" class="button-hide" data-id="${image.id}">Hide Result</button>
                `;
                fragment.appendChild(card);
                }
            );
            animalCardContainer.innerHTML = "";
            animalCardContainer.appendChild(fragment);
        }

        showDogButton.addEventListener('click', (event) => {
            addAnimalImage("dog");
        });

        showCatButton.addEventListener('click', (event) => {
            addAnimalImage("tabby-cat");
        });
    
        showCowButton.addEventListener('click', (event) => {
            addAnimalImage("cow");
        });

        animalCardContainer.addEventListener('click', (event) => {
            const target = event.target;
            if (target.classList.contains('button-hide')) {
                const imageId = target.dataset.id;
                console.log(target.dataset.id);
                images = images.filter( (item) => {return item.id !== imageId;} );
                renderAnimalImages();
                // Does not work for some reason.
                // Fix: image ID is undefined, somehow
                // target.dataset.id is failing.
            }
        });

    }
)();