import dex from './dex.js'
import Card from './Card.jsx'

var current_id = [...dex].length

//FUNÇÃO Formatar os IDs
export function idPad(id, size) {
    var out = '' + id;
    while (out.length < size) {
      out = '0' + out;
    }
  
    return out;
}

export function pkSearch() {
    //Seleção inicial
    const input = document.getElementById("searchbox").value.toLowerCase()
    const querytargets = document.querySelectorAll('.col-pk')
  
    //Mapeie cada elemento do querytargets baseado na seguinte função...
    const srch = [...querytargets].map((pokemon) => {
      //Se o conteúdo do ID ou Nome do pokémon atual corresponder a qualquer parte da pesquisa, poupe-o de virar DANONE
      if ((pokemon.querySelectorAll("p")[0].innerText.indexOf(input) > -1) || (pokemon.querySelectorAll("p")[1].innerText.toLowerCase().indexOf(input) > -1)) {
        pokemon.style.display = ''
      } else {
        pokemon.style.display = 'none'
      }
    })
  }

//FUNÇÃO Escuta por pesquisas na searchbox
export function searchBoxListener() {
    const searchbox = document.getElementById("searchbox")
    searchbox.addEventListener('keyup', function(event) {
      if (event.key == 'Enter') {
        pkSearch()
      }
    })
}
  
export function mostrarModal() {
    const element = document.getElementById("modal");
    element.classList.add("mostrar-modal");
}

export function esconderModal() {
    const element = document.getElementById("modal");
    element.classList.remove("mostrar-modal");
}

//FUNÇÃO Escuta por cliques no botão adicionar
export function addBtnListener() {
    const button = document.getElementById("btn-pk")
    button.addEventListener('click', function(event) {
        mostrarModal()
    })
    }

export function removerBtnListener() {
    const button = document.getElementById("esconderModal")
    button.addEventListener('click', function(event) {
        esconderModal()
    })
}

export function confirmBtnListener() {
    const button = document.getElementById("confirm-pk")
    button.addEventListener('click', function(event) {
        current_id += 1
        const form = document.getElementById('adicionarPKMN');
        const formData = new FormData(form);

        let newPk = {}
        let newTypes = []
        
        const newNome = formData.get('nome')
        const pattern = /^(\p{L}\s*)+(\p{L}|\.|\?|!)$/iu
        
        if (pattern.test(newNome)) {
          if (formData.get('tipo2') == '') {
          newTypes = [formData.get('tipo1')]
      } else {
          newTypes = [formData.get('tipo1'), formData.get('tipo2')]
      }

        newPk.type = newTypes
        newPk.id = current_id
        newPk.name = newNome
        
        const target = document.querySelector('.container-pk')
        /*target.insertAdjacentHTML('beforeend', <Card key={current_id} pokemon={newPk}/>)*/
        esconderModal()
        document.getElementById(`n${idPad(current_id, 3)}`).scrollIntoView()
        } else {
        form.reset()
        alert('Nome inválido, somente letras')
        }
    })
}

export function buildPkmn() {
      current_id = 265
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
        newPk.id = current_id
        newPk.name = newNome
      
      const target = document.querySelector('.container-pk')
      esconderModal()
      return newPk
      document.getElementById(`n${idPad(current_id, 3)}`).scrollIntoView()
      } else {
      form.reset()
      alert('Nome inválido, somente letras')
      }
}


/*export function confirmBtnListener() {
  const button = document.getElementById("confirm-pk")
  button.addEventListener('click', function(event) {
  }
}*/