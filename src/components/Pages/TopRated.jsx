import React, { useContext } from "react";
import { useState, useEffect } from "react";
import Loading from "./Loading"
import { Link } from "react-router-dom";
import { Sidebar, Checkbox, Label } from "flowbite-react";


import {
    HiArrowSmRight,
    HiChartPie,
    HiInbox,
    HiOutlineMinusSm,
    HiOutlinePlusSm,
    HiShoppingBag,
    HiTable,
    HiUser,
} from "react-icons/hi";
import { twMerge } from "tailwind-merge";
import { CartContext } from "./ContextApi/CartContext";

export default function TopRated() {

    const cItem=useContext(CartContext);
    const getArry=[]
    const arr= cItem.cartItem.map((item)=>getArry.push(item.id))
   


        // let obj = cItem.cartItem[0].id;
        // console.log(obj)
        // if (Object.values(obj).indexOf(2) > -1) {
        //    console.log('has test1');
        // }else{
        //     console.log('no'); 
        // }
        
    
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
        fetch('https://fakestoreapi.com/products')
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

    if (isLoading) {

        return <Loading />;

    }
    return (
        <>




            <div className="container grid grid-cols-1 gap-4 py-10  md:grid-cols-4 lg:grid-cols-5">
                <div className="col-span-12  md:col-span-1 lg:col-span-1">
                    <div className=" px-0 py-4  bg-gray-50 dark:bg-gray-800 mt-4 rounded-lg">
                        <Sidebar aria-label="Sidebar with multi-level dropdown example " className="w-auto">
                            <Sidebar.Items>
                                <Sidebar.ItemGroup>
                                <Sidebar.Collapse
                                        icon={HiShoppingBag}
                                        label="Color"
                                        renderChevronIcon={(theme, open) => {
                                            const IconComponent = open ? HiOutlineMinusSm : HiOutlinePlusSm;
                                            return <IconComponent aria-hidden className={twMerge(theme.label.icon.open[open ? 'on' : 'off'])} />;
                                        }}
                                    >
                                        <div className="flex max-w-md flex-col gap-4 pl-5" id="checkbox">
                                            <div className="flex items-center gap-2">
                                                <Checkbox id="promotion" />
                                                <Label htmlFor="promotion">Red</Label>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Checkbox id="age" />
                                                <Label htmlFor="age">Yellow</Label>
                                            </div>
                                        </div>
                                    </Sidebar.Collapse>
                                    <Sidebar.Collapse
                                        icon={HiShoppingBag}
                                        label="Size"
                                        renderChevronIcon={(theme, open) => {
                                            const IconComponent = open ? HiOutlineMinusSm : HiOutlinePlusSm;
                                            return <IconComponent aria-hidden className={twMerge(theme.label.icon.open[open ? 'on' : 'off'])} />;
                                        }}
                                    >
                                        <div className="flex max-w-md flex-col gap-4 pl-5" id="checkbox">
                                            <div className="flex items-center gap-2">
                                                <Checkbox id="promotion" />
                                                <Label htmlFor="promotion">S</Label>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Checkbox id="age" />
                                                <Label htmlFor="age">M</Label>
                                            </div>
                                        </div>
                                    </Sidebar.Collapse>
                                    <Sidebar.Item href="#" icon={HiChartPie}>
                                    </Sidebar.Item>
                                    <Sidebar.Collapse
                                        icon={HiShoppingBag}
                                        label="E-commerce"
                                        renderChevronIcon={(theme, open) => {
                                            const IconComponent = open ? HiOutlineMinusSm : HiOutlinePlusSm;

                                            return <IconComponent aria-hidden className={twMerge(theme.label.icon.open[open ? 'on' : 'off'])} />;
                                        }}
                                    >
                                        <Sidebar.Item href="#">Products</Sidebar.Item>
                                        <Sidebar.Item href="#">Sales</Sidebar.Item>
                                        <Sidebar.Item href="#">Refunds</Sidebar.Item>
                                        <Sidebar.Item href="#">Shipping</Sidebar.Item>
                                    </Sidebar.Collapse>
                                    <Sidebar.Item href="#" icon={HiInbox}>
                                        Inbox
                                    </Sidebar.Item>
                                    <Sidebar.Item href="#" icon={HiUser}>
                                        Users
                                    </Sidebar.Item>
                                    <Sidebar.Item href="#" icon={HiShoppingBag}>
                                        Products
                                    </Sidebar.Item>
                                    <Sidebar.Item href="#" icon={HiArrowSmRight}>
                                        Sign In
                                    </Sidebar.Item>
                                    <Sidebar.Item href="#" icon={HiTable}>
                                        Sign Up
                                    </Sidebar.Item>
                                </Sidebar.ItemGroup>
                            </Sidebar.Items>
                        </Sidebar>
                    </div>
                </div>
                <div className="col-span-12  md:col-span-4 lg:col-span-4">
                    <div className="p-4 ">
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 mb-4">

                            {product.map((item) => (
                                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col" key={item.id}>
                                    <Link to={`/product-detail/${item.id}`} >
                                        <img className="rounded-t-lg object-cover object-top h-64 w-96 mx-auto" src={item.image} alt="" />
                                    </Link>
                                    <div className="p-5 ">
                                    <Link to={`/product-detail/${item.id}`} >
                                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white truncate "> {item.title}</h5>
                                        </Link>
                                        <p className="text-yellow-500">{item.price}</p>
                                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-ellipsis overflow-hidden">{item.description.slice(0, 50)}</p>
                                        

                                        <button type="button" disabled={getArry.indexOf(item.id) > -1 ? 'disabled' :'' }    className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900" onClick={() => cItem.setcartItem([...cItem.cartItem,{id:item.id,title:item.title,price:item.price,image:item.image,qty:1}])}>Add to Cart</button>
                                        
                                    </div>

                                </div>))}


                            <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
                                <p className="text-2xl text-gray-400 dark:text-gray-500">
                                    <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                                    </svg>
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
                            <p className="text-2xl text-gray-400 dark:text-gray-500">
                                <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                                </svg>
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                                <p className="text-2xl text-gray-400 dark:text-gray-500">
                                    <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                                    </svg>
                                </p>
                            </div>
                            <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                                <p className="text-2xl text-gray-400 dark:text-gray-500">
                                    <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                                    </svg>
                                </p>
                            </div>
                            <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                                <p className="text-2xl text-gray-400 dark:text-gray-500">
                                    <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                                    </svg>
                                </p>
                            </div>
                            <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                                <p className="text-2xl text-gray-400 dark:text-gray-500">
                                    <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                                    </svg>
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
                            <p className="text-2xl text-gray-400 dark:text-gray-500">
                                <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                                </svg>
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                                <p className="text-2xl text-gray-400 dark:text-gray-500">
                                    <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                                    </svg>
                                </p>
                            </div>
                            <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                                <p className="text-2xl text-gray-400 dark:text-gray-500">
                                    <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                                    </svg>
                                </p>
                            </div>
                            <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                                <p className="text-2xl text-gray-400 dark:text-gray-500">
                                    <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                                    </svg>
                                </p>
                            </div>
                            <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                                <p className="text-2xl text-gray-400 dark:text-gray-500">
                                    <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                                    </svg>
                                </p>
                            </div>
                        </div>
                    </div></div>
            </div>
        </>
    )

}

