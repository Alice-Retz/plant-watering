// import functions and grab DOM elements
const plantImg = document.getElementById('plant-img');
const plantFeedback = document.getElementById('plant-feedback');
const waterBtn = document.getElementById('water-btn');

// initialize state
let waterLevel = 0;

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

// add event listener to button click
waterBtn.addEventListener('click', ()=>{
  // increment the waterLevel
    waterLevel++; // shorthand for waterLevel = waterLevel + 1

  // if water level < 3
    if (waterLevel < 3) {
      //    update the image to thirsty image
        plantImg.src = './assets/thirsty.jpeg';
        plantImg.alt = 'thirsty-plant';
      //    display message "plant is thirsty"
        plantFeedback.textContent = `The plant is thirsty! ${waterLevel}`;

    // else if water level <= 10
    } else if (waterLevel <= 10) {
        //    update the image to the healthy image
        plantImg.src = './assets/healthy.jpeg';
        plantImg.alt = 'healthy-plant';
        //    display the message plant is healthy
        plantFeedback.textContent = `The plant is healthy! ${waterLevel}`;
    // else if water level > 10
    } else {
        //     update the image to overwatered
        plantImg.src = './assets/overwatered.jpeg';
        //     display the message plant is overwatered
        plantFeedback.textContent = `The plant is overwatered! ${waterLevel}`;
    }
})