
import React, { useEffect, useState } from 'react'
import style from './Rayon.module.css'
import { getQuantityC } from '../../../Actions/getQuantity';
import { Link } from 'react-router-dom';

export default function RayonCapteur() {


    const [quantiteGlobale, setQuantiteGlobale] = useState([]);

        useEffect(() => {
            getQuantityC().then(data => setQuantiteGlobale(data));
            let IntervalQuantity = setInterval(() => { getQuantityC().then(data => setQuantiteGlobale(data)) }, 3000);
          return () => {
            clearInterval(IntervalQuantity);
          }
        }, [])
        

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
    <div className={style.case} key={key.idCapteur}>
        <Link to={"Details/" + key.nom}>
        <p>id : {key.idCapteur}</p>
        <span>{key.nom}</span>
        <div style={{color:getColor(parseInt(key.quantite))}}>{key.quantite}</div>
        </Link>
    </div>
  )

  return (
    <div className={style.grille}>
    {listItems}
  </div>
  )
}
