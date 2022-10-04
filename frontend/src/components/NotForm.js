import {useState} from 'react'

export default function NotForm() {

    const [baslik,setBaslik]=useState('')
    const [aciklama,setAciklama]=useState('')

    const handleSubmit=(e)=>{
        e.preventDefault();
        const not={baslik,aciklama}

        console.log(not);
    } 
  return (
    <form className='create' onSubmit={handleSubmit }>
    <h3>Yeni bir not ekle</h3>
    <div className='create-group'>
    <div>
        <label>Not Başlık:</label>
        <input type="text" onChange={(e)=>setBaslik(e.target.value)} value={baslik}/>
    </div>
    <div>
        <label>Not Açıklama:</label>
        <input type="text" onChange={(e)=>setAciklama(e.target.value)} value={aciklama}/>
    </div>
    </div>
<button type='submit'>Not Ekle</button>
    </form>
  )
}
