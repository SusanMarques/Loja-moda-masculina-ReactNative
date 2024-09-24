import { data } from "../data";

//pega todos os produtos
export const getAllProducts = () =>{
    return data.products;
}
//pega produtos por id
export const getProductById = (id:number) =>{
    return data.products.find(item => item.id === id);
}
//pega produtos por categoria
export const getProductByCategory = (idCategory: number) =>{
    return data.products.filter(item => item.idCategory === idCategory);
}