import React, {useState,useEffect} from 'react'
import Case from './Case'
import {  getQuantityProducts } from '../../../Actions/getQuantity';


export default function Rayon() {

  const [quantiteGlobale,setQuantiteGlobale] = useState([])

  useEffect(() =>{
    getQuantityProducts().then(data => setQuantiteGlobale(data));
    let IntervalQuantity = setInterval(() => {getQuantityProducts().then(data => setQuantiteGlobale(data))},5000);
    return () => {
      clearInterval(IntervalQuantity);
    }
  }, []);
  
   // some variables
  const event = new Date(Date.now());
  const time = event.toLocaleDateString('fr-FR') + " à " + event.getHours() + "h" + event.getMinutes();

  const listItems = quantiteGlobale.map((key) =>
    <Case title={key.nom} key={key.nom} value={key.quantite}/>
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
      <p>&lt; 1 &gt;</p>
    </div>
  )
}
