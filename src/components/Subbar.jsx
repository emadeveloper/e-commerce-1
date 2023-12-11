import React from "react";

const Subbar = () => {
  return (
    <div className="">
      <ul className="w-full flex justify-center bg-white py-2 text-gray-600 text-sm">
        <li className="px-4">
          <a className="hover:text-red-600" href="">
            Celulares
          </a>
        </li>
        <li className="px-2">
          <a className="hover:text-red-600" href="">TV & Video</a>
        </li>
        <li className="px-2">
          <a className="hover:text-red-600" href="">Climatización</a>
        </li>
        <li className="px-2">
          <a className="hover:text-red-600" href="">Electrodomésticos</a>
        </li>
        <li className="px-2">
          <a className="hover:text-red-600" href="">Tecnología</a>
        </li>
        <li className="px-2">
          <a className="hover:text-red-600" href="">Salud, belleza & Fitness</a>
        </li>
        <li className="px-2">
          <a className="hover:text-red-600" href="">Casa & Jardín</a>
        </li>
        <li className="px-2">
          <a className="hover:text-red-600" href="">Rodados</a>
        </li>
        <li className="px-2">
          <a className="text-red-600" href="">Ofertas</a>
        </li>
      </ul>
    </div>
  );
};

export default Subbar;
