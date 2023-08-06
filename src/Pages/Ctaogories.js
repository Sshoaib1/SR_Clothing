import React, { useState, useEffect } from 'react'
// import Navbar from '../Header/Navbar';
import Varities from '../Components/Varities';
import Newarrivals from '../Arrivals/Newarrivals';
import Menmapping from '../mapping/menmapping';
import SlectedCatogory from '../Components/SlectedCatogory';
import { Col } from 'react-bootstrap';
import { mensdat } from '../Alldata/Mens';
import { getProducts } from '../Utils/Utils';
import Pagination from '../Components/Pagination';
// import { useMediaQuery } from 'react-responsive'
// import MediaQuery from 'react-responsive'
// import { Display } from '../Alldata/Display';
// import DispItems from '../mapping/DispItems';
// import CartItems from '../mapping/CartItems';

const PAGE_SIZE = 3;
export default function Ctaogories() {

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


  if (pageData === null)
    return (
      <div style={{ backgroundColor: "#f3efe014" }}>
        {/* <Navbar items={items}/> */}
        <Varities selectedCat={selectedCat}
          onChangeCat={onChangeCat}
          handlePageChange={handlePageChange} />
        <div className="spinner-border text-primary" role="status">
        </div>
      </div>

    );

  if (pageData.length === 0)
    return (

      <div style={{ backgroundColor: "#f3efe014" }}>
       
        <Varities selectedCat={selectedCat}
          onChangeCat={onChangeCat}
          handlePageChange={handlePageChange} />
        <div class="alert alert-danger" role="alert">
          No products FOUND!
        </div></div>
    );

  return (
    <div style={{
      backgroundColor: "#f3efe014",
      minWidth: 1220
    }}>
       {/* <Navbar items={items}/> */}
      <Varities selectedCat={selectedCat}
        onChangeCat={onChangeCat}
        handlePageChange={handlePageChange} />

      <div style={{ display: "flex" }}>
        {selectedCat && (
          <Newarrivals selectedCat={selectedCat} onChangeCat={onChangeCat}
          />
        )}
        <Col>

          {selectedCat && (
            <SlectedCatogory selectedCat={selectedCat}
            />
          )
          }

          <Menmapping pageData={pageData} handlePageChange={handlePageChange}
            items={items} onAdd={onAdd} onRemove={onRemove}
          />

        </Col>

      </div>

      {
        selectedCat && (
          <Pagination
            page={page}
            selectedCat={selectedCat}
            onChangeCat={onChangeCat}
            totalPages={totalPages}
          />
        )}

    </div>
  )
}
