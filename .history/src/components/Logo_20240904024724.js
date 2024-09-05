import React from "react";
import { Link } from "react-router-dom";

function Logo() {
      return (
            <div className="h-10 w-10 rounded-full shadow-yellow glow-border border-primary border flex items-center ">
                  <Link to="/">
                        <img src="/images/With_Background.png" alt="logo" />
                  </Link>
            </div>
      );
}

export default Logo;
