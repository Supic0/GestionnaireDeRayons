import React, {useState, useEffect} from 'react'
import graphic from '../../../Assets/graphic.png'
import { getQuantityP } from '../../../Actions/getQuantity'
import Capteurs from './Capteurs'
import { Link, useParams } from 'react-router-dom'
import { getIdProduct } from '../../../Actions/getListOfProducts'
export default function Details() {

  const [total, setTotal] = useState("");
  const {produit} = useParams();
  const [reference, setReference] = useState();
  
  useEffect(() => {
    getQuantityP(produit).then(data => setTotal(data));
    let interval1 = setInterval(() => getQuantityP(produit).then(data => setTotal(data)),2000);
    getIdProduct(produit).then(data => setReference(data));
    return () => {
      clearInterval(interval1);
    }
  }, [produit])



  return (
    <div id="details">
      <Link to="/"><button>Retour</button></Link>
      <div className="total">{total}</div>
      <div id="infos">
        <h2>{produit}</h2>
        <p>Référence = {reference}</p>
        <p>Etat = indisponible</p>
      </div>
      <Capteurs produit={produit}/>
      <img src={graphic} alt="will arrive soon" />
    </div>
  )
}
