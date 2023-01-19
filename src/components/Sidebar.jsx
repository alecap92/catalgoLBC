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
        <li>Alimentos y bebidas</li>
        <ul>
          <li style={{ color: "#B9A46D" }}>
            <Link
              style={{ color: "white" }}
              href="/buscador?subCategory=coffee"
            >
              Cafe
            </Link>
          </li>
          <li style={{ color: "#B9A46D" }}>
            <Link
              style={{ color: "white" }}
              href="/buscador?subCategory=plantain"
            >
              Banano
            </Link>
          </li>
          <li style={{ color: "#B9A46D" }}>
            <Link
              style={{ color: "white" }}
              href="/buscador?subCategory=fresas"
            >
              Aguacate
            </Link>
          </li>
          <li style={{ color: "#B9A46D" }}>
            <Link style={{ color: "white" }} href="/?subCategory=fresas">
              Curuba
            </Link>
          </li>
          <li style={{ color: "#B9A46D" }}>
            <Link style={{ color: "white" }} href="/?subCategory=fresas">
              Feijoa
            </Link>
          </li>
          <li style={{ color: "#B9A46D" }}>
            <Link style={{ color: "white" }} href="/?subCategory=fresas">
              Granadilla
            </Link>
          </li>
        </ul>
      </ul>
    </div>
  );
};

export default Sidebar;
