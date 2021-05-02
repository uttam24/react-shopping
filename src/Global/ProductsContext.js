import React, {createContext, useState} from 'react';

export const ProductsContext = createContext();
const ProductsContextProvider = (props)=>{

	const [products] = useState([
		{id:1, name:'Dslr', price:300, image:`${process.env.PUBLIC_URL}/images/dslr.jpg`, status:'hot'},
		{id:2, name:'Head Phone', price:30, image:`${process.env.PUBLIC_URL}/images/headphone.jpg`, status:'new'},
		{id:3, name:'Iphone', price:400, image:`${process.env.PUBLIC_URL}/images/iphone.jpg`, status:'hot'},
		{id:4, name:'Micro Phone', price:200, image:`${process.env.PUBLIC_URL}/images/microphone.jpg`, status:'hot'},
		{id:5, name:'Perfume', price:40, image:`${process.env.PUBLIC_URL}/images/perfume.jpg`, status:'new'},
		{id:6, name:'Rings', price:100, image:`${process.env.PUBLIC_URL}/images/rings.jpg`, status:'new'},
		{id:7, name:'Shoe', price:80, image:`${process.env.PUBLIC_URL}/images/shoe.jpg`, status:'hot'},
		{id:8, name:'Watch', price:120, image:`${process.env.PUBLIC_URL}/images/watch.jpg`, status:'new'}
	 ]);

	 return (
	 	<ProductsContext.Provider value={{products: [...products]}}>
	 	{props.children}
	 	</ProductsContext.Provider>
	 	)
}

export default ProductsContextProvider;