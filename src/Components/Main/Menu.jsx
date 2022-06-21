import React, { useState }  from 'react'
import icon1 from '../../Assets/icon1.svg'
import icon2 from '../../Assets/icon2.svg'
import {ReactComponent as Icon3} from '../../Assets/icon3.svg'
import icon4 from '../../Assets/icon4.svg'
import icon5 from '../../Assets/icon5.svg'
import {ReactComponent as Icon6} from '../../Assets/icon6.svg'
import icon7 from '../../Assets/icon7.svg'
import dashboardLogo from '../../Assets/dashboardLogo.png'
import { Link } from 'react-router-dom'
import style from './Menu.module.css'

export default function Menu() {

  const [page, setPage] = useState("Rayon A")
  
  return (
    <div className={style.Menu}>
      <img className={style.logo} alt="icon" src={dashboardLogo} />
      <nav>
        <ul className={style.ul}>
          <li>
            <img src={icon1} alt="icon" />
            <p>Overview</p>
          </li>
          <li>
            <img src={icon2} alt="icon" />
            <p>Rayons</p>
          </li>
          <ul className={style.ul2}>
            <li className={page==="RayonA"?style.pop:""}>

              <Icon3/>
              <Link to="/" onClick={()=> setPage("RayonA")}>
                <p>Rayon A</p>
              </Link>
            </li>
            <li>
              <img src={icon4} alt="icon" />
              <p>Rayon B</p>
            </li>
            <li>
              <img src={icon5} alt="icon" />
              <p>Rayon C</p>
            </li>
          </ul>
          <li className={page==="Produits"?style.pop:""}>

            <Icon6/>
            <Link to="/Produits" onClick={()=> setPage("Produits")}>
              <p>Produits</p>
            </Link>
          </li>
          <li>
            <img src={icon7} alt="icon" />
            <p>Settings</p>
          </li>
        </ul>
      </nav>
    </div>
  )
}
