import React, { useEffect, useState } from 'react'
import style from './Rayon.module.css'
import { Link } from 'react-router-dom'
import { getQuantityProducts } from '../../../Actions/getQuantity';

export default function RayonProduit() {

    const [quantiteGlobale, setQuantiteGlobale] = useState([]);

        useEffect(() => {
            getQuantityProducts().then(data => setQuantiteGlobale(data));
            let IntervalQuantity = setInterval(() => { getQuantityProducts().then(data => setQuantiteGlobale(data)) }, 3000);
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
    <div className={style.case} key={key.nom}>
      <Link to={"Details/" + key.nom}>
        <p>{key.nom}</p>
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
