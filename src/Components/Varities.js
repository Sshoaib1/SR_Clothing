import React from 'react'
import { Button } from 'react-bootstrap'
import Catag, { products } from '../Alldata/Catag'
import Search from './Search'
export default function Varities(props) {
  
    
    return (
        
        <div style={{
            display: "flex", justifyContent: "end", flexDirection: "row"
            , gap: 130, width:"100%",minWidth:1475
        }}
        >
            <div className='mt-4' >
                <Catag />
                {
                    products.map((p) => {
                        
                        return (
                            
                            <Button key={p.id1} variant="outline-light" style={{
                                color: "black",
                                border: "white", fontSize: 19, fontFamily: " Georgia", 
                            }}
                            onClick={() =>
                            { 
                                props.onChangeCat(p.id);
                                props.handlePageChange(p.id);
                            }}
                            >
                             
                                {p.id}
                            </Button>
                       
                        )
                    })
                }
            </div>

            <div className="mx-5" style={{ width: 240 }}>
                <Search />
            </div>
        </div>
    )
}
