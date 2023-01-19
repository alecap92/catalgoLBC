import React from "react";

const Sidebar = () => {
  return (
    <div
      style={{ background: "#3E3D3D", height: "100vh", padding: "20px 20px" }}
    >
      <img src="/img/logo/logo.png" width={250} alt="" />
      <ul>
        <li>Alimentos y bebidas</li>
        <ul>
          <li>Cafe</li>
          <li>Frutas</li>
          <li>Banano</li>
        </ul>
      </ul>
    </div>
  );
};

export default Sidebar;
