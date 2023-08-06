import React from 'react'

export default function SlectedCatogory(props) {
  return (
    <div className='mt-5 mx-5' style={{justifyContent:"start",fontFamily: " Georgia"}}>
     
      <h1 > {props.selectedCat} </h1>

    </div>
  )
}
