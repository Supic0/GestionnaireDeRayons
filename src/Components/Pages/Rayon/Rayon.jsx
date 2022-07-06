import React, { useState, useEffect } from 'react'
import style from './Rayon.module.css'
import RayonProduit from './RayonProduit';
import RayonCapteur from './RayonCapteur';
export default function Rayon() {

  const [time, setTime] = useState("")
  const [vue, setVue] = useState(true)

  useEffect(() => {
    getTime();
    let intervalTime = setInterval(() => getTime(), 60000);
    return () => {
      clearInterval(intervalTime);
    }
  }, []);

  // some variables
  const getTime = () => {
    let event = new Date(Date.now());
    let time = event.toLocaleDateString('fr-FR') + " à " + event.getHours() + "h" + (event.getMinutes() < 10 ? '0' : '') + event.getMinutes();
    setTime(time);
  }



  //the returning component
  return (
    <div className={style.Rayon}>
      <h1>Rayon A</h1>
      <div className={style.Fake}>
        <p style={{cursor:"pointer"}} onClick={() => {setVue(!vue)}}>
        {!vue?"Vue par Produits":"Vue par Capteurs"} &#9660;
        </p>
        <i>Actualisation {time}</i>
        
      </div>
      {
          vue?<RayonCapteur/>:<RayonProduit/>
        }
    </div>
  )
}
