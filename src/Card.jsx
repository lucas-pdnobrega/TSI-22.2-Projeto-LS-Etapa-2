import React from 'react'
import { idPad } from './utils.js'

export default (pokemon) => {
  const atual = (pokemon.pokemon)
  return <>
  <div className="col-pk" id={`${idPad(atual.id, 3)}`}>
              
              <img className="img-pk" src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${idPad(atual.id, 3)}.png`}/>
              <p className="id-pk">N°{`${idPad(atual.id, 3)}`}</p>
              <p>{atual.name}</p>
              
              <div className="types">
              {atual.type.map((type) => <p className={`${type}`}>{type}</p>)}
              </div>
              
            </div>
  </>
}