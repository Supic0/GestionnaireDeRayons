import React, {useState, useEffect} from 'react'
import {getQuantityC} from '../../../Actions/getQuantity'

export default function Capteurs(produit) {
    //states
    const [capteurs, setcapteurs] = useState();

    //effects
    useEffect(() => {
      let interval = setInterval(setcapteurs(getQuantityC(produit)),1000);
      return () => {
        clearInterval(interval);
      }
    }, [produit])
     //function

     const color = (c) => {
         let couleur;
        if (c>3) {
            couleur = "vert";
        } else if (c<=3) {
            couleur = "orange";
        } else if (c<=0) {
            couleur = "rouge";
        }
        return "gt "+couleur;
     }
  
    return (
    <div className='flex'>
        {
            capteurs.map(capteur => {
                return(
                <div className={color(capteur.quantite)}>
                    <p>{capteur.id}</p>
                    <div className='value'>{capteur.quantite}</div>
                </div>)
            })
        }
    </div>
  )
}
