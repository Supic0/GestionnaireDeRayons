import React from 'react'
import notif from '../../Assets/notifs.png'
import { useLocation } from 'react-router-dom'
import style from './Entete.module.css'

export default function Entete() {

  const location = useLocation();
  const nom = location.pathname.replaceAll("/", " > ").replaceAll("%20", " ").replace(" > ", " ");
  
  return (
    <header className={style.header}>
      <h2 className="breadCrum">{nom === " " ? " Rayons" : nom}</h2>
      <img className={style.icons} src={notif} alt="fake-icons" />
    </header>
  )
}
