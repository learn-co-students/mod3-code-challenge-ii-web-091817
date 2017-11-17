document.addEventListener("DOMContentLoaded", function(){
  getData()
})

let beerData;

function getData() {
  const addy ='http://localhost:3000/beers'
  return fetch(addy).then(res => res.json()).then(res => {
    beerData = res
    loadBeers()
  })
}

const beerList = document.getElementById("list-group")
function loadBeers(){
  beerList.innerHTML = `${beerData.map(eachBeer).join("")}`
}

function eachBeer(beer) {
  return `<li id=${beer.id}>${beer.name}</li>`
}

beerList.addEventListener("click",function(){
  const beerTag = document.getElementById(event.target.id)
  const beerDetail = document.getElementById("beer-detail")
  const beerId = beerTag.id
  getBeer(beerId)
})

function beerShow() {
// beerDetail.innerHTML =
//  `
// <h1>${beer.name}</h1>
// <img src=${beer.url}>
// <h3>${beer.tagline}/h3>
// <textarea>${beer.description}</textarea>
// <button id=beer.id class="btn btn-info">
//   Save
// </button>
// `
}


function getBeer(item) {
  const beerTag = document.getElementById(event.target.id)
  const beerDetail = document.getElementById("beer-detail")
  const beerId = beerTag.id
  beerData.find(beerSort)
}

function beerSort(item) {
  const beerTag = document.getElementById(event.target.id)
  const beerDetail = document.getElementById("beer-detail")
  const beerId = beerTag.id
  return item.id  === beerId
}


// Didn't get a chance to show it, but I know how to completely do fetch: GET, PATCH, POST requests.
