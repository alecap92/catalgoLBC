import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <div
      style={{
        background: "#3E3D3D",
        position: "fixed",
        height: "100%",
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
                href="/buscador?subCategory=cocoa"
              >
                Cocoa
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

            <li style={{ color: "#B9A46D" }}>
              <Link
                style={{ color: "white" }}
                href="/buscador?subCategory=snacks"
              >
                Snacks
              </Link>
            </li>
          </ul>
        </li>
      </ul>

      <ul>
        <li>Others</li>
        <ul>
          <li style={{ color: "#B9A46D" }}>
            <Link
              style={{ color: "white" }}
              href="/buscador?subCategory=horseSaddles"
            >
              Horse Saddles
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
        </ul>
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
              RosesFlowers
            </Link>
          </li>
        </ul>
      </ul>
    </div>
  );
};

export default Sidebar;
