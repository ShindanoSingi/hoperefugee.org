import React from "react";
import { Link } from "react-router-dom";

function Logo() {
      return (
            <div className="h-10 w-10 sm:h-14 sm:w-14 md:h-20 md:w-20  rounded-full glow-border border-primary border flex items-center ">
                  <Link to="/">
                        <img src="/images/logo.png" alt="logo" />
                  </Link>
            </div>
      );
}

export default Logo;
