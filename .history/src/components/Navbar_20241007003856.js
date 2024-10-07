import {
      Disclosure,
      DisclosureButton,
      DisclosurePanel,

} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "./Logo";
import { useDispatch, useSelector } from "react-redux";
import { SetShowMenu } from "../redux/userSlice";
import { Link } from "react-router-dom";

const navigation = [
      { name: "Home", href: "/", current: true },
      { name: "About", href: "/about", current: false },
      { name: "Services", href: "/services", current: false },
      { name: "Testimonials", href: "/testimonials", current: false },
      { name: "Gallery", href: "/gallery", current: false },
      { name: "Contact", href: "/contact", current: false }
];

function classNames(...classes) {
      return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
      return (
            <Disclosure as="nav" className="bg-my_black">
                  <div className="mx-auto max-w-7xl p-4 py-2  sm:p-4  lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                        <Link to='/'>
                                    <div className="flex gap-6 items-center">
                                          <Logo />
                                          <strong className="text-white text-xl md:text-2xl lg:text-4xl">
                                                Refugee Hope Bridge
                                          </strong>
                                    </div>
                              </Link>
                            <div className="relative inset-y-0 left-0 flex items-center lg:hidden">
                                    <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md text-my_white hover:bg-gray-700 hover:text-my_white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                          <span className="absolute -inset-0.5" />
                                          <span className="sr-only">
                                                Open main menu
                                          </span>
                                          <Bars3Icon
                                                aria-hidden="true"
                                                className="block h-12 w-12 group-data-[open]:hidden"
                                          />
                                          <XMarkIcon
                                                aria-hidden="true"
                                                className="hidden h-12 w-12 group-data-[open]:block"
                                          />
                                    </DisclosureButton>
                              </div>



                              <div className="hidden sm:ml-6 lg:block">
                                    <div className="flex space-x-4">
                                          {navigation.map((item) => (
                                                <a
                                                      key={item.name}
                                                      href={item.href}
                                                      aria-current={
                                                            item.current
                                                                  ? "page"
                                                                  : undefined
                                                      }
                                                      className={classNames(
                                                            item.current
                                                                  ? "bg-gray-900 text-white"
                                                                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                                                            "rounded-md px-3 py-2 text-sm font-medium"
                                                      )}
                                                >
                                                      {item.name}
                                                </a>
                                          ))}
                                    </div>
                              </div>


                        </div>
                  </div>

                  <DisclosurePanel className="lg:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                              {navigation.map((item) => (
                                    <DisclosureButton
                                          key={item.name}
                                          as="a"
                                          href={item.href}
                                          aria-current={
                                                item.current
                                                      ? "page"
                                                      : undefined
                                          }
                                          className={classNames(
                                                item.current
                                                      ? "bg-gray-900 text-white"
                                                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                                                "block rounded-md px-3 py-2 text-base font-medium"
                                          )}
                                    >
                                          {item.name}
                                    </DisclosureButton>
                              ))}
                        </div>
                  </DisclosurePanel>
            </Disclosure>
      );
}
