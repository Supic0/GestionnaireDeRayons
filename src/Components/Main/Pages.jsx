import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Entete from './Pages/entete'
import Rayon from './Pages/Rayon/Rayon'
import Details from './Pages/Details/Details'
import ListeProduits from './Pages/ListeProduits'

export default function Pages() { // composant Pages sans props
    const [quantiteGlobale, setquantiteGlobale] = useState({}); // Définition du State quantité Globlale (objet)
    return (
        <div>
            <Entete /> 
            <Routes>
                <Route path="/" element={<Rayon quantiteGlobale={quantiteGlobale}/>} /> //ici la quantité est passé via les props
                <Route path="Details" element={<Details produit="Exemple" />} /> /* ici les props sont envoyé au moment du clique et donc dans la balise link de la page Rayon*/
                <Route path="ListeProduits" element={<ListeProduits />} />
            </Routes>
        </div>
    )
}
