import React, { useState } from "react";
import { Link } from "react-router-dom";

export const links = [
    {
      name: "Men",
      submenu: true,
      sublinks: [
        {
          Head: "Topwear",
          sublink: [
            { name: "T-shirt", link: "/" },
            { name: "Casual shirts", link: "/" },
            { name: "formal shirts", link: "/" },
            { name: "formal shirts", link: "/" },
            { name: "formal shirts", link: "/" },
          ],
        },
        {
          Head: "Bottomwear",
          sublink: [
            { name: "T-shirt", link: "/" },
            { name: "Casual shirts", link: "/" },
            { name: "formal shirts", link: "/" },
            { name: "formal shirts", link: "/" },
            { name: "formal shirts", link: "/" },
          ],
        },
        {
          Head: "innerwear",
          sublink: [
            { name: "T-shirt", link: "/" },
            { name: "Casual shirts", link: "/" },
            { name: "formal shirts", link: "/" },
            { name: "formal shirts", link: "/" },
            { name: "formal shirts", link: "/" },
          ],
        },
  
        {
          Head: "sleepwear",
          sublink: [
            { name: "T-shirt", link: "/" },
            { name: "Casual shirts", link: "/" },
            { name: "formal shirts", link: "/" },
            { name: "formal shirts", link: "/" },
            { name: "formal shirts", link: "/" },
          ],
        },
        {
          Head: "footwear",
          sublink: [
            { name: "T-shirt", link: "/" },
            { name: "Casual shirts", link: "/" },
            { name: "formal shirts", link: "/" },
            { name: "formal shirts", link: "/" },
            { name: "formal shirts", link: "/" },
          ],
        },
      ],
    },
    {
      name: "Women",
      submenu: true,
      sublinks: [
        {
          Head: "Topwear",
          sublink: [
            { name: "T-shirt", link: "/" },
            { name: "Casual shirts", link: "/" },
            { name: "formal shirts", link: "/" },
            { name: "formal shirts", link: "/" },
            { name: "formal shirts", link: "/" },
          ],
        },
        {
          Head: "Bottomwear",
          sublink: [
            { name: "T-shirt", link: "/" },
            { name: "Casual shirts", link: "/" },
            { name: "formal shirts", link: "/" },
            { name: "formal shirts", link: "/" },
            { name: "formal shirts", link: "/" },
          ],
        },
        {
          Head: "innerwear",
          sublink: [
            { name: "T-shirt", link: "/" },
            { name: "Casual shirts", link: "/" },
            { name: "formal shirts", link: "/" },
            { name: "formal shirts", link: "/" },
            { name: "formal shirts", link: "/" },
          ],
        },
  
        {
          Head: "sleepwear",
          sublink: [
            { name: "T-shirt", link: "/" },
            { name: "Casual shirts", link: "/" },
            { name: "formal shirts", link: "/" },
            { name: "formal shirts", link: "/" },
            { name: "formal shirts", link: "/" },
          ],
        },
        {
          Head: "footwear",
          sublink: [
            { name: "T-shirt", link: "/" },
            { name: "Casual shirts", link: "/" },
            { name: "formal shirts", link: "/" },
            { name: "formal shirts", link: "/" },
            { name: "formal shirts", link: "/" },
          ],
        },
      ],
    },
    {
      name: "Kid's",
      submenu: true,
      sublinks: [
        {
          Head: "Topwear",
          sublink: [
            { name: "T-shirt", link: "/" },
            { name: "Casual shirts", link: "/" },
            { name: "formal shirts", link: "/" },
            { name: "formal shirts", link: "/" },
            { name: "formal shirts", link: "/" },
          ],
        },
        {
          Head: "Bottomwear",
          sublink: [
            { name: "T-shirt", link: "/" },
            { name: "Casual shirts", link: "/" },
            { name: "formal shirts", link: "/" },
            { name: "formal shirts", link: "/" },
            { name: "formal shirts", link: "/" },
          ],
        },
        {
          Head: "innerwear",
          sublink: [
            { name: "T-shirt", link: "/" },
            { name: "Casual shirts", link: "/" },
            { name: "formal shirts", link: "/" },
            { name: "formal shirts", link: "/" },
            { name: "formal shirts", link: "/" },
          ],
        },
  
        {
          Head: "sleepwear",
          sublink: [
            { name: "T-shirt", link: "/" },
            { name: "Casual shirts", link: "/" },
            { name: "formal shirts", link: "/" },
            { name: "formal shirts", link: "/" },
            { name: "formal shirts", link: "/" },
          ],
        },
        {
          Head: "footwear",
          sublink: [
            { name: "T-shirt", link: "/" },
            { name: "Casual shirts", link: "/" },
            { name: "formal shirts", link: "/" },
            { name: "formal shirts", link: "/" },
            { name: "formal shirts", link: "/" },
          ],
        },
      ],
    },
  ];

