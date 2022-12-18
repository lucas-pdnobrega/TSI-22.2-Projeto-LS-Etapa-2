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
  const pattern = /[^A-Za-z0-9]+/g

  if (!pattern.test(input)) {
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
  } else {
    alert('Pesquisa inválida, somente IDs ou Nomes!')
  }
}

//FUNÇÃO Escuta por pesquisas na searchbox
export function searchBoxListener() {
  const searchbox = document.getElementById("searchbox")
  searchbox.addEventListener('keyup', function (event) {
    if (event.key == 'Enter') {
      pkSearch()
    }
  })
}