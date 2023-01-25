import Link from "next/link";
import React from "react";

const Card = ({ product }) => {
  return (
    <Link
      href={`/detalleProducto?id=${product.id}`}
      className="col"
      key={product.id}
    >
      <div className="card h-100">
        <img
          src={product.image}
          className="card-img-top"
          alt={product.name}
        />
        <div className="card-body text-dark">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">
            {product.description.length > 10
              ? product.description.split(/\s+/).slice(0, 20).join(" ") +
                "..."
              : product.description}
          </p>
        </div>
      </div>
    </Link>
  )
}

export default Card