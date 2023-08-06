import React from 'react'
import { Autumn, byProd, newarriv, Sustainability, Trending } from '../Alldata/Arriv'
import { Button } from 'react-bootstrap'
export default function Newarrivals(props) {
  return (
    <div 

    >
      <h4 style={{fontFamily: " Georgia",display:"flex",padding:5}} className='mt-5 mx-4'
      >
        <b>New Arrival</b>
      </h4>
    {
      newarriv.map((p) => {
        return (
          
            <Button key={p.id} variant="outline-light" className='mx-4' style={{
                color: "black",
                border: "white", fontSize: 14, fontFamily: " Georgia",  textAlign:"start" ,   display:"flex",
                flexDirection:"column",padding:5
              }} 
              onClick={() => props.onChangeCat(p.id)}
            >     
                {p.id}
            </Button>
      )
    })  
  }
  <h4 style={{fontFamily: " Georgia",display:"flex",padding:5}} className='mt-4 mx-4'
      >
        <b>Autumn lookbook</b>
      </h4>
    {
      
      Autumn.map((p) => {
        return (
          
            <Button key={p.id} variant="outline-light" className='mx-4' style={{
                color: "black",
                border: "white", fontSize: 14, fontFamily: " Georgia",  textAlign:"start" ,   display:"flex",
                flexDirection:"column",padding:5
              
            }} 
            onClick={() => props.onChangeCat(p.id)}
            >     
                {p.id}
            </Button>
      )
    })  
  }
  <h4 style={{fontFamily: " Georgia",display:"flex",padding:5}} className='mt-4 mx-4'
      >
        <b>Trending now</b>
      </h4>
    {
      
      Trending.map((p) => {
        return (
          
            <Button key={p.id} variant="outline-light" className='mx-4' style={{
                color: "black",
                border: "white", fontSize: 14, fontFamily: " Georgia",  textAlign:"start" ,   display:"flex",
                flexDirection:"column",padding:5
              
            }} 
            onClick={() => props.onChangeCat(p.id)}
            >     
                {p.id}
            </Button>
      )
    })  
  }
  <h4 style={{fontFamily: " Georgia",display:"flex",padding:5}} className='mt-4 mx-4'
      >
        <b>Shop by Product</b>
      </h4>
    {
      
      byProd.map((p) => {
        return (
          
            <Button key={p.id} variant="outline-light" className='mx-4' style={{
                color: "black",
                border: "white", fontSize: 14, fontFamily: " Georgia",  textAlign:"start" ,   display:"flex",
                flexDirection:"column",padding:5
              
            }} 
            onClick={() => props.onChangeCat(p.id)}
            >     
                {p.id}
            </Button>
      )
    })  
  }
  <h4 style={{fontFamily: " Georgia",display:"flex",padding:5}} className='mt-4 mx-4'
      >
        <b>Sustainability</b>
      </h4>
    {
      
      Sustainability.map((p) => {
        return (
          
            <Button key={p.id} variant="outline-light" className='mx-4' style={{
                color: "black",
                border: "white", fontSize: 14, fontFamily: " Georgia",  textAlign:"start" ,   display:"flex",
                flexDirection:"column",padding:5
              
            }} 
            onClick={() => props.onChangeCat(p.id)}
            >     
                {p.id}
            </Button>
      )
    })  
  }
    </div>
  )
}
