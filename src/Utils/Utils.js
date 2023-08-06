export const getProducts = (mensdat, type, page, pageSize) => {
    let filteredProducts = [];
    if(!type)
      filteredProducts = mensdat;
    else
      filteredProducts = mensdat.filter(p => p.type === type);
  
    const totalPages = Math.ceil(filteredProducts.length / pageSize);
  
    let start = (page - 1) * pageSize;
    let end = start + pageSize;
    let pageData = filteredProducts.slice(start, end);
    
    return {totalPages, pageData};
  }
  
  export function pageNumbersArray(totalPages){
    let array = [];
    for(let i=1; i<=totalPages; i++)
      array.push(i);
  
    console.log(totalPages);
    console.log(array);
    return array;
  }