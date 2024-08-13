import React from "react";

function Footer() {
      return (
            <footer className="bg-my_black border-t-4 border-primary border- border text-my_white py-6">
                  <div className="container mx-auto text-center">
                        <p className="text-my_white">
                              &copy; 2024 Shindano SoftCom | All rights reserved.
                        </p>
                        <div className="mt-4 flex justify-center space-x-4">
                              <a href="#" className="hover:text-primary">
                                    Facebook
                              </a>
                              <a href="#" className="hover:text-primary">
                                    Instagram
                              </a>
                              <a href="#" className="hover:text-primary">
                                    Twitter
                              </a>
                        </div>
                  </div>
            </footer>
      );
}

export default Footer;
