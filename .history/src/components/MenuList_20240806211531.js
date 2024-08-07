import React from "react";

function MenuList() {
      return (
        <div class=" flex flex-col rounded-lg text-lg bg-my_black bg-clip-border w-32 md:w-48 lg:w-full border border-primary text-primary shadow-yellow glow-border">
        <div class="divide-y lg:divide-y-0 divide-primary flex flex-col lg:flex-row md:justify-around lg:px-6 lg:m-1 justify-center">
          <div class="menu-item text-center lg:rounded-tl-lg border-primary border lg:rounded-br-lg lg:w-24 py-1 lg:px-0 md:py-2">Home</div>
          <div class="menu-item text-center lg:rounded-tl-lg border-primary border lg:rounded-br-lg lg:w-24 py-1 lg:px-0 md:py-2">About</div>
          <div class="menu-item text-center lg:rounded-tl-lg border-primary border lg:rounded-br-lg lg:w-24 py-1 lg:px-0 md:py-2">Services</div>
          <div class="menu-item text-center lg:rounded-tl-lg border-primary border lg:rounded-br-lg lg:w-24 py-1 lg:px-0 md:py-2">Contact</div>
        </div>
      </div>
      );
}

export default MenuList;
