import React, { useState, useRef, useEffect, useContext } from "react";
import { Button, Checkbox, Label, Modal, TextInput, Accordion, Dropdown, Carousel, Drawer } from "flowbite-react";

import Loading from "./Loading"
import RelatedProduct from "./RelatedProduct";
import { CartContext } from "../Pages/ContextApi/CartContext";

function MyCart() {


    const [product, setproduct] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        ///first method
        //    const productFetch = async()=>{
        //        const res =await fetch("https://fakestoreapi.com/products");
        //        const data = await res.json();
        //       const product= setproduct(data);
        //    }
        //   productFetch();  
        ///second method
        fetch(`https://fakestoreapi.com/products`)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
                setproduct(data);
                setIsLoading(false);
            });
        ///third method
        //  dispatch(fetchproducts())
        //  setIsLoading(false);
    }, []);
    const TopCart = useContext(CartContext);
    const tcount = TopCart.cartItem.length;
    const total = TopCart.cartItem.reduce((a, b) => a + b.price, 0)

   

    if (isLoading) {

        return <Loading />;

    }


    return (
        <>
            <div classNameName="container mx-auto py-10">
                <div className="container mx-auto mt-10">
                    <div className="sm:flex shadow-md my-10">
                        <div className="  w-full  sm:w-3/4 bg-white px-10 py-10">
                            <div className="flex justify-between border-b pb-8">
                                <h1 className="font-semibold text-2xl">Shopping Cart</h1>
                                <h2 className="font-semibold text-2xl">3 Items</h2>
                            </div>
                            {TopCart.cartItem.map((item) => {
                                return (
                                    <div className="md:flex items-strech py-8 md:py-10 lg:py-8 border-t border-gray-50" key={item.id}>
                                        <div className="md:w-2/12 2xl:w-1/4 w-full">
                                            <img src={item.image}  alt="Black Leather Purse" className="h-full object-center object-cover md:block hidden" />
                                            
                                        </div>
                                        <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
                                            
                                            <div className="flex items-center justify-between w-full">
                                                <p className="text-base font-black leading-none text-gray-800">{item.title}</p>

                                            </div>
                                            
                                            <p className="text-xs leading-3 text-gray-600 py-4">Color: Black</p>
                                            <p className="w-96 text-xs leading-3 text-gray-600">Price: {item.price}</p>
                                            <div className="flex items-center justify-between pt-5">
                                                <div className="flex itemms-center">
                                                    <p className="text-xs leading-3 underline text-gray-800 cursor-pointer">Add to favorites</p>
                                                    <p className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer">Remove</p>
                                                </div>
                                        <div className="relative flex items-center max-w-[8rem]">
                                        <button type="button" onClick={() => TopCart.handleDecrement(item.id)} className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-8 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                                          <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16" />
                                          </svg>
                                        </button>
                                        <div   className="bg-gray-50 border-x-0 border-gray-300 h-8 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block  py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[30px]"  >{item.qty}</div>
                                        <button type="button" onClick={() => TopCart.handleIncrement(item.id)} className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-8 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                                          <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                                          </svg>
                                        </button>
                                      </div>

                                                <p className="text-base font-black leading-none text-gray-800">{(item.qty*item.price).toFixed(2)}</p>
                                            </div>
                                        </div>
                                    </div>

                                )
                            })}



                            <a href="#" className="flex font-semibold text-indigo-600 text-sm mt-10">
                                <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512">
                                    <path
                                        d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                                </svg>
                                Continue Shopping
                            </a>
                        </div>
                        <div id="summary" className=" w-full   sm:w-1/4   md:w-1/2     px-8 py-10">
                            <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
                            <div className="flex justify-between mt-10 mb-5">
                                <span className="font-semibold text-sm uppercase">Items ({tcount})</span>
                                <span className="font-bold text-lg">{total.toFixed(2)}</span>
                            </div>
                            <div>
                                <label className="font-medium inline-block mb-3 text-sm uppercase">
                                    Shipping
                                </label>
                                <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option selected>Choose a country</option>
                                    <option value="US">United States</option>
                                    <option value="CA">Canada</option>
                                    <option value="FR">France</option>
                                    <option value="DE">Germany</option>
                                </select>
                            </div>
                            <div className="py-10">
                                <label
                                    for="promo"
                                    className="font-semibold inline-block mb-3 text-sm uppercase"
                                >
                                    Promo Code
                                </label>
                                <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
                            </div>
                            <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white rounded-lg uppercase">
                                Apply
                            </button>
                            <div className="border-t mt-8">
                                <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                                    <span>Total cost</span>
                                    <span>$600</span>
                                </div>
                                <button className="px-6 py-3.5 text-base font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full">
                                    Checkout
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )

}


export default MyCart;
