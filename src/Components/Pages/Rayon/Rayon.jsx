import React from 'react'
import Case from './Case.jsx'

export default function Rayon(props) {

  // some variables
  const event = new Date(Date.now());
  const time = event.toLocaleDateString('fr-FR') + " à " + event.getHours() + "h" + event.getMinutes();

  const listItems = props.quantiteGlobal.keys(tifs).map((key) =>
    <Case title={key} value={tifs[key]}/>
  )


  //the returning component
  return (
    <div>
      <h1>Rayon A</h1>
      <p>Vue par produits &#9660;</p>
      <i>Actualisation {time}</i>

      <div className="grilleProduit">
        {listItems}
      </div>
      <p>< 1 ></p>
    </div>
  )
}
