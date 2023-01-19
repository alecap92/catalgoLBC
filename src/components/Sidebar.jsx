import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <div
      style={{ background: "#3E3D3D", height: "100vh", padding: "20px 20px" }}
    >
      <img src="/img/logo/logo.png" style={{ width: "100%" }} alt="" />
      <ul>
        <li>Alimentos y bebidas</li>
        <ul>
          <li style={{ color: "#B9A46D" }}>
            <Link href="/?subCategory=cafe">Cafe</Link>
          </li>
          <li style={{ color: "#B9A46D" }}>
            <Link href="/?subCategory=banano">Banano</Link>
          </li>
          <li style={{ color: "#B9A46D" }}>
            <Link href="/?subCategory=fresas">Fresas</Link>
          </li>
        </ul>
      </ul>
    </div>
  );
};

export default Sidebar;
