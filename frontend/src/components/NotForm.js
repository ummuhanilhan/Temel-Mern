/* eslint-disable no-sequences */
/* eslint-disable no-undef */
import {useState} from 'react'
import {useNotContext} from '../hooks/useNotContext'

export default function NotForm() {

    const [baslik,setBaslik]=useState('')
    const [aciklama,setAciklama]=useState('')
    const [hata,setHata]=useState(null)
    const[bosAlanlar,setBosalanlar]=useState([])

    const {dispatch}=useNotContext();

    const handleSubmit=async (e)=>{
        e.preventDefault();
        const not={baslik,aciklama}
        // console.log(not);
        const response=await fetch('/api/notlar',{
            method:'POST',
            body:JSON.stringify(not),
                headers: {
                    'Content-Type' : 'application/json'
                }
        })
        const json=await response.json()
       // console.log(json);

        if(!response.ok){
            setHata(json.hata)
            setBosalanlar(json.bosAlanlar)
        }
        if(response.ok){
            setHata(null)
            setBaslik('')
            setAciklama('')
            aetBosalanlar([])
            dispatch({type:'NOT_OLUSTUR', payload:json})
           // console.log('yeni bir not eklendi', json)
        }
    } 
  return (
    <form className='create' onSubmit={handleSubmit }>
    <h3>Yeni bir not ekle</h3>
    <div className='create-group'>
    <div>
        <label>Not Başlık:</label>
        <input classNmae={bosAlanlar.includes('baslik') ? 'error' :'' } type="text" onChange={(e)=>setBaslik(e.target.value)} value={baslik}/>
    </div>
    <div>
        <label>Not Açıklama:</label>
        <input type="text" onChange={(e)=>setAciklama(e.target.value)} value={aciklama}/>
    </div>
    </div>
<button type='submit'>Not Ekle</button>
{hata && <div className='error'>{hata}</div>} 
    </form>
  )
}
