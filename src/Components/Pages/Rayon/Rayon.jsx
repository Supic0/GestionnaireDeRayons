import React, {useState} from 'react'
import Entete from '../Entete';
import Case from './Case'
import { getAllQuantity } from '../../../Actions/getQuantity';


export default function Rayon() {

  const quantiteGlobale = useState(getAllQuantity);
   // some variables
  const event = new Date(Date.now());
  const time = event.toLocaleDateString('fr-FR') + " à " + event.getHours() + "h" + event.getMinutes();

  const listItems = quantiteGlobale.map((key) =>
    <Case title={key.nom} value={key.quantite}/>
  )


  //the returning component
  return (
    <div>
      <Entete/>
      <h1>Rayon A</h1>
      <p>Vue par produits &#9660;</p>
      <i>Actualisation {time}</i>

      <div className="grilleProduit">
        {listItems}
      </div>
      <p>&lt; 1 &gt;</p>
    </div>
  )
}
