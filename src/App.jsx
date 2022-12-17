import { useState, useEffect } from 'react'
import { searchBoxListener, addBtnListener, removerBtnListener, esconderModal } from './utils'
import Card from './Card.jsx'
import './index.css'

function App() {
  const [dexes, setDexes] = useState([]);
   
  useEffect(() => {
    
    const getPokemonUrl = id => `https://pokeapi.co/api/v2/pokemon-form/${id}/`
    
    async function loadPokemons() {
      for (let i = 0; i < 150; i++) {
        let res = await (await fetch(getPokemonUrl(i+1))).json()
        dexes.push(res)
      } 
    }

    function confirmBtnListener() {
      const button = document.getElementById("confirm-pk")
      button.addEventListener('click', function(event) {
        const form = document.getElementById('adicionarPKMN');
        const formData = new FormData(form);

        let newPk = {}
        
        const newNome = formData.get('nome')
        const pattern = /^(\p{L}\s*)+(\p{L}|\.|\?|!)$/iu
        
        if (pattern.test(newNome)) {
          if (formData.get('tipo2') == '') {
            newPk.types = [
              {
                  "slot": 1,
                  "type": {
                      "name": `${formData.get('tipo1')}`,
                  }
              }
          ]
          } else {
              newPk.types = [
                {
                    "slot": 1,
                    "type": {
                        "name": `${formData.get('tipo1')}`,
                    }
                },
                {
                    "slot": 2,
                    "type": {
                        "name": `${formData.get('tipo2')}`,
                    }
                }
            ]
          }
          newPk.id = 265
          newPk.name = newNome
          esconderModal()  
          dexes.push(newPk)
        } else {
          form.reset()
          alert('Nome inválido, somente letras')
        }
        })
      }


     
    loadPokemons()
    searchBoxListener()
    addBtnListener()
    removerBtnListener()
    confirmBtnListener()

  }, [])

  return (
    <div className="App">
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
          dexes
        </div>
        
        <div className="container-pk">
        {[...dexes].map((pokemon, i) => <Card key={i+1} pokemon={pokemon}/>)}
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
