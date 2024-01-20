/**Encontrar a seção com a classe '.card-pokemon' */

const secaoPokemon = document.querySelector('.card-pokemon')
console.log(secaoPokemon

function criarCard(){

/** // Criar a div pai 'card-info' */
   
	let cardPokemon = document.createElement('div') 
	cardPokemon.classList.add('card-info')
    
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
  
	cardPokemon.appendChild(nomePokemon)

/** Adicionar a div pai 'card-info' à seção '.card-pokemon' */
    
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

	let grassType = document.createElement('div')
	grassType.id = 'grass'
	grassType.classList.add('type')

/** Adicionar a imagem do tipo 'grass' */

	let leafImage = document.createElement('img')
	leafImage.setAttribute('scr', './img/foia.png')
	console.log(leafImage)

/** Criar o p 'Grass' para o nome do tipo do pokemon */

	let typeName = document.createElement('p')
	typeName.textContent = 'Grass'




/** Criar a div do tipo 'poison' */

	let poisonType = document.createElement('div')
	poisonType.id = 'poison'
	poisonType.classList.add('type')

/** Adicionar a imagem do tipo 'poison' */

	let poisonImage = document.createElement('img')
	poisonImage.setAttribute('scr', './img/Poison.png')
	console.log(poisonImage)

/** Criar o p 'Poison' para o nome do tipo do pokemon */

	let typeName = document.createElement('p')
	typeName.textContent = 'Poison'


/** Adicionar os tipos à div 'poketype' */
 
	poketype.appendChild(grassType)
	poketype.appendChild(poisonType)


/** Criar a div 'pokeball-img' */

	let pokeballImage = document.createElement('div')
	pokeballImagem.classList.add('pokeball-img')

/** Adicionar a imagem de pokebola ao card pokemon */

	let pokeballImg = document.createElement('img')
	pokeballImg.setAattribute('src', './img/Pokeball.png')
	console.log(pokeballImg) 


/** Adicionar a div da imagem do pokemon Bulbasaur ao card */

	let pokemonImage = document.createElement('div')
	pokemonImage.classList.add('poke-img')

/** Adicionar a imagem do pokemon Bulbasaur ao card */

	let bulbaImage = document.createElement('img')
	bulbaImage.setAttribute('src', './img/01.png')
	console.log(bulbaImage)





/**     <!-- Ivysaur -->    */ 



/** // Criar a div pai 'card-info' */
   
	let cardPokemon = document.createElement('div') 
	cardPokemon.classList.add('card-info')
    
/** Criar a div 'pokename'**/
	
	let nomePokemon = document.createElement('div')
	nomePokemon.classList.add('pokename')
    
/** Criar o span 'id' para o código do Pokemon **/

	let codigoId = document.createElement('span')
	codigoId.classList.add('id')
	codigoId.textContent = '#002'

/** Criar o h1 para o nome do Pokemon */

	let textName = document.createElement('h1')
	textName.textContent = 'Ivysaur'

/** Adicionar o span 'id' e o h1 ao div 'pokename' */

	nomePokemon.appendChild(codigoId)
	nomePokemon.appendChild(textName)
    
/** Adicionar a div 'pokename' ao div pai 'card-info' */
  
	cardPokemon.appendChild(nomePokemon)

/** Adicionar a div pai 'card-info' à seção '.card-pokemon' */
    
	secaoPokemon.appendChild(cardPokemon);


/** Criar a div 'poketype' */
    
	let poketype = document.createElement('div')
	poketype.classList.add('poketype')


/** Criar a div do tipo 'grass' */

	let grassType = document.createElement('div')
	grassType.id = 'grass'
	grassType.classList.add('type')

/** Adicionar a imagem do tipo 'grass' */

	let leafImage = document.createElement('img')
	leafImage.setAttribute('scr', './img/foia.png')
	console.log(leafImage)

/** Criar o p 'Grass' para o nome do tipo do pokemon */

	let typeName = document.createElement('p')
	typeName.textContent = 'Grass'



/** Criar a div do tipo 'poison' */

	let poisonType = document.createElement('div')
	poisonType.id = 'poison'
	poisonType.classList.add('type')

/** Adicionar a imagem do tipo 'poison' */

	let poisonImage = document.createElement('img')
	poisonImage.setAttribute('scr', './img/Poison.png')
	console.log(poisonImage)

/** Criar o p 'Poison' para o nome do tipo do pokemon */

	let typeName = document.createElement('p')
	typeName.textContent = 'Poison'


/** Adicionar os tipos à div 'poketype' */
 
	poketype.appendChild(grassType)
	poketype.appendChild(poisonType)


/** Criar a div 'pokeball-img' */

	let pokeballImage = document.createElement('div')
	pokeballImagem.classList.add('pokeball-img')

/** Adicionar a imagem de pokebola ao card pokemon */

	let pokeballImg = document.createElement('img')
	pokeballImg.setAattribute('src', './img/Pokeball.png')
	console.log(pokeballImg) 


/** Adicionar a div da imagem do pokemon Ivysaur ao card */

	let pokemonImage = document.createElement('div')
	pokemonImage.classList.add('poke-img')

/** Adicionar a imagem do pokemon Ivysaur ao card */

	let ivysaurImage = document.createElement('img')
	ivysaurImage.setAttribute('src', './img/01.png')
	console.log(ivysaurImage)




/**     <!-- Venusaur -->    */ 



/** // Criar a div pai 'card-info' */
   
	let cardPokemon = document.createElement('div') 
	cardPokemon.classList.add('card-info')
    
/** Criar a div 'pokename'**/
	
	let nomePokemon = document.createElement('div')
	nomePokemon.classList.add('pokename')
    
/** Criar o span 'id' para o código do Pokemon **/

	let codigoId = document.createElement('span')
	codigoId.classList.add('id')
	codigoId.textContent = '#003'

/** Criar o h1 para o nome do Pokemon */

	let textName = document.createElement('h1')
	textName.textContent = 'Venusaur'

/** Adicionar o span 'id' e o h1 ao div 'pokename' */

	nomePokemon.appendChild(codigoId)
	nomePokemon.appendChild(textName)
    
/** Adicionar a div 'pokename' ao div pai 'card-info' */
  
	cardPokemon.appendChild(nomePokemon)

/** Adicionar a div pai 'card-info' à seção '.card-pokemon' */
    
	secaoPokemon.appendChild(cardPokemon);


/** Criar a div 'poketype' */
    
	let poketype = document.createElement('div')
	poketype.classList.add('poketype')


/** Criar a div do tipo 'grass' */

	let grassType = document.createElement('div')
	grassType.id = 'grass'
	grassType.classList.add('type')

/** Adicionar a imagem do tipo 'grass' */

	let leafImage = document.createElement('img')
	leafImage.setAttribute('scr', './img/foia.png')
	console.log(leafImage)

/** Criar o p 'Grass' para o nome do tipo do pokemon */

	let typeName = document.createElement('p')
	typeName.textContent = 'Grass'



/** Criar a div do tipo 'poison' */

	let poisonType = document.createElement('div')
	poisonType.id = 'poison'
	poisonType.classList.add('type')

/** Adicionar a imagem do tipo 'poison' */

	let poisonImage = document.createElement('img')
	poisonImage.setAttribute('scr', './img/Poison.png')
	console.log(poisonImage)

/** Criar o p 'Poison' para o nome do tipo do pokemon */

	let typeName = document.createElement('p')
	typeName.textContent = 'Poison'


/** Adicionar os tipos à div 'poketype' */
 
	poketype.appendChild(grassType)
	poketype.appendChild(poisonType)


/** Criar a div 'pokeball-img' */

	let pokeballImage = document.createElement('div')
	pokeballImagem.classList.add('pokeball-img')

/** Adicionar a imagem de pokebola ao card pokemon */

	let pokeballImg = document.createElement('img')
	pokeballImg.setAattribute('src', './img/Pokeball.png')
	console.log(pokeballImg) 


/** Adicionar a div da imagem do pokemon Venusaur ao card */

	let pokemonImage = document.createElement('div')
	pokemonImage.classList.add('poke-img')

/** Adicionar a imagem do pokemon Venusaur ao card */

	let venusaurImage = document.createElement('img')
	venusaurImage.setAttribute('src', './img/venusaur.png')
	console.log(venusaurImage)






/**     <!-- Charmander -->    */ 



/** // Criar a div pai 'card-info' */
   
	let cardPokemon = document.createElement('div') 
	cardPokemon.classList.add('card-info')
    
/** Criar a div 'pokename'**/
	
	let nomePokemon = document.createElement('div')
	nomePokemon.classList.add('pokename')
    
/** Criar o span 'id' para o código do Pokemon **/

	let codigoId = document.createElement('span')
	codigoId.classList.add('id')
	codigoId.textContent = '#004'

/** Criar o h1 para o nome do Pokemon */

	let textName = document.createElement('h1')
	textName.textContent = 'Charmander'

/** Adicionar o span 'id' e o h1 ao div 'pokename' */

	nomePokemon.appendChild(codigoId)
	nomePokemon.appendChild(textName)
    
/** Adicionar a div 'pokename' ao div pai 'card-info' */
  
	cardPokemon.appendChild(nomePokemon)

/** Adicionar a div pai 'card-info' à seção '.card-pokemon' */
    
	secaoPokemon.appendChild(cardPokemon);


/** Criar a div 'poketype' */
    
	let poketype = document.createElement('div')
	poketype.classList.add('poketype')


/** Criar a div do tipo 'fire' */

	let fireType = document.createElement('div')
	fireType.id = 'fire'
	fireType.classList.add('type')

/** Adicionar a imagem do tipo 'fire' */

	let fireImage = document.createElement('img')
	fireImage.setAttribute('scr', './img/Fire.png')
	console.log(firefImage)

/** Criar o p 'Fire' para o nome do tipo do pokemon */

	let typeName = document.createElement('p')
	typeName.textContent = 'Fire'



/** Adicionar os tipos à div 'poketype' */
 
	poketype.appendChild(fireType)



/** Criar a div 'pokeball-img' */

	let pokeballImage = document.createElement('div')
	pokeballImagem.classList.add('pokeball-img')

/** Adicionar a imagem de pokebola ao card pokemon */

	let pokeballImg = document.createElement('img')
	pokeballImg.setAattribute('src', './img/Pokeball.png')
	console.log(pokeballImg) 


/** Adicionar a div da imagem do pokemon Charmander ao card */

	let pokemonImage = document.createElement('div')
	pokemonImage.classList.add('poke-img')

/** Adicionar a imagem do pokemon Charmander ao card */

	let charmanderImage = document.createElement('img')
	charmanderImage.setAttribute('src', './img/charmander.png')
	console.log(charmanderImage)

}

/** Chamar a função para criar o card */
    
criarCard()
