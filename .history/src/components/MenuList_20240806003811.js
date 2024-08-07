import React from "react";

function MenuList() {
      return (
        <div class=" flex flex-col rounded-lg text-lg bg-my_black bg-clip-border w-32 md:w-48 lg:w-full border border-primary text-primary shadow-yellow glow-border">
        <div class="divide-y lg:divide-y-0 divide-primary flex flex-col lg:flex-row md:justify-around justify-center">
          <div class="menu-item text-center py-1 md:py-2 lg:py-0 lg:px-4">Home</div>
          <div class="menu-item text-center py-1 md:py-2">About</div>
          <div class="menu-item text-center py-1 md:py-2">Services</div>
          <div class="menu-item text-center py-1 md:py-2">Contact</div>
        </div>
      </div>
      );
}

export default MenuList;
