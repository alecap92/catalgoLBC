import Link from "next/link";
import React from "react";

const Cards = ({ productos }) => {
  return (
    <div>
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {productos?.map((producto) => (
          <Link
            href={`/detalleProducto?id=${producto.id}`}
            className="col"
            key={producto.id}
          >
            <div className="card h-100">
              <img
                src={producto.image}
                className="card-img-top"
                alt={producto.name}
              />
              <div className="card-body text-dark">
                <h5 className="card-title">{producto.name}</h5>
                <p className="card-text">{producto.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Cards;
