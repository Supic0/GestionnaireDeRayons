import React from 'react'
import Entete from '../Entete'
import graphic from '../../../Assets/graphic.png'

export default function Details({produit}) {

  const [total, setTotal] = useState()

  useEffect(() => {
    let interval1 = setInterval(setcapteur(getQuantityP(produit)),1000);
    return () => {
      clearInterval(interval1);
    }
  }, [])

  //fonctions
  calcEtat = () => {

  }

  return (
    <div id="details">
      <Entete/>
      <button> {total} </button> //link
      <div className="total"></div>
      <div id="infos">
        <h2>{produit}</h2>
        <p>Référence = {idProduit}</p>
        <p>Etat = {calcEtat}</p>
        <p>Présent sur {nombreCapteur} capteurs</p>
      </div>
      <Capteurs produit={produit}/>
      <img src={graphic} alt="will arrive soon" />
    </div>
  )
}
