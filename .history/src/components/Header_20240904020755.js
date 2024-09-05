import React from "react";
import { useSpring, animated } from "@react-spring/web";
import Logo from "./Logo";
import Hambourger from "./Hambourger";
import Menu from "./Menu";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";



const Header = () => {
      return (
            <div className="bg-my_black p-4 h-20 mb-6 shadow-yellow border border-primary lg:h-24 flex items-center justify-between px-6">
                <Navbar />
                {/* <Link to='/'>
                <div className="flex items-center gap-6">
                    <Logo />
                    <strong className="text-primary text-2xl md:text-4xl">Comfy Taxi</strong>
                </div>
                </Link>


                  <div className="lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>
                  </div>
                  <div className="hidden lg:block">
                        <Menu />
                  </div> */}
            </div>
      );
};

export default Header;
