import React from 'react'
import notFound from '../../Assets/404.png'
import {Link} from 'react-router-dom'
export default function NotFound() {
  return (
    <Link to="/">
    <img src={notFound} alt="error 404 get back" style={{height:"90%"}} />
    </Link>
  )
}
