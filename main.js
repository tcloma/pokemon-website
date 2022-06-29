// const pokemon = [
//   {name: 'Bulbasaur', id: '001'},
//   {name: 'Charmander', id: '004'},
//   {name: 'Squirtle', id: '007'},
// ]

let teamCount = 0;
const userRoster = [];

const containerDiv = document.querySelector('#container')
const newBtn = document.querySelector('#new-pokemon-btn')
const rosterDiv = document.querySelector('#roster')
const removeBtn = document.querySelector('#remove-pokemon-btn')

// Adding Pokemon function
newBtn.addEventListener('click', async () => {
  let num = prompt('ENTER A POKEMON NUMBER')
  console.log('Number entered', num)

  // Roster limit check
  if(teamCount < 6){
    teamCount++;
    console.log('team count: ', teamCount)
    
    // Double digit check
    if (num < 100){
      // Single digit check
      if (num < 10){
        let imgUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/00${num}.png`
        let dataUrl = `https://pokeapi.co/api/v2/pokemon/${num}`
        let req = await fetch(dataUrl)
        let res = await req.json()
        let name = res.forms[0].name
        let audioUrl = `https://play.pokemonshowdown.com/audio/cries/${name.toLowerCase()}.mp3`
        let audio = document.createElement('audio')
        let source = document.createElement('source')
        source.setAttribute('src', audioUrl)
        source.setAttribute('type', 'audio/mpeg')
        audio.append(source)
        let h3 = document.createElement('h3')
        h3.innerText = name
        let img = document.createElement('img')
        img.setAttribute('src', imgUrl)
        img.setAttribute('class', 'roster-img')
        let position = document.querySelector(`#pokemon-${userRoster.length + 1}`);
        position.addEventListener('click', () => {
          audio.play()
        })
        position.append(img, h3, audio)
        userRoster.push(num)
      }
      // Not a single digit
      else{
        let imgUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/0${num}.png`
        let dataUrl = `https://pokeapi.co/api/v2/pokemon/${num}`
        let req = await fetch(dataUrl)
        let res = await req.json()
        let name = res.forms[0].name
        let audioUrl = `https://play.pokemonshowdown.com/audio/cries/${name.toLowerCase()}.mp3`
        let audio = document.createElement('audio')
        let source = document.createElement('source')
        source.setAttribute('src', audioUrl)
        source.setAttribute('type', 'audio/mpeg')
        audio.append(source)
        let h3 = document.createElement('h3')
        h3.innerText = name
        let img = document.createElement('img')
        img.setAttribute('src', imgUrl)
        img.setAttribute('class', 'roster-img')
        let position = document.querySelector(`#pokemon-${userRoster.length + 1}`);
        position.addEventListener('click', () => {
          audio.play()
        })
        position.append(img, h3, audio)
        userRoster.push(num)
      }
    }
    // Not a double digit
    else{
      let imgUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${num}.png`
      let dataUrl = `https://pokeapi.co/api/v2/pokemon/${num}`
      let req = await fetch(dataUrl)
      let res = await req.json()
      let name = res.forms[0].name
      let audioUrl = `https://play.pokemonshowdown.com/audio/cries/${name.toLowerCase()}.mp3`
      let audio = document.createElement('audio')
      let source = document.createElement('source')
      source.setAttribute('src', audioUrl)
      source.setAttribute('type', 'audio/mpeg')
      audio.append(source)
      let h3 = document.createElement('h3')
      h3.innerText = name
      let img = document.createElement('img')
      img.setAttribute('src', imgUrl)
      img.setAttribute('class', 'roster-img')
      let position = document.querySelector(`#pokemon-${userRoster.length + 1}`);
      position.addEventListener('click', () => {
        audio.play()
      })
      position.append(img, h3, audio)
      userRoster.push(num)
  }
  }
  // Roster limit reached
  else{
    alert("Your roster is full!")
  }
})

removeBtn.addEventListener('click', () => {
  let decision = prompt(`Type "Confirm" if you wish to delete the pokemon`)
  decision = decision.toLowerCase();
  console.log(decision)

  if(decision === 'confirm'){
    let position = document.querySelector(`#pokemon-${userRoster.length}`);
    position.innerHTML = "";
    userRoster.pop();
  }
  else{
    alert("Entered incorrectly, deletion cancelled")
  }
})

// DOM = Document Object Model
// loop over every ID
// create an HTML element
// set the HTML element values
// append HTML element to the DOM

// pokemon.map((element, index) => {
//   console.log(element)
//   let imgUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${element.id}.png`
//   let div = document.createElement('div') // adding a div to house the img element
//   let h3 = document.createElement('h3')
//   h3.innerText = element.name
//   div.setAttribute('class', 'pokemon-card') // setting the class of the div
//   let img = document.createElement('img') // creating the img element itself
//   let audioUrl = `https://play.pokemonshowdown.com/audio/cries/${element.name.toLowerCase()}.mp3`
// let audio = document.createElement('audio')
//   let source = document.createElement('source')
//   source.setAttribute('src', audioUrl)
//   source.setAttribute('type', 'audio/mpeg')
//   audio.append(source)
//   div.addEventListener('click', () => {
//     console.log('audio', audioUrl)
//     audio.play()
//   })
//   img.src = imgUrl
//   div.append(img, h3, audio) // append the img element to the div
//   containerDiv.append(div)
// })