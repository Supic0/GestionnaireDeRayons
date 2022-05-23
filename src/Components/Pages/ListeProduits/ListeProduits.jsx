import React from 'react'
import { useState } from 'react'
import Entete from '../Entete'


export default function ListeProduits() {
  // hooks
  const [list, setList] = useState({});
  const [nom, setNom] = useState("");
  const [id, setId] = useState(second);
  const [epaisseur, setEpaisseur] = useState(second);
  // variables
  
  useEffect(() => {
    //get list
  }, [])
  
   
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
        {Tableau}
        <tr>
          <th>
            <input type="text" placeholder='Nom' onChange={e => setNom(e.target.value)} value={nom}/>
          </th>

          <th>
            <input type="number" placeholder='id'onChange={e => setId(e.target.value)} value={id}/>
          </th>

          <th>
            <input type="number" placeholder='epaisseur' onChange={e => setEpaisseur(e.target.value)} value={epaisseur}/>
          </th>

          <th>
            <button>Ajouer</button>
          </th>
        </tr>
      </table>
    </div>
  )
}
