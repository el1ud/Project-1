//fetch from the json api//
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
//we get the image and name on the front side //
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
//we get the ingredients and like button//
            const flipCardBack = document.createElement('div');
            flipCardBack.classList.add('flip-card-back');
            const ingredients = document.createElement('p');
            ingredients.textContent = 'Ingredients: ' + item.ingredients;
//setting the like button to increase//
            const likeButton = document.createElement('button');
            likeButton.classList.add('like-button');
            likeButton.textContent = 'Like (' + item.likes + ')';
            likeButton.addEventListener('click', () => {
                item.likes++;
                likeButton.textContent = 'Like (' + item.likes + ')';
                likeButton.style.backgroundColor = 'green';
                likeButton.style.color = 'white';
            });
// adding the meal name at the back//
            const mealNameBack = document.createElement('h3');
            mealNameBack.textContent = item.name; 
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

// adding the meal button //

document.getElementById('add-meal-button').addEventListener('click', () => {
  const newMealName = prompt('Enter the name of the new meal:');
  if (newMealName) {
      const newMeal = {
          id: data.data.data.length + 1, 
          name: newMealName,
          image: 'https://via.placeholder.com/300', 
          likes: 0, 
          ingredients: 'New ingredients' 
      };


      data.data.data.push(newMeal);

      renderMeal(newMeal);
  }
});
