import React from 'react'
import { Button } from 'react-bootstrap'

export default function Menmapping(props) {
  const { items, onAdd, onRemove } = props;

  return (
    <div className='mt-4' style={{

      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-evenly",
      fontFamily: "Georgia",
      width: "100%",
      minWidth:1350

    }}>
      {
        props.pageData.map((p) =>
          <div className='mx-2' key={p.id} style={{
            display: "flex",
            flexDirection: "column",
            padding: 10,
            // width: "20%",
            marginTop: 10,
            gap: 10
          }}
          >
            <span> {p.image} </span>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: 15 }}>{p.look}</span>
              <span style={{ fontSize: 19 }} > <b>{p.Name}</b></span>
              <span style={{ fontSize: 17 }}> Rs: {p.price}</span>
              </div>
            {
              items.some(pr => pr.id === p.id) ?
                <Button variant="outline-danger"
                  style={{ padding: 5, border: 0, borderRadius: 5 }}
                  onClick={() => onRemove(p)}
                >
                  Remove from cart
                </Button> 
                :
                <Button variant="outline-success"
                  style={{ color: "black", padding: 5, border: 0, borderRadius: 5 }}
                  onClick={() => onAdd(p)}
                >
                  Add to cart
                </Button>
            }
          </div>
        )
      }

    </div>
  )
}
