// const pokemon =["Bulbasaur", "Charmander" , "Squirtle"]
// const pokemonIDs =["001", "004", "007"]
const containerDiv = document.querySelector('#container')
const header = document.querySelector('h1.header')
const pokemon = [
    {name: 'Bulbasaur', id: '001'},
    {name: 'Charmander', id: '004'},
    {name: 'Squirtle', id: '007'}
]

// DOM = Document Object Model
// loop over every ID 
// create HTML element
// set the HTML element values
// append HTML element to the DOM

pokemon.map((element, index) =>{
    console.log(element)
    let imgUrl =`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${element.id}.png`
    let div = document.createElement('div')
    let pokeName = document.createElement('h1')

    pokeName.innerText = element.name;
    div.setAttribute('class', 'pokemon-card')
    let img = document.createElement('img')
    img.src = imgUrl
    
    div.append(img, pokeName)
    containerDiv.append(div)
})