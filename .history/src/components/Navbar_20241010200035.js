import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
  } from "@headlessui/react";
  import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
  import Logo from "./Logo";
  import { Link, useLocation } from "react-router-dom";
  import { navigation } from "../constants/Constants";

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  export default function Navbar() {
    const location = useLocation();

    return (
      <Disclosure as="nav" >
        <div className="mx-auto w-full p-4 py-2 sm:p-4 lg:px-8 bg-black">
          <div className="relative flex h-16 items-center justify-between">
            <Link to="/">
              <div className="flex gap-6 items-center">
                <Logo />
                <strong className="text-white text-xl md:text-2xl lg:text-4xl">
                  Refugee Hope Bridge
                </strong>
              </div>
            </Link>
            <div className="relative inset-y-0 text-white left-0 flex items-center lg:hidden">
              <DisclosureButton className="group relative inline-flex items-center text-white justify-center rounded-md text-my_white hover:bg-gray-700 hover:text-my_white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon
                  aria-hidden="true"
                  className="block  h-12 w-12 group-data-[open]:hidden"
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
                  <Link key={item.name} to={item.href}>
                    <span
                      aria-current={location.pathname === item.href ? "page" : undefined}
                      className={classNames(
                        location.pathname === item.href
                          ? "bg-gray-900 border text-white  text-lg"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "rounded-md px-3 py-2 text-lg font-medium"
                      )}
                    >
                      {item.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <DisclosurePanel className="bg-primary lg:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navigation.map((item) => (
              <DisclosureButton
                key={item.name}
                as={Link}
                to={item.href}
                aria-current={location.pathname === item.href ? "page" : undefined}
                className={classNames(
                  location.pathname === item.href
                    ? "bg-gray-700 text-white px-3 py-2 text-md font-medium"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white",
                  "block px-3 py-2 text-md font-medium"
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
