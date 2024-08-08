import React from "react";
import { Link } from "react-router-dom";

function MenuList() {
      return (
            <div class=" flex flex-col rounded-lg text-lg bg-my_black h-[40%] w-32 md:w-48 lg:w-full border border-primary text-primary shadow-yellow glow-border">
                  <div class="divide-y lg:divide-y-0 divide-primary flex flex-col lg:flex-row md:justify-around lg:p-1 justify-center">
                        <Link to='/'>
                              <div class="menu-item text-center lg:rounded-tl-lg border-primary border lg:rounded-br-lg lg:w-24 py-1 lg:px-0 md:py-2">
                                    Home
                              </div>
                        </Link>

                        <Link to='/about'>
                              <div class="menu-item text-center lg:rounded-tl-lg border-primary border lg:rounded-br-lg lg:w-24 py-1 lg:px-0 md:py-2">
                                    About
                              </div>
                        </Link>
                        <Link to='/services'>
                              <div class="menu-item text-center lg:rounded-tl-lg border-primary border lg:rounded-br-lg lg:w-24 py-1 lg:px-0 md:py-2">
                                    Services
                              </div>
                        </Link>
                        <Link to='/contact'>
                              <div class="menu-item text-center lg:rounded-tl-lg border-primary border lg:rounded-br-lg lg:w-24 py-1 lg:px-0 md:py-2">
                                    Contact
                              </div>
                        </Link>
                  </div>
            </div>
      );
}

export default MenuList;
