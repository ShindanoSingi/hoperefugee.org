import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { SetShowMenu } from "../redux/userSlice";

function MenuList() {
        const showMenu = useSelector((state) => state.userReducer.showMenu);

    const dispatch = useDispatch();


      return (

        !showMenu &&    <div class="flex absolute z-10 left-[15rem] top-[23rem] md:top-[6.2rem] lg:top-0 lg:p-2 lg:left-0 md:left-[36rem] flex-col rounded-lg text-lg bg-my_black w-32 md:w-44 lg:w-[30rem] border border-primary text-primary shadow-yellow glow-border">
                  <div class="divide-y lg:divide-y-0 divide-primary flex flex-col lg:flex-row md:justify-around justify-center">
                        <Link to='/' onClick={()=>dispatch(SetShowMenu(!showMenu))}>
                              <div class="menu-item text-center lg:rounded-tl-lg border-primary border lg:rounded-br-lg lg:w-24 py-1 lg:px-0 md:py-1">
                                    Home
                              </div>
                        </Link>

                        <Link to='/about'  onClick={()=>dispatch(SetShowMenu(!showMenu))}>
                              <div class="menu-item text-center lg:rounded-tl-lg border-primary border lg:rounded-br-lg lg:w-24 py-1 lg:px-0 md:py-1">
                                    About
                              </div>
                        </Link>
                        <Link to='/services'  onClick={()=>dispatch(SetShowMenu(!showMenu))}>
                              <div class="menu-item text-center lg:rounded-tl-lg border-primary border lg:rounded-br-lg lg:w-24 py-1 lg:px-0 md:py-1">
                                    Services
                              </div>
                        </Link>
                        <Link to='/contact'  onClick={()=>dispatch(SetShowMenu(!showMenu))}>
                              <div class="menu-item text-center lg:rounded-tl-lg border-primary border lg:rounded-br-lg lg:w-24 py-1 lg:px-0 md:py-1">
                                    Contact
                              </div>
                        </Link>
                  </div>
            </div>
      );
}

export default MenuList;
