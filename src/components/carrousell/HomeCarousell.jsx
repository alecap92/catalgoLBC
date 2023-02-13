import React from "react";

import { ContenedorCarrouselll, ContenedorContCarrousell, Carousel, CarouselArrow } from "./CarrouselStyles.js";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Link from "next/link.js";

const HomeCarousell = ({ forms, userInfo }) => {
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
          <Link href="/productos/bakery" style={{ margin: "0px 20px" }}>
            <img src="\img\Inicio\1.png" alt="" width={300} height={160} />
          </Link>
          <Link href="/productos/bakery" style={{ margin: "0px 20px" }}>
            <img src="\img\Inicio\2.png" alt="" width={300} height={160} />
          </Link>
          <Link href="/productos/bakery" style={{ margin: "0px 20px" }}>
            <img src="\img\Inicio\3.png" alt="" width={300} height={160} />
          </Link>
          <Link href="/productos/bakery" style={{ margin: "0px 20px" }}>
            <img src="\img\Inicio\4.png" alt="" width={300} height={160} />
          </Link>
          <Link href="/productos/bakery" style={{ margin: "0px 20px" }}>
            <img src="\img\Inicio\5.png" alt="" width={300} height={160} />
          </Link>
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
