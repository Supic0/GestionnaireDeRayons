import React from 'react'

export default function Menu() {
  return (
    <div id="Menu">
      <img id="logoMenu" />
      <nav>
        <ul>
          <li>
            <icon />
            <a href="#">Overview</a>
          </li>
          <li>
            <icon />
            <a href="#" className={"itemMenu"}>Rayons</a>
            <ul>
              <li class="menuItem ">
                <a href="#" className={"itemMenu subMenu"}>Rayon A</a>
              </li>
              <li>
                <a href="#" className={"itemMenu subMenu"}>Rayon B</a>
              </li>
              <li>
                <a href="#" className={"itemMenu subMenu"}>Rayon C</a>
              </li>
            </ul>
          </li>
          <li>
            <icon />
            <a href="#">Produits</a>
          </li>
          <li>
            <icon />
            <a href="#">Settings</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
