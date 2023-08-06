import React,{useState} from 'react'
import CartItems from '../mapping/CartItems';

export default function ShoppingBag() {

    const [items, setitems] = useState([]);
    const onAdd = (product) => {
      const exist = items.find(x => x.id === product.id);
      if (exist) {
        setitems(items.map(x => x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        ));
  
      }
      else {
        setitems([...items, { ...product, qty: 1 }])
      }
    };
    const onRemove = (product) => {
      const exist = items.find(x => x.id === product.id);
      if (exist.qty === 1) {
        setitems(items.filter((x) => x.id !== product.id))
      }
      else {
        setitems(items.map(x => x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        ));
      }
    }
   return(
        <CartItems items={items} onAdd={onAdd} onRemove={onRemove}/>
) 
}
