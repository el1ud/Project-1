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

document.addEventListener('DOMContentLoaded', () => {
  const cardContainer = document.getElementById('cardContainer');

  // Fetch data from db.json using Fetch API
  fetch('http://localhost:3000/airplanes')
    .then(response => response.json())
    .then(data => {
      // Create flip cards for each item in the data array
      data.slice(0, 6).forEach(item => {
        const flipCard = createFlipCard(item) ;
        cardContainer.appendChild(flipCard);
      });
    })
    .catch(error => console.error('Error fetching data:', error));

  // Function to create a flip card element
  function createFlipCard(item) {
    const flipCard = document.createElement('div');
    flipCard.classList.add('flip-card');

    const flipCardInner = document.createElement('div');
    flipCardInner.classList.add('flip-card-inner');

    const flipCardFront = document.createElement('div');
    flipCardFront.classList.add('flip-card-front');
    flipCardFront.innerHTML = `<img src="${item.imageUrl}" alt="Image">`;

    const flipCardBack = document.createElement('div');
    flipCardBack.classList.add('flip-card-back');
    flipCardBack.innerHTML = `
      <p>${item.description}</p>
      <button class="like-btn">Like</button>
    `;

    flipCardInner.appendChild(flipCardFront);
    flipCardInner.appendChild(flipCardBack);
    flipCard.appendChild(flipCardInner);

    return flipCard;
  }
});
