import React from "react";

function MenuList() {
      return (
            <div class="relative flex flex-col rounded-lg text-lg bg-my_black bg-clip-border top-[20rem] left-[15rem] w-32 border border-primary text-primary shadow-2xl">
                  <div class="divide-y divide-primary p-2 flex flex-col justify-center">
                        <div class="menu-item text-center">Home</div>
                        <div class="menu-item text-center">About</div>
                        <div class="menu-item text-center">Services</div>
                        <div class="menu-item text-center">Portfolio</div>
                        <div class="menu-item text-center">Blog</div>
                        <div class="menu-item text-center">Contact</div>
                  </div>
            </div>
      );
}

export default MenuList;
