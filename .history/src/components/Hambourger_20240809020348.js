import React, { useState } from 'react'
import Hamburger from "hamburger-react";
import { SetShowMenu } from '../redux/userSlice';
import { useDispatch } from 'react-redux';

function Hambourger() {
    const [isOpen, setOpen] = useState(false);

    const dispatch = useDispatch();

  return (
    <div className="h-12 w-12 rounded-full bg-my_green shadow-yellow glow-border border-primary border flex items-center lg:hidden" onClick={()=>{dispatch(SetShowMenu(!showMenu))}}>
                                    <Hamburger
                                          toggled={isOpen}
                                          toggle={setOpen}
                                          size={32}
                                          direction="right"
                                          duration={0.8}
                                          distance="lg"
                                          color="#E6C068"

                                    />
                              </div>
  )
}

export default Hambourger
