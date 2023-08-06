import { useState, useEffect } from "react";
import { mensdat } from "../Alldata/Mens";
import Navbar from "../Header/Navbar";
import { getProducts } from "../Utils/Utils";
// import items from "../Pages/Ctaogories";
import Footer from "./Footer";
const PAGE_SIZE = 3;
export default function Layout(props){
  const [selectedCat, setSelectedCat] = useState('')
  const [pageData, setPageData] = useState(null)

  let [page, setPage] = useState(1);
  let [totalPages, setTotalPages] = useState('');

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

  useEffect(() => {

    const { totalPages, pageData } = getProducts(mensdat, '', 1, PAGE_SIZE);
    setPageData(pageData);
    setTotalPages(totalPages)

  }, []);

  const onChangeCat = (pageNumber) => {
    const { totalPages, pageData } = getProducts(mensdat, selectedCat, pageNumber, PAGE_SIZE);
    setPageData(pageData);
    setPage(pageNumber);
    setTotalPages(totalPages);
  }


  const handlePageChange = (c) => {
    const { totalPages, pageData } = getProducts(mensdat, c, 1, PAGE_SIZE);
    setPageData(pageData)
    setSelectedCat(c)
    setPage(1)
    setTotalPages(totalPages);

  }
  
  return(
    <div>    
    <Navbar items={items}/>
      
       { props.children }

    <Footer onChangeCat={onChangeCat} handlePageChange={handlePageChange} selectedCat={selectedCat}/>
    </div>

  )
}