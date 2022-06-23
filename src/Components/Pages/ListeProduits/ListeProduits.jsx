import React from 'react'
import { useState } from 'react'
import { delProduct, getListOfProducts, newProduct } from '../../../Actions/getListOfProducts'
import modify from '../../../Assets/modificon.png'
import cross from '../../../Assets/crossicon.png'
import { useEffect } from 'react'
import style from './ListeProduits.module.css'

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
    .then(() => getListOfProducts()
    .then(data => {setList(data)}));
  }
  // variables
 let tableau = list.map(itemList => {
    return(
    <tr key={itemList.nom}>
      <td>{itemList.nom}</td>
      <td>{itemList.idProduit}</td>
      <td>{itemList.epaisseur} mm</td>
      <td className={style.options}><img src={modify} alt="" /><img src={cross} onClick={() => deleteProduct(itemList.nom)} alt="" /></td>
    </tr>);
  })
  // fonctions

  const handleSubmit = (e) => {
    e.preventDefault();
    newProduct(nom, epaisseur)
    .then(() => getListOfProducts())
    .then(data => {setList(data)});
    setNom("");
    setEpaisseur("");
  }

  return (
    <div className={style.list}>
      <h1>Liste de tout les Produits</h1>
      <p>Par ordre alphabétique &#9660;</p>
      <form onSubmit={handleSubmit}>
      <table className={style.table}>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Code produit</th>
            <th>Epaisseur</th>
            <th className={style.options}>Options</th>
          </tr>
        </thead>
        <tbody>
          {tableau}
          <tr>
            <td>
              <input type="text" maxLength="15" minLength="3"  placeholder='Nom' onChange={(e) => setNom(e.target.value)} value={nom} required />
            </td>

            <td>X
            </td>
  
            <td>
              <input type="number" placeholder='Epaisseur' min="5" max="200" onChange={(e) => setEpaisseur(e.target.value)} value={epaisseur} required />
            </td>

            <td className={style.options}>
              <input type="submit" value="Ajouter"/>
            </td>
          </tr>
        </tbody>
      </table>
      </form>
    </div>
  )
}
