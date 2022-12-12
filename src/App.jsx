import { useState, useEffect } from 'react'
import { searchBoxListener, addBtnListener, removerBtnListener, confirmBtnListener } from './utils'
import dex from './dex.js'
import Card from './Card.jsx'
import './index.css'

function App() {

  const getPokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`
  const generatePokemonPromises = () => Array(151).fill().map((_, i) =>
    (fetch(getPokemonUrl(i + 1)).then(response => response.json())))
  const pokemonPromises = generatePokemonPromises()
  function reducePromises(pokemons) { 
    return pokemons.reduce((Pkmn, { id, types, species }))
  }

  useEffect(() => {
    searchBoxListener()
    addBtnListener()
    removerBtnListener()
    confirmBtnListener()
  })

  return (
    <div className="App">
       {/*<div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
  </p>*/}
  <div className="container">

      <div className="modal" id="modal">
        <div className="modal-conteudo">
          <span id="esconderModal"> &times;</span>
            <form id="adicionarPKMN">
              <label>nome</label>
              <input type="text" id="pkm-name" name="nome"/>
              <label>tipos</label>
              <div className="tipos">
                <select name="tipo1" className="tipo-adicionado">
                      <option className='fire'>fire</option>
                      <option className="water">water</option>
                      <option className ="grass">grass</option>
                      <option className="dark">dark</option>
                      <option className= "psychic">psychic</option>
                      <option className="fighting">fighting</option>
                      <option className="bug">bug</option>
                      <option className="dragon">dragon</option>
                      <option className="electric">electric</option>
                      <option className="fairy">fairy</option>
                      <option className="flying">flying</option>
                      <option className="ghost">ghost</option>
                      <option className="ground">ground</option>
                      <option className="ice">ice</option>
                      <option className="normal">normal</option>
                      <option className="poison">poison</option>
                      <option className="rock">rock</option>
                      <option className="steel">steel</option>
                    </select>
                <select name="tipo2" className="tipo-adicionado2">
                      <option></option>
                      <option className='fire'>fire</option>
                      <option className="water">water</option>
                      <option className="grass">grass</option>
                      <option className="dark">dark</option>
                      <option className="psychic">psychic</option>
                      <option className="fighting">fighting</option>
                      <option className="bug">bug</option>
                      <option className="dragon">dragon</option>
                      <option className="electric">electric</option>
                      <option className="fairy">fairy</option>
                      <option className="flying">flying</option>
                      <option className="ghost">ghost</option>
                      <option className="ground">ground</option>
                      <option className="ice">ice</option>
                      <option className="normal">normal</option>
                      <option className="poison">poison</option>
                      <option className="rock">rock</option>
                      <option className="steel">steel</option>
                    </select>
              </div>
              <button id="confirm-pk" type="button">confirmar</button>
            </form>
        </div>
      </div>

      <header id="head-pkdex">
        
        <div className="navbar-pkdex">
          <i className="gg-pokemon"></i>
          <a>Pokédex</a>
        </div>
        
      </header>

      <main id="body-pkdex">
                    
        <div className="search">
          
          <button id="btn-pk" type="button">adicionar</button>
          <input type="text" id="searchbox" placeholder="pesquisa aqui!"/>
          
        </div>
        
        <div className="container-pk">
        {[...dex].map((pokemon, i) => <Card key={i+1} pokemon={pokemon}/>)}
        </div>
        <div className="base">
        </div>       

        
      </main>

      <footer id="footer-pkdex">
        <a>R.L.S.   s2</a>
      </footer>
      </div>
    </div>
  )
}

export default App
