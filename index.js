//document.addEventListener("DOMContentLoaded", function () {
    ////const container = document.querySelector(".flip-card-container");
  
   //// fetch("http://localhost:3000/airplanes")
   //   .then(response => response.json())
    //  .then(data => {
     //   data.forEach(item => {
       //   const flipCard = document.createElement("div");
         // flipCard.classList.add("flip-card");
  //
    //      const flipCardInner = document.createElement("div");
      //    flipCardInner.classList.add("flip-card-inner");
  //
    //      const flipCardFront = document.createElement("div");
      //    flipCardFront.classList.add("flip-card-front");
        //  flipCardFront.style.backgroundImage = `url(${item.image})`;
  
          //const flipCardBack = document.createElement("div");
          //flipCardBack.classList.add("flip-card-back");
          //flipCardBack.innerHTML = `
            //<p>${item.description}</p>
            //<button class="like-button">Like</button>
          //`;
  
          //flipCardInner.appendChild(flipCardFront);
          //flipCardInner.appendChild(flipCardBack);
          //flipCard.appendChild(flipCardInner);
          //container.appendChild(flipCard);
        //});
      //})
      //.catch(error => console.error("Error fetching data:", error));
  //});

  // script.js

//document.addEventListener('DOMContentLoaded', () => {
  //const cardContainer = document.getElementById('cardContainer');

  // Fetch data from db.json using Fetch API
  //fetch('https://api.myjson.online/v1/records/bcabe328-c19f-4252-87df-59ab6c6e3253')
    //.then(response => response.json())
    //.then(data => {
      // Create flip cards for each item in the data array
      //data.slice(0, 6).forEach(item => {
        //const flipCard = createFlipCard(item) ;
        //cardContainer.appendChild(flipCard);
      //});
    //})
    //.catch(error => console.error('Error fetching data:', error));

  // Function to create a flip card element
  //function createFlipCard(item) {
    //const flipCard = document.createElement('div');
    //flipCard.classList.add('flip-card');

    //const flipCardInner = document.createElement('div');
    //flipCardInner.classList.add('flip-card-inner');

    //const flipCardFront = document.createElement('div');
    //flipCardFront.classList.add('flip-card-front');
    //flipCardFront.innerHTML = `<img src="${item.imageUrl}" alt="Image">`;

    //const flipCardBack = document.createElement('div');
    //flipCardBack.classList.add('flip-card-back');
    //flipCardBack.innerHTML = `
      //<p>${item.description}</p>
      //<button class="like-btn">Like</button>
    //`;

    //flipCardInner.appendChild(flipCardFront);
    //flipCardInner.appendChild(flipCardBack);
    //flipCard.appendChild(flipCardInner);

    //return flipCard;
  //}
//});

// Function to create flip card element
//function createFlipCard(imageSrc, description) {
  //const card = document.createElement('div');
  //card.classList.add('card');
  //card.innerHTML = `
    //<div class="card-inner">
      //<div class="card-front">
       // <img src="${imageSrc}" alt="Image">
      //</div>
      //<div class="card-back">
        //<p>${description}</p>
        //<button class="like-button">Like</button>
      //</div>
//    </div>
  //`;
  //return card;
//}

// Function to fetch data and populate flip cards
// Function to fetch data and populate flip cards
// Function to handle click on "Add Meal" button

document.getElementById('add-meal-button').addEventListener('click', () => {
  // Prompt the user to enter the details of the new meal
  const newMealName = prompt('Enter the name of the new meal:');
  const newMealImage = prompt('Enter the image URL of the new meal:');
  const newMealIngredients = prompt('Enter the ingredients of the new meal (separated by commas):');

  // Validate the input data (e.g., check if the required fields are not empty)
  if (newMealName && newMealImage && newMealIngredients) {
      // Add the new meal to your data source (in this case, the JSON file)
      const newMeal = {
          name: newMealName,
          image: newMealImage,
          ingredients: newMealIngredients,
          likes: 0 // You can set the initial number of likes as needed
      };

      // Add your code to save the new meal to your data source (e.g., append it to the JSON file)

      // For now, let's just display the details of the new meal
      alert('You added a new meal:\nName: ' + newMealName + '\nImage URL: ' + newMealImage + '\nIngredients: ' + newMealIngredients);
  } else {
      alert('Please fill in all fields to add a new meal.');
  }
});






fetch('https://api.myjson.online/v1/records/bcabe328-c19f-4252-87df-59ab6c6e3253')
.then(response => response.json())
.then(data => {
    if (Array.isArray(data.data.data)) {
        const flipCardContainer = document.getElementById('flip-card-container');
        data.data.data.forEach(item => {
            const flipCard = document.createElement('div');
            flipCard.classList.add('flip-card');

            const flipCardInner = document.createElement('div');
            flipCardInner.classList.add('flip-card-inner');

            const flipCardFront = document.createElement('div');
            flipCardFront.classList.add('flip-card-front');
            const img = document.createElement('img');
            img.src = item.image;
            img.alt = item.name;
            img.style.width = '100%';
            const name = document.createElement('h3');
            name.textContent = item.name;
            flipCardFront.appendChild(img);
            flipCardFront.appendChild(name);

            const flipCardBack = document.createElement('div');
            flipCardBack.classList.add('flip-card-back');
            const ingredients = document.createElement('p');
            ingredients.textContent = 'Ingredients: ' + item.ingredients;
            const likeButton = document.createElement('button');
            likeButton.classList.add('like-button');
            likeButton.textContent = 'Like (' + item.likes + ')';
            likeButton.addEventListener('click', () => {
                item.likes++;
                likeButton.textContent = 'Like (' + item.likes + ')';
                likeButton.style.backgroundColor = 'green';
                likeButton.style.color = 'white';
            });

            const mealNameBack = document.createElement('h3'); // New element for meal name on back side
            mealNameBack.textContent = item.name; // Set the meal name on back side
            flipCardBack.appendChild(mealNameBack);
            
            flipCardBack.appendChild(ingredients);
            flipCardBack.appendChild(likeButton);

            flipCardInner.appendChild(flipCardFront);
            flipCardInner.appendChild(flipCardBack);
            flipCard.appendChild(flipCardInner);
            flipCardContainer.appendChild(flipCard);
        });
    } else {
        console.error('Data is not in the expected format:', data);
    }
})
.catch(error => console.error('Error fetching data:', error));

//document.addEventListener('click', function(event) {
  //if (event.target.classList.contains('like-button')) {
    //const likeButton = event.target;
//    const cardBack = likeButton.closest('.card-back');
  //  const likeCount = cardBack.querySelector('.like-count');
    //let count = parseInt(likeCount.textContent) || 0;
    //count++;
    //likeCount.textContent = count;
  //}
//});
