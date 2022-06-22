import React from 'react'

import style from './Details.module.css'

export default function Capteurs({ calcColor, capteurs }) {
    //states
    
    return (
        <div className={style.capteursZone}>
            {
                capteurs.map((capteur,i) => {
                    return (
                        <div style={{backgroundColor: calcColor(capteur.quantite)}} className={style.capteur} key={i}>
                            <p>id: {capteur.idCapteur}</p>
                            <div className='value'>{capteur.quantite}</div>
                        </div>)
                })
            }
        </div>
    )
}
