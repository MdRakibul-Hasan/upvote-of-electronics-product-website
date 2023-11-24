

const getStoredProductData = () => {
    const storedProductData = localStorage.getItem('Product-data');

    if(storedProductData){
        return JSON.parse(storedProductData);
    }
    return [];
}

const saveProduct = _id =>{
const storedProductDatas = getStoredProductData();
const exists = storedProductDatas.find(productId => productId === _id);

if(!exists){
    storedProductDatas.push(_id);
    localStorage.setItem('Product-data', JSON.stringify(storedProductDatas))
}

}

const removeProduct = _id => {
    const storedProductDatas = getStoredProductData();
    const updatedProductDatas = storedProductDatas.filter(productId => productId !== _id);
    localStorage.setItem('Product-data', JSON.stringify(updatedProductDatas));


  };
  




export {removeProduct}
export {saveProduct}
export {getStoredProductData}