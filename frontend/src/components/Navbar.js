import React from 'react'
import { useLogout } from '../hooks/useLogout'
import {Link} from 'react-router-dom'

export default function Navbar() {
  const {logout}=useLogout()

  const handleClick=()=>{
    logout()
  }

  return (
    <header>
        <div className='container'>
        <Link to="/">
            <h1>Bilinova Not Defteri</h1>
        </Link>
        <nav>
        <div>
          <button onClick={handleClick} >Çıkış</button>
        </div>
          <div>
            <Link to="/signup">Üye ol</Link>
            <Link to="/login">Giriş yap</Link>
          </div>
          </nav>
        </div>
    </header>
  )
}
