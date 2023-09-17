import axios from 'axios';


export const getProductCategories = async()=>{
        try {
            return await axios.get('https://fakestoreapi.com/products/categories');
        } catch (error) {
            console.log("Error while calling Product Categories API- ",error);
        }
}

export const getProducts = async () => {
  try {
    return await axios.get("https://fakestoreapi.com/products");
  } catch (error) {
    console.log("Error while calling getProducts API- ", error);
  }
};