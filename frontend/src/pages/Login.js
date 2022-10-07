import {useState} from 'react';
import {useLogin} from '../hooks/useLogin'
export default function Login() {
    const [email,setEmail]=useState('')
    const [parola,setparola]=useState('')
  
    const {login,yukleniyor,hata}=useLogin();

    const handleSubmit=async (e)=>{
    e.preventDefault();
          await login(email,parola);
    }


  return (
    <form className='login' onSubmit={handleSubmit}>
        <h3>Giriş Yap</h3>
        <label>Email:</label>
        <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <label>Şifre:</label>
        <input type='password' value={parola} onChange={(e)=>setparola(e.target.value)}/>
        <button disabled={yukleniyor} type='submit'>Giriş Yap</button>
        {hata && <div className='error'>{hata}</div>}
    </form>
  )
}
