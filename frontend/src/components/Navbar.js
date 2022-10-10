import React from 'react'
import { useLogout } from '../hooks/useLogout'
import {Link} from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext'

export default function Navbar() {
  const {logout}=useLogout()
  const {kullanici}=useAuthContext()

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
        {kullanici && (
          <div>
          <span>{kullanici.email}</span> &nbsp;
          <button onClick={handleClick} >Çıkış</button>
        </div>

        )}
        {!kullanici && (
          <div>
            <Link to="/signup">Üye ol</Link>
            <Link to="/login">Giriş yap</Link>
          </div>
        )}
          </nav>
        </div>
    </header>
  )
}
