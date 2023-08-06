import React from 'react'
import { Button } from 'react-bootstrap';
export default function items(props) {
    const { items, onAdd, onRemove } = props;

    const itemPrice = items.reduce((a, c) => a + c.price * c.qty, 0);
    const taxPrice = itemPrice * 0.16;
    const shippingPrice = itemPrice > 2200 ? 0 : 200;
    const totalPrice = itemPrice + taxPrice + shippingPrice;
  return (
    
    
    <div>
       {
      items.map((item) => (
            <div key={item.id}>
                <div className='mt-5'><b>{item.Name}</b></div>
                <div className="my-2" style={{ textAlign: "right" }}>
                  PKR{item.qty}*{item.price.toFixed(2)}
                </div>
                <div>
                <Button style={{ backgroundColor: "#40c0f0", width: "3rem" }}
                    onClick={() => onAdd(item)}>
                      <b>+</b>
                </Button>

                <Button className='mx-2' style={{ backgroundColor: "#f04040", width: "3rem" }}
                    onClick={() => onRemove(item)}>
                      <b>-</b>
                </Button>

                </div>
            </div>
            ))}
                    {
                    items.length !== 0 && (
                        <>
                            <hr></hr>
                            <div>
                                <div>Item Price</div>
                                <div style={{ textAlign: "right" }}>
                                    PKR {itemPrice.toFixed(2)}</div>
                            </div>
                            <div>
                                <div>Tax Price</div>
                                <div style={{ textAlign: "right" }}>
                                    PKR {taxPrice.toFixed(2)}</div>
                            </div>
                            <div>
                                <div>Shipping Price</div>
                                <div style={{ textAlign: "right" }}>
                                    PKR {shippingPrice.toFixed(2)}</div>
                            </div>
                            <div>
                                <div><strong> Total Price </strong></div>
                                <div style={{ textAlign: "right" }}>
                                    <strong>PKR {totalPrice.toFixed(2)} </strong></div>
                            </div>
                        </>
                    )}
    </div>
  )
}
