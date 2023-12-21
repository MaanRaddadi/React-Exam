import React from "react";

function Categoreys() {
  return (
    <>
      <div className="w-full bg-[#195851] py-4 px-2 max-sm:hidden ">
        <ul className="text-white flex gap-5">
          <li className="hover:border-1 p-3 cursor-pointer">Todays Deals</li>
          <li className="hover:border-1 p-3 cursor-pointer">Registry</li>
          <li className="hover:border-1 p-3 cursor-pointer">Customer Service</li>
          <li className="hover:border-1 p-3 cursor-pointer">Gift Cards</li>
          <li className="hover:border-1 p-3 cursor-pointer">Sell</li>
        </ul>
      </div>
    </>
  );
}

export default Categoreys;
