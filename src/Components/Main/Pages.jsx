import React from 'react'

import Entete from '../Pages/Entete'
import Rayon from '../Pages/Rayon/Rayon'
import Details from '../Pages/Détails/Details'
import ListeProduits from '../Pages/ListeProduits/ListeProduits'
import {Routes, Route } from 'react-router-dom';
import style from './Pages.module.css'

export default function Pages() { // composant Pages sans props

    return (
        <div className={style.page}>
            <Entete /> 

            <Routes>
                <Route path="/" element={<Rayon />} /> 
                <Route path="/Details/:produit" element={<Details />} />
                <Route path="/Produits" element={<ListeProduits />} />
            </Routes>
        </div>
    )
}
