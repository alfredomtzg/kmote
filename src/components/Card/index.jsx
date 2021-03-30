import React from 'react'
// Style
import './index.css'
import he from '../../assets/he.png'
import she from '../../assets/she.png'


export default function Card({nombre, puesto, edad}) {
  return (
    <div className="cardItem">
      <img src={he} alt="candidato"/>
      <div className="detailContainer">
      <h2>{nombre}</h2>
      <h3>{puesto}</h3>
      <h4>{edad} años</h4>
      </div>
    </div>
  )
}
