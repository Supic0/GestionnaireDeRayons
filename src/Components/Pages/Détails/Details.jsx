import React, {useState, useEffect} from 'react'
import Entete from '../Entete'
import graphic from '../../../Assets/graphic.png'
import { getQuantityP } from '../../../Actions/getQuantity'
import Capteurs from './Capteurs'
import { useParams } from 'react-router-dom'

export default function Details() {

  const [total, setTotal] = useState()
  const produit = useParams();
  
  useEffect(() => {
    let interval1 = setInterval(setTotal(getQuantityP(produit)),1000);
    return () => {
      clearInterval(interval1);
    }
  }, [produit])

  //fonctions
  const calcEtat = () => {
    return "50%"
  }


  return (
    <div id="details">
      <Entete/>
      <button> {total} </button> 
      <div className="total"></div>
      <div id="infos">
        <h2>{produit}</h2>
        <p>Référence = {produit.id}</p>
        <p>Etat = {calcEtat}</p>
      </div>
      <Capteurs produit={produit}/>
      <img src={graphic} alt="will arrive soon" />
    </div>
  )
}
