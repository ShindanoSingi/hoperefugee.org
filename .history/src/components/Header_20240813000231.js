import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import Logo from "./Logo";
import Hambourger from "./Hambourger";
import Menu from "./Menu";

const Header = () => {

  return (
    <div className="bg-my_black p-4 h-20 mb-6 shadow-yellow border border-primary lg:h-24 flex items-center justify-between px-6">
                              <Logo />
                              <div className="lg:hidden"><Hambourger /></div>
                                <div className="hidden lg:block"><Menu /></div>

                        </div>
  );
};

export default Header;
