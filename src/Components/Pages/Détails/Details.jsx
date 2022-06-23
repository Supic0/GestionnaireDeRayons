import React, { useState, useEffect } from 'react'
import graphic from '../../../Assets/graphic.png'
import { getQuantityP } from '../../../Actions/getQuantity'
import Capteurs from './Capteurs'
import { Link, useParams } from 'react-router-dom'
import { getIdProduct } from '../../../Actions/getListOfProducts'
import style from './Details.module.css'
import { getQuantitySensorProduct } from '../../../Actions/getQuantity'
import { useNavigate } from "react-router-dom";

export default function Details() {

  const navigate = useNavigate();
  const [total, setTotal] = useState("");
  const { produit } = useParams();
  const [reference, setReference] = useState();
  const [capteurs, setCapteurs] = useState([{ idCapteur: 0, quantite: 0 }]);

  useEffect(() => {
    getQuantityP(produit).then(data => setTotal(data));
    let interval1 = setInterval(() => getQuantityP(produit).then(data => setTotal(data)), 2000);
    getIdProduct(produit).then(data => {
      setReference(data);
      if (data === undefined) {
        navigate("/");
      }
    })
    getQuantitySensorProduct(produit).then(data =>setCapteurs(data));

    let interval2 = setInterval(() => getQuantitySensorProduct(produit).then(data => setCapteurs(data)), 2000);
    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
    }
  }, [produit, navigate])

  //function

  const calcColor = (c) => {
    let couleur;
    if (c <= 0) {
      couleur = "#9FA2B4";
    } else if (c <= 3) {
      couleur = "#FEC400";
    } else if (c > 3) {
      couleur = "#29CC97";
    }
    return couleur;
  }

  return (
    <div className={style.details}>
      <div className={style.back}><Link to="/">Retour</Link></div>
      <div className={style.infos}>
        <div className={style.total} style={{ backgroundColor: calcColor(total) }}>{total}</div>
        <div className={style.description}>
          <h1>{produit}</h1>
          <p>Référence : #{reference}</p>
          <p>Etat : indisponible</p>
          <p>{capteurs.length} poussoirs actif{capteurs.length > 1 ? "s" : ""}</p>
        </div>
        <Capteurs capteurs={capteurs} calcColor={calcColor} />
      </div>
      <img src={graphic} alt="will arrive soon" />
    </div >
  )
}
