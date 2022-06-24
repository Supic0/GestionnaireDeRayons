import React, { useState, useEffect } from 'react'
import { getQuantityProducts } from '../../../Actions/getQuantity';
import style from './Rayon.module.css'
import { Link } from 'react-router-dom'

export default function Rayon() {

  const [quantiteGlobale, setQuantiteGlobale] = useState([])
  const [time, setTime] = useState("")

  useEffect(() => {
    getQuantityProducts().then(data => setQuantiteGlobale(data));
    let IntervalQuantity = setInterval(() => { getQuantityProducts().then(data => setQuantiteGlobale(data)) }, 3000);
    getTime();
    let intervalTime = setInterval(() => getTime(), 60000);
    return () => {
      clearInterval(IntervalQuantity);
      clearInterval(intervalTime);
    }
  }, []);

  // some variables
  const getTime = () => {
    let event = new Date(Date.now());
    let time = event.toLocaleDateString('fr-FR') + " à " + event.getHours() + "h" + (event.getMinutes() < 10 ? '0' : '') + event.getMinutes();
    setTime(time);
  }

  const getColor = quantite => {
    if (quantite <=0) {
      return "red";
    } else if (quantite <=3){
      return "orange";
    } else {
      return "black";
    }
  }

  const listItems = quantiteGlobale.map((key) =>
    <div className={style.case} key={key.nom}>
      <Link to={"Details/" + key.nom}>
        <p>{key.nom}</p>
        <div style={{color:getColor(parseInt(key.quantite))}}>{key.quantite}</div>
      </Link>
    </div>
  )



  //the returning component
  return (
    <div className={style.Rayon}>
      <h1>Rayon A</h1>
      <div className={style.Fake}>
        <p>Vue par produits &#9660;</p>
        <i>Actualisation {time}</i>
      </div>
      <div className={style.grille}>
        {listItems}
      </div>
    </div>
  )
}
