/* eslint-disable no-unused-vars */
import React from 'react'
import { useEffect, useState } from 'react'
import '../index.css'
import  NotDetay from '../components/NotDetay'
import NotForm from '../components/NotForm'
import { useNotContext } from '../hooks/useNotContext'
export default function Home() {
// const [notlar,setNotlar]=useState(null)
const {notlar,dispatch}=useNotContext();
useEffect(()=>{
  const fetchNotlar=async ()=>{
    const response=await fetch('/api/notlar')
   
    const json=await response.json()
    if(response.ok){
     // setNotlar(json)
      dispatch({type:'NOT_DOLDUR',payload:json})
    }
  }
  fetchNotlar()
},[dispatch])
  return (
    <div className="home">
    <div className='not-form'>
<NotForm/>
    </div>
        <div className='notlar'>
        {notlar && notlar.map((not)=>(
          <NotDetay key={not._id} not={not}/>
        )) }

        </div>
    </div>
  )
}
