import React from 'react'
import { Link } from 'react-router-dom'

export default function Case({title,value}) {
    return (
        <div>
            <Link to="Details" params={{ produit: title }}>
            <p>{title}</p>
            <div>{value}</div>
            </Link>
        </div>
    )
}