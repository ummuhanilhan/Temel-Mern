import React from 'react'
import {Link} from 'react-router-dom'
export default function Navbar() {
  return (
    <header>
        <div className='container'>
        <Link to="/">
            <h1>Bilinova Not Defteri</h1>
        </Link>
        <nav>
          <div>
            <Link to="/signup">Üye ol</Link>
            <Link to="/login">Giriş yap</Link>
          </div>
          </nav>
        </div>
    </header>
  )
}
