import { useNotContext } from "../hooks/useNotContext"
import moment from "moment"
import 'moment/locale/tr'
export default function NotDetay({not}) {

  const {dispatch}=useNotContext()

  const handleClick=async () => {
    const response =await fetch(`/api/notlar/`+not._id,{
      method:'DELETE'
      })
      const json=await response.json()
      if(response.ok){
        // state de temizle
        dispatch({type:'NOT_SİL',payload:json})
      }
  }

  return (
    <div className="not-detay">
        <h4>{not.baslik}</h4>
        <p>{not.aciklama}</p>
        <p>{moment(new Date(not.createdAt)).fromNow()}</p>
        <span onClick={handleClick}>x</span>
    </div>
  )
}
