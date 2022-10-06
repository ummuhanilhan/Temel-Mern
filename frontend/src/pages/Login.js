import {useState} from 'react'

export default function Login() {
    const [email,setEmail]=useState('')
    const[parola,setparola]=useState('')

    const handleSubmit=async (e)=>{
    e.preventDefault();
           console.log(email,parola);
    }


  return (
    <form className='login' onsubmit={handleSubmit}>
        <h3>Giriş Yap</h3>
        <label>Email:</label>
        <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <label>Şifre:</label>
        <input type='password' value={parola} onChange={(e)=>setparola(e.target.value)}/>
        <button type='submit'>Giriş Yap</button>
    </form>
  )
}
