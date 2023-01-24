import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <div
      style={{
        background: "#3E3D3D",
        position: "fixed",
        height: "100vh",
        padding: "20px 20px",
      }}
    >
      <Link href="/">
        <img src="/img/logo/logo.png" width={200} alt="" />
      </Link>
      <ul>
        <li>
          Food cupboard
          <ul>
            <li style={{ color: "#B9A46D" }}>
              <Link
                style={{ color: "white" }}
                href="/buscador?subCategory=coffee"
              >
                Coffee
              </Link>
            </li>
            <li style={{ color: "#B9A46D" }}>
              <Link style={{ color: "white" }} href="/buscador?subCategory=oil">
                Oil
              </Link>
            </li>
            <li style={{ color: "#B9A46D" }}>
              <Link
                style={{ color: "white" }}
                href="/buscador?subCategory=flour"
              >
                Flour
              </Link>
            </li>
            <li style={{ color: "#B9A46D" }}>
              <Link
                style={{ color: "white" }}
                href="/buscador?subCategory=meat"
              >
                Meat
              </Link>
            </li>
            <li style={{ color: "#B9A46D" }}>
              <Link
                style={{ color: "white" }}
                href="/buscador?subCategory=cocoa"
              >
                Chocolate & Cocoa
              </Link>
            </li>
            <li>
              <Link
                href="/buscador?subCategory=vegetables"
                style={{ color: "white" }}
              >
                Fruits & Vegetables
              </Link>
            </li>
            <li>
              <Link
                href="/buscador?subCategory=panela"
                style={{ color: "white" }}
              >
                Panela
              </Link>
            </li>
            <li style={{ color: "#B9A46D" }}>
              <Link
                style={{ color: "white" }}
                href="/buscador?subCategory=snacks"
              >
                Snacks
              </Link>
            </li>
            <li style={{ color: "#B9A46D" }}>
              <Link
                style={{ color: "white" }}
                href="/buscador?subCategory=sauces"
              >
                Sauces
              </Link>
            </li>
            <li style={{ color: "#B9A46D" }}>
              <Link
                style={{ color: "white" }}
                href="/buscador?subCategory=grains"
              >
                Grains
              </Link>
            </li>
          </ul>
        </li>
      </ul>
      <ul>
        <li>Flowers</li>
        <ul>
          <li style={{ color: "#B9A46D" }}>
            <Link
              style={{ color: "white" }}
              href="/buscador?subCategory=flowers"
            >
              Exotic Flowers
            </Link>
          </li>
          <li style={{ color: "#B9A46D" }}>
            <Link
              style={{ color: "white" }}
              href="/buscador?subCategory=RosesFlowers"
            >
              Rose Flowers
            </Link>
          </li>
        </ul>
      </ul>
      <ul>
        <li>Others</li>
        <ul>
          <li style={{ color: "#B9A46D" }}>
            <Link
              style={{ color: "white" }}
              href="/buscador?subCategory=horses"
            >
              Horses
            </Link>
          </li>
          <li style={{ color: "#B9A46D" }}>
            <Link
              style={{ color: "white" }}
              href="/buscador?subCategory=flavoredSodas"
            >
              Flavored Sodas
            </Link>
          </li>
          <li style={{ color: "#B9A46D" }}>
            <Link
              style={{ color: "white" }}
              href="/buscador?subCategory=beautyProducts"
            >
              Beauty products
            </Link>
          </li>
          <li style={{ color: "#B9A46D" }}>
            <Link style={{ color: "white" }} href="/buscador?subCategory=coal">
              Coal
            </Link>
          </li>
        </ul>
      </ul>
      <ul>
        <li>Textiles</li>
        <ul>
          <li style={{ color: "#B9A46D" }}>
            <Link
              style={{ color: "white" }}
              href="/buscador?subCategory=Swimsuits"
            >
              Swimsuits
            </Link>
          </li>
          <li style={{ color: "#B9A46D" }}>
            <Link
              style={{ color: "white" }}
              href="/buscador?subCategory=WomenShapewear"
            >
              Womens Shapewear
            </Link>
          </li>
          <li style={{ color: "#B9A46D" }}>
            <Link style={{ color: "white" }} href="/buscador?subCategory=hats">
              Hats
            </Link>
          </li>
          <li style={{ color: "#B9A46D" }}>
            <Link
              style={{ color: "white" }}
              href="/buscador?subCategory=towels"
            >
              Towels
            </Link>
          </li>
          <li style={{ color: "#B9A46D" }}>
            <Link
              style={{ color: "white" }}
              href="/buscador?subCategory=shirts"
            >
              Shirts
            </Link>
          </li>
        </ul>
      </ul>
    </div>
  );
};

export default Sidebar;
