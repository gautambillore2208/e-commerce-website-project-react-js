import React, { useState, useRef, useEffect } from "react";
import { Button, Checkbox, Label, Modal, TextInput, Accordion, Dropdown, Carousel, Drawer } from "flowbite-react";
import { useParams } from 'react-router';
import Loading from "./Loading"
import RelatedProduct from "./RelatedProduct";

function ProductDetail() {

    const { id } = useParams();
    const [product, setproduct] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        ///first method
           const productFetch = async()=>{
               const res =await fetch(`https://fakestoreapi.com/products/${id}`);

               const data = await res.json();
               console.log(data)
               if(data){
                setproduct(data);
                setIsLoading(false)
               }

               
           }
          productFetch();  
        ///second method
        // fetch(`https://fakestoreapi.com/products/${id}`)
        //    fetch(`https://dummyjson.com/products${id}`)
        //     .then((res) => {
        //         return res.json();
        //     })
        //     .then((data) => {
        //         console.log(data);
        //         setproduct(data);
        //         setIsLoading(false);
        //     });
        ///third method
        //  dispatch(fetchproducts())
        //  setIsLoading(false);
    }, []);

    if (isLoading) {

        return <Loading />;

    }


    return (
        <>
            <div className="container mx-auto py-10">
                <div className="bg-gray-100 dark:bg-gray-800 py-8 rounded-lg">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col md:flex-row -mx-4">
                            <div className="md:flex-1 px-4">
                                <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                                    <img className="w-full h-full object-contain object-top" src={product.image} alt="Product Image" />
                                </div>


                            </div>
                            <div className="md:flex-1 px-4">
                                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{product.title}</h2>
                                <h6 className=" text-lg  uppercase font-medium text-gray-500 dark:text-white">{product.category}</h6>

                                <div className="flex mb-4">
                                    <div className="mr-4">


                                        <span className="text-lg font-medium text-gray-900 line-through dark:text-white"> {product.price + 250}</span><span className="ms-3 text-lg font-bold text-gray-900 dark:text-white"> {product.price}</span>


                                    </div>
                                    <div>
                                        <span className="font-bold text-gray-700 dark:text-gray-300">Availability: </span>
                                        <span className="text-green-400 dark:text-green-300"> In Stock</span>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <span className="font-bold text-gray-700 dark:text-gray-300">Select Color:</span>
                                    <div className="flex items-center mt-2">
                                        <button className="w-6 h-6 rounded-full bg-gray-800 dark:bg-gray-200 mr-2"></button>
                                        <button className="w-6 h-6 rounded-full bg-red-500 dark:bg-red-700 mr-2"></button>
                                        <button className="w-6 h-6 rounded-full bg-blue-500 dark:bg-blue-700 mr-2"></button>
                                        <button className="w-6 h-6 rounded-full bg-yellow-500 dark:bg-yellow-700 mr-2"></button>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <span className="font-bold text-gray-700 dark:text-gray-300">Select Size:</span>
                                    <div className="flex items-center mt-2">
                                        <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">S</button>
                                        <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">M</button>
                                        <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">L</button>
                                        <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">XL</button>
                                        <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">XXL</button>
                                    </div>
                                </div>
                                <div className="flex -mx-2 mb-4">
                                    <div className="w-2/4 px-2">
                                        <button className="w-full focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">Buy Now</button>
                                    </div>
                                    <div className="w-1/4 px-2">
                                        <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700"><svg className="w-6 h-6 text-gray-400 dark:text-white mx-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 10V6a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4m3-2 .917 11.923A1 1 0 0 1 17.92 21H6.08a1 1 0 0 1-.997-1.077L6 8h12Z" />
                                        </svg>
                                        </button>
                                    </div>
                                    <div className="w-1/4 px-2">
                                        <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600 text-center" ><svg className="w-6 h-6 text-gray-800 dark:text-white mx-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z" />
                                        </svg>
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <span className="font-bold text-gray-700 dark:text-gray-300">Product Description:</span>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                                        {product.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <RelatedProduct/>
        </>
    )

}


export default ProductDetail;
