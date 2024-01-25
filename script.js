/**Encontrar a seção com a classe '.card-pokemon' */

const secaoPokemon = document.querySelector('.secao-pokemon')
console.log(secaoPokemon) 

function criarCard(){

/** // Criar a div pai 'card-info' */


	let cardPokemon = document.createElement('div') 
	cardPokemon.classList.add('grass-card')
	cardPokemon.classList.add('pokecard') 


/** // Criar a div pai 'card-info' */
   
	let cardInfo = document.createElement('div') 
	cardInfo.classList.add('card-info')
    
/** Criar a div 'pokename'**/
	
	let nomePokemon = document.createElement('div')
	nomePokemon.classList.add('pokename')
    
/** Criar o span 'id' para o código do Pokemon **/

	let codigoId = document.createElement('span')
	codigoId.classList.add('id')
	codigoId.textContent = '#001'

/** Criar o h1 para o nome do Pokemon */

	let textName = document.createElement('h1')
	textName.textContent = 'Bulbasaur'

/** Adicionar o span 'id' e o h1 ao div 'pokename' */

	nomePokemon.appendChild(codigoId)
	nomePokemon.appendChild(textName)
    

/** Adicionar a div 'pokename' ao div pai 'card-info' */
  
	cardInfo.appendChild(nomePokemon)

/** Adicionar a div 'cardInfo' ao div pai 'cardPokemon' */

	cardPokemon.appendChild(cardInfo)

/** Adicionar a div pai 'card-info' à seção '.secao-pokemon' */
    
	secaoPokemon.appendChild(cardPokemon);



					/* Adicionar imagem:
					 
					 let imagem = document.createElement('img')
					    imagem.setAttribute('src','./img/Pokeball.png')
					    console.log(imagem) */ 



/** Criar a div 'poketype' 
    
	let poketype = document.createElement('div')
	poketype.classList.add('poketype')

/** Criar a div do tipo 'grass' 

	let grassType = criarTipo('grass', './img/foia.png', 'Grass')

/** Criar a div do tipo 'poison'

	let poisonType = criarTipo('poison', './img/Poison.png', 'Poison')

/** Adicionar os tipos à div 'poketype' 
 
	poketype.appendChild(grassType)
	poketype.appendChild(poisonType)
*/


/** Criar a div 'poketype' */
    
	let poketype = document.createElement('div')
	poketype.classList.add('poketype')




/** Criar a div do tipo 'grass' */

	grassType = document.createElement('div')
	grassType.id = 'grass'
	grassType.classList.add('type')

/** Adicionar a imagem do tipo 'grass' */

	let leafImage = document.createElement('img')
	leafImage.setAttribute('src', './img/foia.png')
	console.log(leafImage)

/** Criar o p 'Grass' para o nome do tipo do pokemon */

	let typeName = document.createElement('p')
	typeName.textContent = 'Grass'


	grassType.appendChild(leafImage)
	grassType.appendChild(typeName)


/** Criar a div do tipo 'poison' */

	poisonType = document.createElement('div')
	poisonType.id = 'poison'
	poisonType.classList.add('type')

/** Adicionar a imagem do tipo 'poison' */

	let poisonImage = document.createElement('img')
	poisonImage.setAttribute('src', './img/Poison.png')
	console.log(poisonImage)

/** Criar o p 'Poison' para o nome do tipo do pokemon */

	typeName = document.createElement('p')
	typeName.textContent = 'Poison'


/** Adicionar os tipos à div 'poketype' */
	poisonType.appendChild(poisonImage)
	poisonType.appendChild(typeName)
	poketype.appendChild(grassType)
	poketype.appendChild(poisonType)

	cardInfo.appendChild(poketype)

/** Criar a div 'pokeball-img' */

	let pokeballImage = document.createElement('div')
	pokeballImage.classList.add('pokeball-img')

/** Adicionar a imagem de pokebola ao card pokemon */

	let pokeballImg = document.createElement('img')
	pokeballImg.setAttribute('src', './img/Pokeball.png')
	console.log(pokeballImg) 


/** Adicionar a div da imagem do pokemon Bulbasaur ao card */

	let pokemonImage = document.createElement('div')
	pokemonImage.classList.add('poke-img')

/** Adicionar a imagem do pokemon Bulbasaur ao card */

	let bulbaImage = document.createElement('img')
	bulbaImage.setAttribute('src', './img/01.png')
	console.log(bulbaImage)

	pokeballImage.appendChild(pokeballImg)
	cardPokemon.appendChild(pokeballImage)

	pokemonImage.appendChild(bulbaImage)
	cardPokemon.appendChild(pokemonImage)


}



/** Chamar a função para criar o card */
    
criarCard()
















































