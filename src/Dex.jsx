import { useState, useEffect } from 'react'
import Card from './Card.jsx'
import './Dex.css'


function Dex() {

    const [dexes, setDexes] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5897/dexes')
            .then((res) => res.json())
            .then((pokemons) => setDexes(pokemons))
    }, [])

    return (
        <div className="container-pk">
            {dexes.map((pokemon, i) =>
                <Card key={i + 1} pokemon={pokemon} />)}
        </div>
    )
}

export default Dex