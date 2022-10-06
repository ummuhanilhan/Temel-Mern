import {useState} from 'react'

export default function Sigmup() {

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const handleSubmit=async (e)=>{
        e.preventDefault();
           console.log(email,password);
    }

  return (
    <form className='signup' onSubmit={handleSubmit}>
        <h3>Üye ol</h3>
        <label>Email:</label>
        <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <label>Şifre:</label>
        <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <button type='submit'>Üye ol</button>
    </form>
  )
}
