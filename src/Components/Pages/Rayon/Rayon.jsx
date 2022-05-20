import React from 'react'

export default function Rayon() {

    const event = new Date(Date.now());
    const time = event.toLocaleDateString('fr-FR') + " à "+event.getHours() +"h"+ event.getMinutes();

  return (
    <div>
        <h1>Rayon A</h1>
        <p>Vue par produits &#9660;</p>
        <i>Actualisation {time}</i>

        <div className="grilleProduit">
            {

            }
        </div>
    </div>
  )
}
