import React, { useState } from "react";
import { Link } from "react-router-dom";

function MenuList() {
      const [show, SetShow] = useState(true);

      return (

            show ? <div class=" flex left-[13.5rem] top-[20rem] md:top-[25rem] lg:top-0 lg:p-4 lg:left-0 md:left-[33rem] flex-col rounded-lg text-lg bg-my_black w-32 md:w-44 lg:w-full border border-primary text-primary shadow-yellow glow-border">
                  <div class="divide-y lg:divide-y-0 divide-primary flex flex-col lg:flex-row md:justify-around justify-center">
                        <Link to='/'
                        onClick={() => SetShow(!show)}
                        >
                              <div class="menu-item text-center lg:rounded-tl-lg border-primary border lg:rounded-br-lg lg:w-24 lg:px-0 md:py-1">
                                    Home
                              </div>
                        </Link>

                        <Link to='/about'
                        onClick={() => SetShow(!show)}
                        >
                              <div class="menu-item text-center lg:rounded-tl-lg border-primary border lg:rounded-br-lg lg:w-24 py-1 lg:px-0 md:py-1">
                                    About
                              </div>
                        </Link>
                        <Link to='/services'
                        onClick={() => SetShow(!show)}
                        >
                              <div class="menu-item text-center lg:rounded-tl-lg border-primary border lg:rounded-br-lg lg:w-24 py-1 lg:px-0 md:py-1">
                                    Services
                              </div>
                        </Link>
                        <Link to='/contact'
                        onClick={() => SetShow(!show)}
                        >
                              <div class="menu-item text-center lg:rounded-tl-lg border-primary border lg:rounded-br-lg lg:w-24 py-1 lg:px-0 md:py-1">
                                    Contact
                              </div>
                        </Link>
                  </div>
            </div> : ""
      );
}

export default MenuList;
