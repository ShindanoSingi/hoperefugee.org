import React from "react";

function MenuList() {
      return (
            <div class="relative flex flex-col rounded-lg text-lg bg-my_black bg-clip-border top-[20rem] left-[15rem] w-32 border border-primary text-primary shadow-yellow">
                  <div class="divide-y divide-primary flex flex-col justify-center">
                        <div class="menu-item text-center py-2">Home</div>
                        <div class="menu-item text-center py-2">About</div>
                        <div class="menu-item text-center py-2">Services</div>
                        <div class="menu-item text-center py-2">Portfolio</div>
                        <div class="menu-item text-center py-2">Blog</div>
                        <div class="menu-item text-center py-2">Contact</div>
                  </div>
            </div>
      );
}

export default MenuList;
