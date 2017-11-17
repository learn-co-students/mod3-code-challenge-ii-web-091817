document.addEventListener("DOMContentLoaded", function () {
  const beerList = document.querySelector('ul');
  const apiUrl = 'http://localhost:4000/beers'
  const beerIds = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9 , 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22];


  fetch('http://localhost:4000/beers').then(resp => resp.json()).then(json => displayNames(json));

  function displayNames(json) {

      for (let i = 0; i < beerIds.length; i++) {
        let li = document.createElement('li')
        li.innerHTML= json[i].name
        beerList.appendChild(li)

      }
  }


})



// **As a user, when the page loads I should see a list of beer names retrieved from an API on the left hand side of the screen.**
//
// **As a user, when I click a beer name, the application should reveal more information about that particular beer.**
//
// **As a user, when looking at the details of a beer I can edit the current description of a beer. Clicking the 'Save' button will save any changes added to the description in the database**


//fetch get request

//display list of all beers by name as links
// --- links will be descriptions
//make update function to update description
