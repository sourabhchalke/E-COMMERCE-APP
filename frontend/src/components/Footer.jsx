import React from "react";
import {assets} from '../frontend_assets/assets';

function Footer() {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-20 md:mt-36">

        <div>
            <img src={assets.logo1} alt="" className="w-32 mb-5" />
            <p className="w-full  lg:w-2/3 text-gray-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis quasi libero reprehenderit ad modi officia, repellendus id sapiente possimus voluptates, adipisci autem magni distinctio, perspiciatis esse quo reiciendis est? Ducimus?</p>
        </div>

        <div>
            <p className="text-xl font-medium mb-5">Company</p>
            <ul className="flex flex-col gap-1 text-gray-600">
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>

        <div>
            <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
            <ul className="flex flex-col text-gray-600">
                <li>+91-8984347849</li>
                <li>contact12@gmail.com</li>
            </ul>
        </div>

        

      </div>
      <div className="text-center my-4">
            <hr />
            <p className="my-4 font-medium ">CopyRight 2025 SourabhChalke - All Right Reserved</p>
        </div>
    </div>
  );
}

export default Footer;
