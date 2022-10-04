/* eslint-disable no-unused-vars */
import React from 'react'
import { useEffect, useState } from 'react'
import '../index.css'
export default function Home() {
const [notlar,setNotlar]=useState(null)
useEffect(()=>{
  const fetchNotlar=async ()=>{
    const response=await fetch('/api/notlar')
   
    const json=await response.json()
    console.log(json);
    if(response.ok){
      setNotlar(json)
    }
  }
  
fetchNotlar()

},[])
  return (
    <div className="home">
        <div className='notlar'>
        {notlar && notlar.map((not)=>(
          <p key={not._id}>{not.baslik}</p>
        )) }

        </div>
    </div>
  )
}
