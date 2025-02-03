import React, { useContext, useState } from "react";
import { Button, Drawer, Textarea, TextInput, Banner } from "flowbite-react";
import DarkMode from "./DarkMode";
import { Link } from "react-router-dom"
import NavMenu from "../NavMenu/NavMenu";
import { HiX } from "react-icons/hi";
import { FaRegTrashAlt } from "react-icons/fa";
import { CartContext } from "../Pages/ContextApi/CartContext";


const Navbar = ({ handleOrderPopup }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);

  const [isOpenUser, setIsOpenUser] = useState(false);
  const userHandleClose = () => setIsOpenUser(false);
  const TopCart = useContext(CartContext);


  const tcount = TopCart.cartItem.length;
  const total = TopCart.cartItem.reduce((a, b) => a + b.price, 0)

  return (
    <>

      <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
        {/* upper Navbar */}
        <div className="bg-primary/40 py-2">
          <div className="container flex justify-between items-center">
            <div>

            </div>
            <div className="flex justify-between items-center gap-4">
              <div className="relative group hidden sm:block">

              </div>

              {/* order button */}
              <button className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-1 me-2 mb-2 dark:focus:ring-yellow-900 flex" onClick={() => setIsOpenUser(true)}>
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeWidth="2" d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>

                <span>Guest</span>
              </button>
              <button className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-1 me-2 mb-2 dark:focus:ring-yellow-900 flex" onClick={() => setIsOpen(true)}>
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312" />
                </svg>
                <span>({tcount}) {total.toFixed(2)}</span>
              </button>
              <Drawer open={isOpen} onClose={handleClose} position="right" className="w-96">
                <Drawer.Header title="My Cart" />
                <Drawer.Items>
                  <div className="flex-1 overflow-y-auto  h-[340px] px-4 py-2 sm:px-6 max-w-[400px]">


                    <div className="mt-8">
                      <div className="flow-root">
                        <ul role="list" className="-my-2 divide-y divide-gray-200 w-[300px]">
                          {TopCart.cartItem.map(
                            (item) => {
                              return (
                                <li className="flex py-6" key={item.id}>
                                  <div className="h-24 w-24 flex-shrink-0  rounded-md border border-gray-200">
                                    <img src={item.image} alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt." className="h-full w-full object-cover object-center" />
                                  </div>
                                  <div className="ml-4 flex flex-1 flex-col">
                                    <div>
                                      <div className="flex justify-between text-base font-medium text-gray-500  ">

                                        <a href="#" ><h3 className="truncate 	text-overflow: ellipsis overflow-hidden w-[150px]">{item.title} </h3></a>


                                      </div>
                                      <p className="mt-1 text-sm text-gray-500">{item.price}</p>

                                    </div>
                                    <div className="flex flex-1  justify-between text-sm items-center-">
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
                                      <div className="flex">
                                        <button type="button" className="font-medium text-red-600 hover:text-red-500"><FaRegTrashAlt /></button>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              )
                            }
                          )


                          }

                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                    <div className="flex justify-between text-base font-medium text-gray-500">
                      <p>Subtotal</p>
                      <p>{total}</p>
                    </div>

                    <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                    <div className="mt-2 w-full">

                      <Link to={'/cart'} color="warning" className=" focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-lg px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900 w-full block text-center">Checkout</Link>
                    </div>
                    <div className="mt-2 flex justify-center text-center text-sm text-gray-500">
                      <p>
                        or

                        <Button color="gray">Continue Shopping
                          <span aria-hidden="true"> &rarr;</span></Button>

                      </p>
                    </div>
                  </div>

                </Drawer.Items>
              </Drawer>

              <Drawer open={isOpenUser} onClose={userHandleClose} position="right">
                <Drawer.Header title="User" />
                <Drawer.Items>
                  <form action="#">
                    <div className="mb-6 mt-3">
                      <p htmlFor="email" className="mb-2 block">
                        Your email
                      </p>
                      <TextInput id="email" name="email" placeholder="name@company.com" type="email" />
                    </div>
                    <div className="mb-6">
                      <p htmlFor="subject" className="mb-2 block">
                        Subject
                      </p>
                      <TextInput id="subject" name="subject" placeholder="Let us know how we can help you" />
                    </div>
                    <div className="mb-6">
                      <p htmlFor="message" className="mb-2 block">
                        Your message
                      </p>
                      <Textarea id="message" name="message" placeholder="Your message..." rows={4} />
                    </div>
                    <div className="mb-6">
                      <Button type="submit" className="w-full">
                        Send message
                      </Button>
                    </div>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <a href="mailto:info@company.com" className="hover:underline">
                        info@company.com
                      </a>
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      <a href="tel:2124567890" className="hover:underline">
                        212-456-7890
                      </a>
                    </p>
                  </form>
                  <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">
                    Supercharge your hiring by taking advantage of our&nbsp;
                    <a href="#" className="text-yellow-600 underline hover:no-underline dark:text-yellow-500">
                      limited-time sale
                    </a>
                    &nbsp;for Flowbite Docs + Job Board. Unlimited access to over 190K top-ranked candidates and the #1 design
                    job board.
                  </p>

                </Drawer.Items>
              </Drawer>

              {/* Darkmode Switch */}
              <div>
                <DarkMode />
              </div>
            </div>
          </div>
        </div>
        {/* lower Navbar */}
        <NavMenu />
      </div>
    </>
  );
};

export default Navbar;
