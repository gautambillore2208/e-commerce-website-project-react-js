import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Loading from "./Loading"
import { Link } from "react-router-dom";

const TestimonialData = [
  {
    id: 1,
    name: "Victor",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Satya Nadella",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Virat Kohli",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 5,
    name: "Sachin Tendulkar",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/103/103",
  },
];

const RelatedProduct = () => {
  var settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
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
    fetch('https://fakestoreapi.com/products?limit=5')
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
    <div className="py-10 mb-10">
      <div className="container">
        {/* header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-lg text-primary">
            What our customers are saying
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            RelatedProduct
          </h1>
          <p data-aos="fade-up" className="text-lg text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
            asperiores modi Sit asperiores modi
          </p>
        </div>

        {/* Testimonial cards */}
        <div data-aos="zoom-in ">
          <Slider {...settings} className="flex space-x-4">
            {product.map((item,index) => (
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

                 <button type="button" className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900" onClick={() => hanleAdd(item)}>Add to Cart</button>
             </div>

         </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default RelatedProduct;
