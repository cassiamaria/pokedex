const cardHTML = `

<div class="card" id="card-{id}">
<div class="title">
    <h2>{name}</h2>
    <small> # {id}</small>                    
</div>
<div class="img bg-{type}">
    <img src="https://pokeres.bastionbot.org/images/pokemon/{id}.png" alt="{name}" />
</div>
<div class="type {type}">
    <p>{type}</p>
</div>
<button class="favorite" data-id="{id}">
    <div class="heart"></div>
</button>
</div>

`
const cards = document.querySelector('.cards')

const replacer = (text, source, destination) => {
    const regex = new RegExp(source, 'gi')
    return text.replace(regex, destination)
}

const createPokemonCard = (pokemon) => {
    const { id, name, type } = pokemon
    let newCard = replacer(cardHTML, `\{id\}`, id)
    newCard = replacer(newCard, `\{name\}`, name)
    newCard = replacer(newCard, `\{type\}`, type)

    cards.innerHTML+= newCard
}