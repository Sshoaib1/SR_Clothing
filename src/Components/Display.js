import React from 'react'
export const display=[
    {
        image: <img src="mens7.jpg" alt='' style={{ height: 490, objectFit: "cover" }} />,
      
    },
    {
        image: <img src="ladiesd.jpg" alt='' style={{ height: 490, objectFit: "cover" }} />,
    }

]

export default function Display() {
  return (
    <div>
      {
        display.map(p=>
           <div>
            {p.image}
           </div>

        )
      }
    </div>
  )
}