const NavLinks = () => {
    const [heading, setHeading] = useState("");
    const [subHeading, setSubHeading] = useState("");
    return (
      <>
        {links.map((link,index) => (
          <div key={index}>
            <div className="px-3 text-left md:cursor-pointer group">
              <h1
                className="py-7 flex justify-between items-center md:pr-0 pr-5 group"
                onClick={() => {
                  heading !== link.name ? setHeading(link.name) : setHeading("");
                  setSubHeading("");
                }}
              >
                {link.name}
                <span className="text-xl md:hidden inline">
                  <ion-icon
                    name={`${
                      heading === link.name ? "chevron-up" : "chevron-down"
                    }`}
                  ></ion-icon>
                </span>
                <span className="text-xl md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                  <ion-icon name="chevron-down"></ion-icon>
                </span>
              </h1>
              {link.submenu && (
                <div>
                  <div className="absolute top-20 hidden group-hover:md:block hover:md:block">
                    <div className="py-3">
                      <div
                        className="w-4 h-4 left-3 absolute 
                      mt-1 bg-white rotate-45"
                      ></div>
                    </div>
                    <div className="bg-white p-5 grid grid-cols-3 gap-10">
                      {link.sublinks.map((mysublinks,index) => (
                        <div key={index}>
                          <h1 className="text-lg font-semibold">
                            {mysublinks.Head}
                          </h1>
                          {mysublinks.sublink.map((slink,index) => (
                            <li className="text-sm text-gray-600 my-2.5" key={index}>
                              <Link
                                to={slink.link}
                                className="hover:text-primary"
                              >
                                {slink.name}
                              </Link>
                            </li>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
            {/* Mobile menus */}
            <div
              className={`
              ${heading === link.name ? "md:hidden" : "hidden"}
            `}
            >
              {/* sublinks */}
              {link.sublinks.map((slinks,index) => (
                <div key={index}>
                  <div>
                    <h1
                      onClick={() =>
                        subHeading !== slinks.Head
                          ? setSubHeading(slinks.Head)
                          : setSubHeading("")
                      }
                      className="py-4 pl-7 font-semibold md:pr-0 pr-5 flex justify-between items-center "
                    >
                      {slinks.Head}
  
                      <span className="text-xl md:mt-1 md:ml-2 inline">
                        <ion-icon
                          name={`${
                            subHeading === slinks.Head
                              ? "chevron-up"
                              : "chevron-down"
                          }`}
                        ></ion-icon>
                      </span>
                    </h1>
                    <div
                      className={`${
                        subHeading === slinks.Head ? "md:hidden" : "hidden"
                      }`}
                    >
                      {slinks.sublink.map((slink,index) => (
                        <li className="py-3 pl-14" key={index}>
                          <Link to={slink.link}>{slink.name}</Link>
                        </li>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </>
    );
  };

  const Button = () => {
    return (
      <button className="bg-primary text-white  px-6 py-2 rounded-full">
        Get Started
      </button>
    );
  };


const NavMenu = () => {
  const [open, setOpen] = useState(false);


  

  return (
    <nav className="bg-white">
      <div className="flex items-center font-medium justify-around">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
         
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>
        <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins]">
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <NavLinks />
        </ul>
        <div className="md:block hidden">
          <Button />
        </div>
        {/* Mobile nav */}
        <ul
          className={`
        md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <NavLinks />
          <div className="py-5">
            <Button />
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default NavMenu;