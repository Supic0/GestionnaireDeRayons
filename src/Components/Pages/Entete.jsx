import React from 'react'
import notif from '../../Assets/notif.png'
import search from '../../Assets/search.png'

export default function Entete({pageName}) {
  return (
    <header>
      <h2 className="breadCrum">{pageName}</h2>
      <img src={notif} alt="fake-icons" />
      <img src={search} alt="fake-icons" />
      <img src={connexion} alt="fake-connexion" />
    </header>
  )
}
