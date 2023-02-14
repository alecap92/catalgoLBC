import React from "react";

import { ContenedorCarrouselll, ContenedorContCarrousell, Carousel, CarouselArrow } from "./CarrouselStyles.js";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Link from "next/link.js";

const HomeCarousell = ({ forms, userInfo }) => {
  const products = [
    {
      name: "bakery",
      img: "/img/imgHome/1.png",
    },
    {
      name: "cocoa",
      img: "/img/imgHome/2.png",
    },
    {
      name: "coffee",
      img: "/img/imgHome/3.png",
    },
    {
      name: "confitery",
      img: "/img/imgHome/4.png",
    },
    {
      name: "drinks",
      img: "/img/imgHome/5.png",
    },
    {
      name: "energySnacks",
      img: "/img/imgHome/6.png",
    },
    {
      name: "flourMixes",
      img: "/img/imgHome/7.png",
    },
    {
      name: "freshFruits",
      img: "/img/imgHome/8.png",
    },
    {
      name: "HoneyJamAndSpreads",
      img: "/img/imgHome/9.png",
    },
    {
      name: "MeatAndLivestock",
      img: "/img/imgHome/10.png",
    },
    {
      name: "OilVinegar",
      img: "/img/imgHome/11.png",
    },
    {
      name: "SaucesAndDressings",
      img: "/img/imgHome/12.png",
    },
    {
      name: "superfoods",
      img: "/img/imgHome/13.png",
    },
    {
      name: "SugarCaneTea",
      img: "/img/imgHome/14.png",
    },
    {
      name: "flowers",
      img: "/img/imgHome/15.png",
    },
    {
      name: "rosesflowers",
      img: "/img/imgHome/16.png",
    },
    {
      name: "BathAndShower",
      img: "/img/imgHome/17.png",
    },
    {
      name: "bodyCare",
      img: "/img/imgHome/18.png",
    },
    {
      name: "facialCare",
      img: "/img/imgHome/19.png",
    },
    {
      name: "hairCare",
      img: "/img/imgHome/20.png",
    },
    {
      name: "aromaHome",
      img: "/img/imgHome/21.png",
    },
    {
      name: "horseSaddles",
      img: "/img/imgHome/22.png",
    },
    {
      name: "feedstuff",
      img: "/img/imgHome/24.png",
    },
    {
      name: "clothing",
      img: "/img/imgHome/25.png",
    },
    {
      name: "compressionGirdle",
      img: "/img/imgHome/26.png",
    },
    {
      name: "hats",
      img: "/img/imgHome/27.png",
    },
    {
      name: "Jewelery",
      img: "/img/imgHome/28.png",
    },
    {
      name: "swimsuits",
      img: "/img/imgHome/29.png",
    },
    {
      name: "towels",
      img: "/img/imgHome/30.png",
    },
  ];
  let scrollAmount = 0;

  const sideScroll = (element, speed, distance, step) => {
    const slideTimer = setInterval(() => {
      element.scrollLeft += step;
      scrollAmount += Math.abs(step);
      if (scrollAmount >= distance) {
        clearInterval(slideTimer);
      }
    }, speed);
  };

  return (
    <Carousel>
      <ContenedorContCarrousell className="contenedorContCarrousell">
        <CarouselArrow
          onClick={() => {
            sideScroll(document.getElementById("contenedorCarrouselll"), 25, 100, -200);
          }}
        >
          <FaArrowLeft size={"35px"} color={"white"} />
        </CarouselArrow>

        <ContenedorCarrouselll className="contenedorCarrouselll" id="contenedorCarrouselll">
          {products.map((item, index) => (
            <Link key={index} href={"/productos/" + item.name} style={{ margin: "0px 20px" }}>
              <img src={item.img} alt={item.name} width={300} height={160} />
            </Link>
          ))}
        </ContenedorCarrouselll>

        <CarouselArrow
          onClick={() => {
            sideScroll(document.getElementById("contenedorCarrouselll"), 25, 100, 200);
          }}
          datatype="right"
        >
          <FaArrowRight size={"35px"} color={"white"}></FaArrowRight>
        </CarouselArrow>
      </ContenedorContCarrousell>
    </Carousel>
  );
};

export default HomeCarousell;
