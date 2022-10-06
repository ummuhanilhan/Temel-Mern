import {useState} from 'react'
import {useSignup} from '../hooks/useSignup'
export default function Signup() {

    const [email,setEmail]=useState('')
    const [parola,setParola]=useState('')
    const {signup,hata,yukleniyor}=useSignup()

    const handleSubmit=async (e)=>{
        e.preventDefault();
         //  console.log(email,password);
    
         await signup(email,parola)
    }

  return (
    <form className='signup' onSubmit={handleSubmit}>
        <h3>Üye ol</h3>
        <label>Email:</label>
        <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <label>Şifre:</label>
        <input type='password' value={parola} onChange={(e)=>setParola(e.target.value)}/>
        <button disabled={yukleniyor} type='submit'>Üye ol</button>
        {hata && <div className='error'>{hata}</div>}
    </form>
  )
}
