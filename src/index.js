window.addEventListener('load', function(event) {
  console.log('hi')

  fetch(`http://localhost:3000/beers`).then(function(res) {
    return res.json()
  }).then(function(data) {
    putNamesOnDOM(data)
  })
})



function putNamesOnDOM(data) {
  let beerNameHere = document.getElementById('list-group')
  let beerDetail = document.getElementById('beer-detail')
  // console.log(beerNameHere)
  for(let i = 0; i<data.length; i++){
    let li = document.createElement('li')
    li.innerHTML = data[i].name
    li.setAttribute("class", 'list-group-item')
    li.setAttribute("id", i)
    beerNameHere.appendChild(li)

    li.addEventListener('click',function(e) {
      console.log(data[i]);
      beerDetail.innerHTML = ''
      let beerName = document.createElement('h1')
      let picture = document.createElement('img')
      let beerTag = document.createElement('h3')
      let beerDesc = document.createElement('textarea')
      let createButton = document.createElement('button')
      createButton.setAttribute('id','edit-beer')
      createButton.setAttribute('class','btn btn-info')
      // console.log(createButton)
      createButton.innerHTML = 'save'

      beerName.setAttribute('id', 'beerTitle')
      // console.log(beerTag);
      // let previous = document.getElementById('beerTitle')
      beerDesc.innerHTML = data[i].description
      // console.log(beerDesc)
      //remove child issue with getting node, does not allow for future clicks on
      // save button to hit event listener, save button takes into account
      //additional beers that have been clicked on and will increment accordingly so
      //need to fix
      beerTag.innerHTML = data[i].tagline
      picture.src = data[i].image_url
      beerName.innerHTML = data[i].name
      // beerDetail.removeChild(previous)
      // beerDetail.innerHTML = beerName.innerHTML
      // beerDetail.innerHTML = picture.innerHTML
      // beerDetail.innerHTML = beerTag.innerHTML
      // beerDetail.innerHTML = beerDesc.innerHTML
      // console.log(beerName);
      beerDetail.appendChild(createButton)
      beerDetail.appendChild(beerName)
      beerDetail.appendChild(picture)
      beerDetail.appendChild(beerTag)
      beerDetail.appendChild(beerDesc)
      beerDetail.appendChild(createButton)

      let saveBeerButton = document.getElementById('edit-beer')
      saveBeerButton.addEventListener('click', function(e) {
        console.log('hi')
        //call patch here
      })
      // console.log(data[i].name)
    })
  }



}

// function updateDesc(id, input) {
//   fetch(`des`, {
//     method:'PATCH',
//     headers:{'Accept':'application/json', 'Content-Type':'application/json'},
//     body:JSON.stringify(input)
//   }).then(function(res) {
//     return json.res()
//   }).then(function(data) {
//
//   })
// }
