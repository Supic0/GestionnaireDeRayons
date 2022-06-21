import React from 'react'
import { useState } from 'react'
import { delProduct, getListOfProducts, newProduct } from '../../../Actions/getListOfProducts'
import modify from '../../../Assets/modificon.png'
import cross from '../../../Assets/crossicon.png'
import { useEffect } from 'react'
export default function ListeProduits() {
  // hooks

  const [list, setList] = useState([]);

  const [nom, setNom] = useState("");
  const [epaisseur, setEpaisseur] = useState("");

  useEffect(() => {
    getListOfProducts().then(data => {
      setList(data);
    });
  }, [])

  const deleteProduct = produit => {
    delProduct(produit)
    .then(() => getListOfProducts())
    .then(data => {setList(data)});
  }
  // variables
 let tableau = list.map(itemList => {
    return(
    <tr key={itemList.nom}>
      <th>{itemList.nom}</th>
      <th>{itemList.idProduit}</th>
      <th>{itemList.epaisseur}</th>
      <th><img src={modify} alt="" /><img src={cross} onClick={() => deleteProduct(itemList.nom)} alt="" /></th>
    </tr>);
  })
  // fonctions

  const handleSumit = () => {
    newProduct(nom, epaisseur)
    .then(() => getListOfProducts())
    .then(data => {setList(data)});
    setNom("");
    setEpaisseur("");
  }

  return (
    <div>
      <h1>Liste de tout les Produits</h1>
      <p>Par ordre alphabétique &#9660;</p>
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Code produit</th>
            <th>Epaisseur</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
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
              <button onClick={handleSumit}>Ajouter</button>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
