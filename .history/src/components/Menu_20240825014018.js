import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Menu() {
        const showMenu = useSelector((state) => state.userReducer.showMenu);

        console.log(showMenu);


      return (

            <div class="flex  left-[13.5rem] top-[10rem] md:top-[25rem] lg:top-0 lg:p-2 lg:left-0 md:left-[33rem] flex-col rounded-lg text-lg bg-my_black w-32 md:w-44 lg:w-[30rem] border border-primary text-primary shadow-yellow glow-border">
                  <div class="divide-y lg:divide-y-0 divide-primary flex flex-col lg:flex-row md:justify-around justify-center">
                        <Link to='/'>
                              <div class="menu-item text-center lg:rounded-tl-lg border-primary border lg:rounded-br-lg lg:w-24 py-1 lg:px-0 md:py-1">
                                    Home
                              </div>
                        </Link>

                        <Link to='/about'>
                              <div class="menu-item text-center lg:rounded-tl-lg border-primary border lg:rounded-br-lg lg:w-24 py-1 lg:px-0 md:py-1">
                                    About Us
                              </div>
                        </Link>
                        <Link to='/services'>
                              <div class="menu-item text-center lg:rounded-tl-lg border-primary border lg:rounded-br-lg lg:w-24 py-1 lg:px-0 md:py-1">
                                    Services
                              </div>
                        </Link>
                        <Link to='/contact'>
                              <div class="menu-item text-center lg:rounded-tl-lg border-primary border lg:rounded-br-lg lg:w-24 py-1 lg:px-0 md:py-1">
                                    Contact
                              </div>
                        </Link>
                  </div>
            </div>
      );
}

export default Menu;
