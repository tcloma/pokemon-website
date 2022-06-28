// const pokemon =["Bulbasaur", "Charmander" , "Squirtle"]
// const pokemonIDs =["001", "004", "007"]
const containerDiv = document.querySelector('#container')
const newBtn = document.querySelector('#new-pokemon-btn')
const rosterDiv = document.querySelector("#roster")

const header = document.querySelector('h1.header')
const pokemon = [
    {name: 'Bulbasaur', id: '001'},
    {name: 'Charmander', id: '004'},
    {name: 'Squirtle', id: '007'}
]
const userRoster = []

// DOM = Document Object Model
// loop over every ID 
// create HTML element
// set the HTML element values
// append HTML element to the DOM

newBtn.addEventListener('click', async () => {
    let num = prompt('ENTER POKEMON NUMBER')
    console.log(num);
    let imgUrl =`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${num}.png`
    let dataUrl=`https://pokeapi.co/api/v2/${num}`
    let req = await fetch(dataUrl)
    let res = await req.json()
    let name = res.forms[0].name

    let audioUrl =`https://play.pokemonshowdown.com/audio/cries/${name.toLowerCase()}.mp3`
    let audio = document.createElement('audio')
    let source = document.createElement('source')
    source.setAttribute('src', audioUrl)
    source.setAttribute('type', 'audio/mpeg')

    let h3 = document.createElement('h3')
    h3.innerText=name
    let img = document.createElement('img')
    img.setAttribute('src', imgUrl)
    img.setAttribute('class', 'roster-img')
    let position = document.querySelector(`#pokemon-${userRoster.length+1}`)
    position.addEventListener('click', () =>{
        audio.play()
    })
    position.append(img, h3, audio)
    userRoster.push(num)

})

pokemon.map((element, index) =>{
    console.log(element)
    let imgUrl =`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${element.id}.png`
    let div = document.createElement('div')
    let pokeName = document.createElement('h1')

    pokeName.innerText = element.name;
    div.setAttribute('class', 'pokemon-card')
    let img = document.createElement('img')
    img.src = imgUrl
    
    let audioUrl =`https://play.pokemonshowdown.com/audio/cries/${element.name.toLowerCase()}.mp3`
    let audio = document.createElement('audio')
    let source = document.createElement('source')
    source.setAttribute('src', audioUrl)
    source.setAttribute('type', 'audio/mpeg')
    audio.append(source)

    div.addEventListener('click', () => {
        audio.play();
        console.log('audio', audioUrl)
    })
   
    div.append(img, pokeName, audio)
    containerDiv.append(div)
})