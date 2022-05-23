import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lottie from 'react-lottie'
import loadAnim from '../../loadAnim.json' 
import Entete from '../Pages/Entete'
import Rayon from '../Pages/Rayon/Rayon'
import Details from '../Pages/Details/Details'
import ListeProduits from '../Pages/ListeProduits'

export default function Pages() { // composant Pages sans props
    
    const [quantiteGlobale, setquantiteGlobale] = useState({}); // Définition du State quantité Globlale (map)
    const [isLoad, setIsLoad] = useState(false);

    useEffect(() => { // when componnent is mounted hide load animation
      setIsLoad(true);
    }, [])
    
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: loadAnim,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };

    return (
        <div>
            <Entete /> 

            {isLoad?
            <Routes>
                <Route path="/" element={<Rayon quantiteGlobale={quantiteGlobale}/>} /> //ici la quantité est passé via les props
                <Route path="Details" element={<Details produit="Exemple" />} /> /* ici les props sont envoyé au moment du clique et donc dans la balise link de la page Rayon*/
                <Route path="ListeProduits" element={<ListeProduits />} />
            </Routes>
            :
            //loading page
            null
            }
            <Lottie
                options={defaultOptions} 
                height={400} 
                width={400}
            />
        </div>
    )
}
