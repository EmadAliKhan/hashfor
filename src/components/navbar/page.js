import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon, WalletIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { LuWallet } from "react-icons/lu";
import logo from "../../../public/logo.png";

const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Swap", href: "#", current: false },
  { name: "Pool", href: "#", current: false },
  { name: "Farm", href: "#", current: false },
  { name: "Analytics", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <Disclosure as="nav" className="bg-black fixed top-0 w-full z-50">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Mobile menu button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="group inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <Bars3Icon
                className="block h-6 w-6 group-data-open:hidden"
                aria-hidden="true"
              />
              <XMarkIcon
                className="hidden h-6 w-6 group-data-open:block"
                aria-hidden="true"
              />
              <span className="sr-only">Open main menu</span>
            </DisclosureButton>
          </div>

          {/* Logo */}
          <div className="flex flex-1 items-center justify-center sm:justify-start">
            <div className="flex shrink-0 items-center">
              {/* <Image
                width={300}
                height={300}
                alt="Your Company"
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                className="h-8 w-auto"
              /> */}{" "}
              {/* <p className="border-black rounded-xl p-2 gold-gradient-btn">
                <LuWallet className="text-2xl text-black" />
              </p> */}
              <Image
                width={300}
                height={300}
                alt="Your Company"
                src={logo}
                className="h-12 w-auto"
              />
              <h5 className="gold-text font-bold text-2xl ps-3">Hashfor</h5>
            </div>
          </div>

          {/* Centered Navigation */}
          <div className="hidden sm:flex flex-1 justify-start">
            <div className="flex space-x-4 ">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  aria-current={item.current ? "page" : undefined}
                  className={classNames(
                    item.current
                      ? "gold-text"
                      : "text-gray-400 hover:gold-gradient-btn hover:text-white",
                    "rounded-md px-3 py-2 text-md font-medium"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop Connect Wallet button */}
          <div className="hidden sm:flex absolute inset-y-0 right-0 items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="flex items-center gap-2 rounded-full gold-gradient-btn px-4 py-2 text-black font-medium shadow hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <WalletIcon className="h-5 w-5" />
              Connect Wallet
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Panel */}
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? "page" : undefined}
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
          {/* Mobile "Connect Wallet" button */}
          <div className="mt-3 px-3">
            <button
              type="button"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 px-4 py-2 text-black font-medium shadow hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <WalletIcon className="h-5 w-5" />
              Connect Wallet
            </button>
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
