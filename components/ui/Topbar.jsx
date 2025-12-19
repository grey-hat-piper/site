import { RiPhoneFill, RiMailFill } from "react-icons/ri";
import React from 'react'
import Socials from "./Socials";

const Topbar = () => {
  return (
    <section id='home' className="py-4 lg:h-16 xl:py-0 bg-gradient-to-t 
    from-[#727271] to-[#2a2a29] flex items-center">

      <div className="container mx-auto">
        {/* phone, mail & socials */}
      <div className="flex flex-col lg:flex-row items-center 
      justify-between gap-6">
        <div className="hidden xl:flex items-center gap-8">

          {/* phone */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary text-white flex
            items-center justify-center">
              <RiPhoneFill />
            </div>
            <div className="items-center justify-center">
            <p className="font-medium text-primary">+233 24 231 4900</p>
            <p className="font-medium text-primary">+233 24 887 6300</p>
            </div>
          </div>
          {/* mail */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary text-white flex
            items-center justify-center">
              <RiMailFill />
            </div>
            <p className="font-medium text-primary">mercysons@gmail.com</p>
          </div>


        </div>
        {/* socials */}
        <Socials containerStyles="flex items-center gap-8 mx-auto xl:mx-0" 
        iconStyles="text-primary"/>
      </div>  
      </div>
    </section>
  );
};

export default Topbar;
