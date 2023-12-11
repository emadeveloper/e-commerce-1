import React from "react";

const Topbar = () => {
  return (
    <div className="flex justify-between px-6 py-1 text-sm font-semibold bg-gray-100 h-full">
      <div className="">
        <span className="mr-4 font-semibold cursor-pointer px-3">Venta Telefonica</span>
        <span className="mr-4 font-semibold cursor-pointer px-3">Venta Corporativa</span>
        <span className="mr-4 font-semibold cursor-pointer px-3">Sucursales</span>
        <span className="mr-4 font-semibold cursor-pointer px-3">info@ecommerce.com</span>
      </div>
      <div>
        <span>
            Prestamos en efectivo
        </span>
      </div>
    </div>
  );
};

export default Topbar;
