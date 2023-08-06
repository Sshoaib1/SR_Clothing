import React from 'react'
import { Display } from '../Alldata/Display'

export default function DispItems() {
  return (
    <div>
        {
        Display.map((prod)=>(
            <div className='mx-5 mt-5' key={prod.id} >
            <span style={{height:"1000"}}> {prod.image} </span>
            </div>


        ))
        
        }</div>
  )
}
