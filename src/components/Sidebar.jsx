import Link from "next/link";
import React from "react";
import styles from "@/styles/components/sidebar.module.css"

const Sidebar = () => {
  return (
    <div
      className={ styles.sidebar }
    >
      <Link href="/">
        <img src="/img/logo/logo.png" width={200} alt="" />
      </Link>
      <ul>
        <li>
          Food cupboard
          <ul>
            <li style={{ color: "#B9A46D" }}>
              <Link style={{ color: "white" }} href="/productos/coffee">
                Coffee
              </Link>
            </li>
            <li style={{ color: "#B9A46D" }}>
              <Link style={{ color: "white" }} href="/productos/oil">
                Oil
              </Link>
            </li>
            <li style={{ color: "#B9A46D" }}>
              <Link style={{ color: "white" }} href="/productos/flour">
                Flour
              </Link>
            </li>
            <li style={{ color: "#B9A46D" }}>
              <Link style={{ color: "white" }} href="/productos/meat">
                Meat
              </Link>
            </li>
            <li style={{ color: "#B9A46D" }}>
              <Link style={{ color: "white" }} href="/productos/cocoa">
                Chocolate & Cocoa
              </Link>
            </li>
            <li>
              <Link href="/productos/vegetables" style={{ color: "white" }}>
                Fruits & Vegetables
              </Link>
            </li>
            <li>
              <Link href="/productos/panela" style={{ color: "white" }}>
                Panela
              </Link>
            </li>
            <li style={{ color: "#B9A46D" }}>
              <Link style={{ color: "white" }} href="/productos/snacks">
                Snacks
              </Link>
            </li>
            <li style={{ color: "#B9A46D" }}>
              <Link style={{ color: "white" }} href="/productos/sauces">
                Sauces
              </Link>
            </li>
            <li style={{ color: "#B9A46D" }}>
              <Link style={{ color: "white" }} href="/productos/grains">
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
            <Link style={{ color: "white" }} href="/productos/flowers">
              Exotic Flowers
            </Link>
          </li>
          <li style={{ color: "#B9A46D" }}>
            <Link style={{ color: "white" }} href="/productos/rosesflowers">
              Rose Flowers
            </Link>
          </li>
        </ul>
      </ul>
      <ul>
        <li>Others</li>
        <ul>
          <li style={{ color: "#B9A46D" }}>
            <Link style={{ color: "white" }} href="/productos/horses">
              Horses
            </Link>
          </li>
          <li style={{ color: "#B9A46D" }}>
            <Link style={{ color: "white" }} href="/productos/flavoredsodas">
              Flavored Sodas
            </Link>
          </li>
          <li style={{ color: "#B9A46D" }}>
            <Link style={{ color: "white" }} href="/productos/beautyproducts">
              Beauty products
            </Link>
          </li>
          <li style={{ color: "#B9A46D" }}>
            <Link style={{ color: "white" }} href="/productos/coal">
              Coal
            </Link>
          </li>
        </ul>
      </ul>
      <ul>
        <li>Textiles</li>
        <ul>
          <li style={{ color: "#B9A46D" }}>
            <Link style={{ color: "white" }} href="/productos/swimsuits">
              Swimsuits
            </Link>
          </li>
          <li style={{ color: "#B9A46D" }}>
            <Link style={{ color: "white" }} href="/productos/womenshapewear">
              Womens Shapewear
            </Link>
          </li>
          <li style={{ color: "#B9A46D" }}>
            <Link style={{ color: "white" }} href="/productos/hats">
              Hats
            </Link>
          </li>
          <li style={{ color: "#B9A46D" }}>
            <Link style={{ color: "white" }} href="/productos/towels">
              Towels
            </Link>
          </li>
          <li style={{ color: "#B9A46D" }}>
            <Link style={{ color: "white" }} href="/productos/shirts">
              Shirts
            </Link>
          </li>
        </ul>
      </ul>
    </div>
  );
};

export default Sidebar;
