import React from 'react'
import icon1 from '../../Assets/icon1.png'
import icon2 from '../../Assets/icon2.png'
import icon3 from '../../Assets/icon3.png'
import icon4 from '../../Assets/icon4.png'
import icon5 from '../../Assets/icon5.png'
import icon6 from '../../Assets/icon6.png'
import icon7 from '../../Assets/icon7.png'
import { Link } from 'react-router-dom'

export default function Menu() {
  return (
    <div id="Menu">
      <img id="logoMenu" alt="icon"/>
      <nav>
        <ul>
          <li>
            <img src={icon1} alt="icon" />
            <p>Overview</p>
          </li>
          <li>
            <img src={icon2} alt="icon" />
            <p>Rayons</p>
            <ul>
            
              <li className="menuItem ">
              <Link to="/">
                <img src={icon3} alt="icon" />
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
          </li>
          <li>
          <Link to="/Produits">
            <img src={icon6} alt="icon" />
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
