import React, { useState, useEffect } from 'react'
import { getQuantitySensorProduct } from '../../../Actions/getQuantity'

export default function Capteurs({ produit }) {
    //states
    const [capteurs, setCapteurs] = useState([{idCapteur:0,quantite:0}]);

    //effects
    useEffect(() => {
        getQuantitySensorProduct(produit).then(data => setCapteurs(data));
        let interval = setInterval(() => getQuantitySensorProduct(produit).then(data => setCapteurs(data)), 2000);
        return () => {
            clearInterval(interval);
        }
    }, [produit])
    //function

    const calcColor = (c) => {
        let couleur;
        if (c > 3) {
            couleur = "vert";
        } else if (c <= 3) {
            couleur = "orange";
        } else if (c <= 0) {
            couleur = "rouge";
        }
        return "gt " + couleur;
    }

    return (
        <div className='flex'>
            {
                capteurs.map((capteur,i) => {
                    return (
                        <div className={calcColor(capteur.quantite)} key={i}>
                            <p>{capteur.idCapteur}</p>
                            <div className='value'>{capteur.quantite}</div>
                        </div>)
                })
            }
        </div>
    )
}
