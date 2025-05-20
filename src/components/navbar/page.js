"use client";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { CoinbaseWalletSDK } from "@coinbase/wallet-sdk";
import logo from "../../../public/logo.png";
import { AnimatePresence, motion } from "framer-motion";
import { FiAlertCircle } from "react-icons/fi";

const providerOptions = {
  coinbasewallet: {
    package: CoinbaseWalletSDK,
    options: {
      appName: "Web3Modal Demo",
      rpc: "https://rpc.testnet.fantom.network",
    },
  },
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      rpc: {
        4002: "https://rpc.testnet.fantom.network",
      },
      bridge: "https://bridge.walletconnect.org",
      qrcode: true,
    },
  },
};

const navigation = [
  { name: "Home", href: "#", current: true },
  { name: "Packages", href: "#", current: false },
  { name: "Rector Message", href: "#", current: false },
  { name: "Compensation Plan", href: "#", current: false },
  { name: "Vision", href: "#", current: false },
  { name: "Contact Us", href: "#", current: false },
  // { name: "About Us", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [account, setAccount] = useState(null);
  const web3ModalRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      web3ModalRef.current = new Web3Modal({
        cacheProvider: false,
        providerOptions,
        themeVariables: {
          "--w3m-color-mix": "#00BB7F",
          "--w3m-color-mix-strength": 40,
        },
      });
    }
  }, []);

  const connectWallet = async () => {
    try {
      const instance = await web3ModalRef.current.connect();
      const provider = new ethers.providers.Web3Provider(instance);
      const signer = provider.getSigner();
      const address = await signer.getAddress();

      setAccount(address);
    } catch (error) {
      console.error("Wallet connection failed:", error);
    }
  };

  const disconnectWallet = async () => {
    try {
      await web3ModalRef.current.clearCachedProvider();
      setAccount(null);
    } catch (error) {
      console.error("Wallet disconnection failed:", error);
    }
  };

  // modal
  const [isOpen, setIsOpen] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const SpringModal = ({ isOpen, setIsOpen }) => {
    return (
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0, rotate: "12.5deg" }}
              animate={{ scale: 1, rotate: "0deg" }}
              exit={{ scale: 0, rotate: "0deg" }}
              onClick={(e) => e.stopPropagation()}
              className="bg-black text-white p-6 border border-yellow-400 rounded-xl w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
            >
              {isSignUp ? (
                <div className="relative z-10">
                  <h1 className="text-3xl font-bold mb-4 text-center gold-text">
                    Create Account
                  </h1>
                  <form className="space-y-4">
                    {/* 1st line */}
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="w-full md:w-1/2">
                        <label className="block text-sm font-medium">
                          Referral Code
                        </label>
                        <input
                          type="text"
                          placeholder="Enter Referral Code"
                          className="w-full mt-1 p-2 rounded bg-white/10 text-white placeholder-white/50 outline-none"
                        />
                      </div>
                      <div className="w-full md:w-1/2">
                        <label className="block text-sm font-medium">
                          Name
                        </label>
                        <input
                          type="text"
                          placeholder="Enter FullName"
                          className="w-full mt-1 p-2 rounded bg-white/10 text-white placeholder-white/50 outline-none"
                        />
                      </div>
                    </div>
                    {/* 2nd line */}
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="w-full md:w-1/2">
                        <label className="block text-sm font-medium">
                          Email
                        </label>
                        <input
                          type="email"
                          placeholder="Enter email"
                          className="w-full mt-1 p-2 rounded bg-white/10 text-white placeholder-white/50 outline-none"
                        />
                      </div>
                      <div className="w-full md:w-1/2">
                        <label className="block text-sm font-medium">
                          Contact Number
                        </label>
                        <input
                          type="text"
                          placeholder="Enter Number"
                          className="w-full mt-1 p-2 rounded bg-white/10 text-white placeholder-white/50 outline-none"
                        />
                      </div>
                    </div>
                    {/* 3rd line */}

                    <div className="w-full ">
                      <label className="block text-sm font-medium">
                        Wallet Address{" "}
                      </label>
                      <input
                        type="text"
                        placeholder="Enter  wallet address"
                        className="w-full mt-1 p-2 rounded bg-white/10 text-white placeholder-white/50 outline-none"
                      />
                    </div>
                    {/* 4th Line */}
                    <div className="w-full ">
                      <label className="block text-sm font-medium">
                        Create Password
                      </label>
                      <input
                        type="password"
                        placeholder="Enter Your Password"
                        className="w-full mt-1 p-2 rounded bg-white/10 text-white placeholder-white/50 outline-none"
                      />
                    </div>
                    {/* 5th Line */}
                    <div className="w-full ">
                      <label className="block text-sm font-medium">
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        placeholder="Enter Confirm Password"
                        className="w-full mt-1 p-2 rounded bg-white/10 text-white placeholder-white/50 outline-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full gold-gradient-btn font-bold text-black  py-2 rounded hover:bg-indigo-100 transition cursor-pointer"
                    >
                      Send OTP to Email
                    </button>

                    <div className="text-white text-center">
                      Already have an account?{" "}
                      <button
                        onClick={() => setIsSignUp(false)}
                        className="gold-text font-bold hover:underline cursor-pointer"
                      >
                        Login
                      </button>
                    </div>
                  </form>
                </div>
              ) : (
                <div className="relative z-10">
                  <h1 className="text-3xl font-bold mb-4 text-center gold-text">
                    Login
                  </h1>
                  <form className="space-y-4">
                    {/* 3rd line */}

                    <div className="w-full ">
                      <label className="block text-sm font-medium">
                        User ID{" "}
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your User ID"
                        className="w-full mt-1 p-2 rounded bg-white/10 text-white placeholder-white/50 outline-none"
                      />
                    </div>
                    {/* 4th Line */}
                    <div className="w-full ">
                      <label className="block text-sm font-medium">
                        Password
                      </label>
                      <input
                        type="password"
                        placeholder="Enter Your Password"
                        className="w-full mt-1 p-2 rounded bg-white/10 text-white placeholder-white/50 outline-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full gold-gradient-btn font-bold text-black  py-2 rounded hover:bg-indigo-100 transition cursor-pointer"
                    >
                      Login
                    </button>

                    <div className="text-white text-center">
                      Don't have an account?{" "}
                      <button
                        onClick={() => setIsSignUp(true)}
                        className="gold-text font-bold hover:underline cursor-pointer"
                      >
                        SignUp
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  };

  // return (
  //   <Disclosure as="nav" className="bg-black fixed top-0 w-full z-50">
  //     {({ open }) => (
  //       <>
  //         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
  //           <div className="relative flex h-16 items-center justify-between">
  //             {/* Mobile Menu Button */}
  //             <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
  //               <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
  //                 {open ? (
  //                   <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
  //                 ) : (
  //                   <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
  //                 )}
  //               </DisclosureButton>
  //             </div>

  //             {/* Logo */}
  //             <div className="flex flex-1 justify-center sm:justify-start items-center">
  //               <Image
  //                 width={40}
  //                 height={40}
  //                 alt="Logo"
  //                 src={logo}
  //                 className="h-10 w-auto"
  //               />
  //               <h5 className="gold-text font-bold text-2xl ps-2 hidden sm:block">
  //                 Hashfor
  //               </h5>
  //             </div>

  //             {/* Center Navigation */}
  //             <div className="hidden sm:flex absolute inset-x-0 justify-center">
  //               <div className="flex space-x-2">
  //                 {navigation.map((item) => (
  //                   <Link
  //                     key={item.name}
  //                     href={item.href}
  //                     className={classNames(
  //                       item.current
  //                         ? "gold-text"
  //                         : "text-gray-400 hover:gold-gradient-btn hover:text-white",
  //                       "rounded-md px-3 py-2 text-md font-medium"
  //                     )}
  //                     aria-current={item.current ? "page" : undefined}
  //                   >
  //                     {item.name}
  //                   </Link>
  //                 ))}
  //               </div>
  //             </div>

  //             {/* Wallet Button */}
  //             <div className="hidden sm:flex absolute inset-y-0 right-0 items-center pr-4 cursor-pointer">
  //               <button
  //                 // onClick={disconnectWallet}
  //                 onClick={() => setIsOpen(true)}
  //                 className="flex items-center gap-2 rounded-full gold-gradient-btn px-4 py-2 text-black font-medium shadow hover:opacity-90 me-2"
  //               >
  //                 Login / SignUp
  //               </button>
  //               <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} />
  //               {account ? (
  //                 <button
  //                   onClick={disconnectWallet}
  //                   className="flex items-center gap-2 rounded-full gold-gradient-btn px-4 py-2 text-black font-medium shadow hover:opacity-90"
  //                 >
  //                   Disconnect: {account.slice(0, 3)}...{account.slice(-2)}
  //                 </button>
  //               ) : (
  //                 <button
  //                   onClick={connectWallet}
  //                   className="flex items-center gap-2 rounded-full gold-gradient-btn px-4 py-2 text-black font-medium shadow hover:opacity-90"
  //                 >
  //                   Connect Wallet
  //                 </button>
  //               )}
  //             </div>
  //           </div>
  //         </div>

  //         {/* Mobile Panel */}
  //         <DisclosurePanel className="sm:hidden px-4 pt-2 pb-3 space-y-1">
  //           {navigation.map((item) => (
  //             <DisclosureButton
  //               key={item.name}
  //               as="a"
  //               href={item.href}
  //               className={classNames(
  //                 item.current
  //                   ? "bg-gray-900 text-white"
  //                   : "text-gray-300 hover:bg-gray-700 hover:text-white",
  //                 "block rounded-md px-3 py-2 text-base font-medium"
  //               )}
  //               aria-current={item.current ? "page" : undefined}
  //             >
  //               {item.name}
  //             </DisclosureButton>
  //           ))}
  //           <div className="mt-4">
  //             {account ? (
  //               <button
  //                 onClick={disconnectWallet}
  //                 className="w-full flex items-center justify-center gap-2 rounded-full gold-gradient-btn px-4 py-2 text-black font-medium shadow hover:opacity-90"
  //               >
  //                 Disconnect: {account.slice(0, 3)}...{account.slice(-2)}
  //               </button>
  //             ) : (
  //               <button
  //                 onClick={connectWallet}
  //                 className="w-full flex items-center justify-center gap-2 rounded-full gold-gradient-btn px-4 py-2 text-black font-medium shadow hover:opacity-90"
  //               >
  //                 Connect Wallet
  //               </button>
  //             )}
  //           </div>
  //         </DisclosurePanel>
  //       </>
  //     )}
  //   </Disclosure>
  // );

  return (
  <Disclosure as="nav" className="bg-black fixed top-0 w-full z-50">
    {({ open }) => (
      <>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between w-full">
            {/* Mobile Menu Button */}
            <div className="sm:hidden flex items-center">
              <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                {open ? (
                  <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>

            {/* Logo */}
            <div className="flex items-center flex-shrink-0">
              <Image
                width={40}
                height={40}
                alt="Logo"
                src={logo}
                className="h-10 w-auto"
              />
              <h5 className="gold-text font-bold text-2xl ps-2 hidden sm:block">
                Hashfor
              </h5>
            </div>

            {/* Nav Items */}
            <div className="hidden sm:flex flex-1 justify-center overflow-x-auto no-scrollbar">
              <div className="flex space-x-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "gold-text"
                        : "text-gray-400 hover:gold-gradient-btn hover:text-white",
                      "rounded-md px-3 py-2 text-md font-medium whitespace-nowrap"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Wallet Buttons */}
            <div className="hidden sm:flex items-center gap-2 pl-2">
              <button
                onClick={() => setIsOpen(true)}
                className="flex items-center gap-2 rounded-full gold-gradient-btn px-4 py-2 text-black font-medium shadow hover:opacity-90"
              >
                Login / SignUp
              </button>
              <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} />
              {account ? (
                <button
                  onClick={disconnectWallet}
                  className="flex items-center gap-2 rounded-full gold-gradient-btn px-4 py-2 text-black font-medium shadow hover:opacity-90"
                >
                  Disconnect: {account.slice(0, 3)}...{account.slice(-2)}
                </button>
              ) : (
                <button
                  onClick={connectWallet}
                  className="flex items-center gap-2 rounded-full gold-gradient-btn px-4 py-2 text-black font-medium shadow hover:opacity-90"
                >
                  Connect Wallet
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Panel */}
        <Disclosure.Panel className="sm:hidden px-4 pt-2 pb-3 space-y-1">
          {navigation.map((item) => (
            <Disclosure.Button
              key={item.name}
              as="a"
              href={item.href}
              className={classNames(
                item.current
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                "block rounded-md px-3 py-2 text-base font-medium"
              )}
              aria-current={item.current ? "page" : undefined}
            >
              {item.name}
            </Disclosure.Button>
          ))}
          <div className="mt-4 space-y-2">
            <button
              onClick={() => setIsOpen(true)}
              className="w-full flex items-center justify-center gap-2 rounded-full gold-gradient-btn px-4 py-2 text-black font-medium shadow hover:opacity-90"
            >
              Login / SignUp
            </button>
            {account ? (
              <button
                onClick={disconnectWallet}
                className="w-full flex items-center justify-center gap-2 rounded-full gold-gradient-btn px-4 py-2 text-black font-medium shadow hover:opacity-90"
              >
                Disconnect: {account.slice(0, 3)}...{account.slice(-2)}
              </button>
            ) : (
              <button
                onClick={connectWallet}
                className="w-full flex items-center justify-center gap-2 rounded-full gold-gradient-btn px-4 py-2 text-black font-medium shadow hover:opacity-90"
              >
                Connect Wallet
              </button>
            )}
          </div>
        </Disclosure.Panel>
      </>
    )}
  </Disclosure>
);

}
