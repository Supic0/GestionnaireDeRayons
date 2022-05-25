import React from 'react'
import { useState } from 'react'
import Entete from '../Entete'
import { getListOfProducts, newProduct } from '../../../Actions/getListOfProducts'
import modify from '../../../Assets/modificon.png'
import cross from '../../../Assets/crossicon.png'
export default function ListeProduits() {
  // hooks

  const [list, setList] = useState(getListOfProducts());
  const [nom, setNom] = useState("");
  const [epaisseur, setEpaisseur] = useState();

  // variables

  // fonctions
  const tableau = () => {
    return (
      list.map(itemList => {
      <tr>
        <th>{itemList.nom}</th>
        <th>{itemList.id}</th>
        <th>{itemList.epaisseur}</th>
        <th><img src={modify} alt="" /><img src={cross} alt="" /></th>
      </tr>
      })
    )
  }

  const handleSumit = () => {
    newProduct(nom, epaisseur);
    setTimeout(setList(getListOfProducts()), 1000);
    setNom("");
    setEpaisseur(null);
  }

  return (
    <div>
      <Entete />
      <h1>Liste de tout les Produits</h1>
      <p>Par ordre alphabétique &#9660;</p>
      <table>
        <tr>
          <th>Nom</th>
          <th>Code produit</th>
          <th>Epaisseur</th>
          <th>Options</th>
        </tr>
        {tableau}
        <tr>
          <th>
            <input type="text" placeholder='Nom' onChange={(e) => setNom(e.target.value)} value={nom} />
          </th>

          <th>
          </th>

          <th>
            <input type="number" placeholder='epaisseur' onChange={(e) => setEpaisseur(e.target.value)} value={epaisseur} />
          </th>

          <th>
            <button onClick={handleSumit}>Ajouer</button>
          </th>
        </tr>
      </table>
    </div>
  )
}
