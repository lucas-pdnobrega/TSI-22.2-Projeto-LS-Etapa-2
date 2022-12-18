import { useEffect } from 'react'
import { searchBoxListener } from './utils'
import Dex from './Dex.jsx'
import './App.css'

function App() {

  useEffect(() => {
    searchBoxListener()
  }, [])

  return (
    <div className="App">

      <div className="container">

        <header id="head-pkdex">

          <div className="navbar-pkdex">
            <i className="gg-pokemon"></i>
            <a>Pokédex</a>
          </div>

        </header>

        <main id="body-pkdex">

          <div className="search">
            <input type="text" id="searchbox" placeholder="pesquisa aqui!" />
          </div>
          <Dex />
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
