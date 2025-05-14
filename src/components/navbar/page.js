// "use client"
// import {
//   Disclosure,
//   DisclosureButton,
//   DisclosurePanel,
//   Menu,
//   MenuButton,
//   MenuItem,
//   MenuItems,
// } from "@headlessui/react";
// import { Bars3Icon, XMarkIcon, WalletIcon } from "@heroicons/react/24/outline";
// import Image from "next/image";
// import Link from "next/link";
// import { LuWallet } from "react-icons/lu";
// import logo from "../../../public/logo.png";
// import { ethers } from "ethers";
// import Web3Modal from "web3modal";
// import { CoinbaseWalletSDK } from "@coinbase/wallet-sdk";
// import WalletConnectProvider from "@walletconnect/web3-provider";
// import {  useState } from "react";
// function getProvider() {
//   const provider = window.safepalProvider; // Check if SafePal provider is injected
//   if (!provider) {
//     // If SafePal provider is not found, open the download link
//     window.open("https://www.safepal.com/download");
//     throw new Error(
//       "Please go to our official website to download SafePal wallet."
//     );
//   }
//   return provider;
// }
// const providerOptions = {
  
//   coinbasewallet: {
//     package: CoinbaseWalletSDK,
//     options: {
//       appName: "Web3Modal Demo",
//       infuraId: "https://rpc.testnet.fantom.network", // Replace with the correct RPC URL if needed
//     },
//   },

//   walletconnect: {
//     package: WalletConnectProvider,
//     options: {
//       rpc: {
//         4002: "https://rpc.testnet.fantom.network", // Replace with the correct RPC URL
//       },
//       bridge: "https://bridge.walletconnect.org", // Default WalletConnect bridge
//       qrcode: true, // Show QR code for connection
//     },
//   },
// };

// const navigation = [
//   { name: "Dashboard", href: "#", current: true },
//   { name: "Swap", href: "#", current: false },
//   { name: "Pool", href: "#", current: false },
//   { name: "Farm", href: "#", current: false },
//   { name: "Analytics", href: "#", current: false },
// ];

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }



// export default function Example() {
//   const [account, setAccount] = useState(null);
//   const [signer, setSigner] = useState(null);
    
//     const connectWallet = async () => {
//       console.log("connectting");
//           try {
//             const web3Modal = new Web3Modal({
//               cacheProvider: false,
//               providerOptions,
//               themeVariables: {
//                 '--w3m-color-mix': '#00BB7F',
//                 '--w3m-color-mix-strength': 40
//               }
//             });
      
//             const web3modalInstance = await web3Modal.connect();
//             const web3modalProvider = new ethers.providers.Web3Provider(
//               web3modalInstance
//             );
//             let provider;
//             if (window.safepalProvider) {
//               provider = new ethers.providers.Web3Provider(getProvider()); // SafePal provider
//             } else {
//               // Fallback to Web3Modal provider
//               provider = new ethers.providers.Web3Provider(web3modalInstance);
//             }
//             const signer = web3modalProvider.getSigner();
//             console.log(signer);
//                        // Update state with wallet details
//                        const address = await signer.getAddress();

//       setSigner(signer);
//       setAccount(address);
//             return true;
//           } catch (error) {
//             console.log("Error connecting wallet:", error);

//           }
//     };
//     const disconnectWallet = async () => {
//       try {
//         const web3Modal = new Web3Modal({
//           cacheProvider: false,
//           providerOptions,
//         });
    
//         // Clear cache
//         web3Modal.clearCachedProvider();
    
//         // If the provider has a disconnect method, call it
//         if (window.ethereum?.disconnect) {
//           await window.ethereum.disconnect();
//         }
    
//         // Reset state
//         setAccount(null);
//         setSigner(null);
    
//         console.log("Wallet disconnected");
//       } catch (error) {
//         console.log("Error disconnecting wallet:", error);
//       }
//     };
//   return (
// //     <Disclosure as="nav" className="bg-black fixed top-0 w-full z-50">
// //       <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
// //         <div className="relative flex h-16 items-center justify-between">
// //           {/* Mobile menu button */}
// //           <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
// //             <DisclosureButton className="group inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
// //               <Bars3Icon
// //                 className="block h-6 w-6 group-data-open:hidden"
// //                 aria-hidden="true"
// //               />
// //               <XMarkIcon
// //                 className="hidden h-6 w-6 group-data-open:block"
// //                 aria-hidden="true"
// //               />
// //               <span className="sr-only">Open main menu</span>
// //             </DisclosureButton>
// //           </div>

// //           {/* Logo */}
// //           <div className="flex flex-1 items-center justify-center sm:justify-start">
// //             <div className="flex shrink-0 items-center">
// //               {/* <Image
// //                 width={300}
// //                 height={300}
// //                 alt="Your Company"
// //                 src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
// //                 className="h-8 w-auto"
// //               /> */}{" "}
// //               {/* <p className="border-black rounded-xl p-2 gold-gradient-btn">
// //                 <LuWallet className="text-2xl text-black" />
// //               </p> */}
// //               <Image
// //                 width={300}
// //                 height={300}
// //                 alt="Your Company"
// //                 src={logo}
// //                 className="h-12 w-auto"
// //               />
// //               <h5 className="gold-text font-bold text-2xl ps-3">Hashfor</h5>
// //             </div>
// //           </div>

// //           {/* Centered Navigation */}
// //           <div className="hidden sm:flex flex-1 justify-start">
// //             <div className="flex space-x-4 ">
// //               {navigation.map((item) => (
// //                 <Link
// //                   key={item.name}
// //                   href={item.href}
// //                   aria-current={item.current ? "page" : undefined}
// //                   className={classNames(
// //                     item.current
// //                       ? "gold-text"
// //                       : "text-gray-400 hover:gold-gradient-btn hover:text-white",
// //                     "rounded-md px-3 py-2 text-md font-medium"
// //                   )}
// //                 >
// //                   {item.name}
// //                 </Link>
// //               ))}
// //             </div>
// //           </div>

// //           {/* Desktop Connect Wallet button */}
// //           <div className="hidden sm:flex absolute inset-y-0 right-0 items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 cursor-pointer">
// //             {/* <button
// //               type="button"
// //               className="flex items-center gap-2 rounded-full gold-gradient-btn px-4 py-2 text-black font-medium shadow hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
// //             >
// //               <WalletIcon className="h-5 w-5" />
// //               Connect Wallet
// //             </button> */}
// //  {account ? (
// //     <button onClick={disconnectWallet} className="flex items-center gap-2 rounded-full gold-gradient-btn px-4 py-2 text-black font-medium shadow hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
// //       Disconnect: {account.slice(0, 3)}...{account.slice(-2)}
// //     </button>
// //   ) : (
// //     <button onClick={connectWallet} className="flex items-center gap-2 rounded-full gold-gradient-btn px-4 py-2 text-black font-medium shadow hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
// //       Connect Wallet
// //     </button>
// //   )}
// //           </div>
// //         </div>
// //       </div>

// //       {/* Mobile Panel */}
// //       <DisclosurePanel className="sm:hidden">
// //         <div className="space-y-1 px-2 pt-2 pb-3">
// //           {navigation.map((item) => (
// //             <DisclosureButton
// //               key={item.name}
// //               as="a"
// //               href={item.href}
// //               aria-current={item.current ? "page" : undefined}
// //               className={classNames(
// //                 item.current
// //                   ? "bg-gray-900 text-white"
// //                   : "text-gray-300 hover:bg-gray-700 hover:text-white",
// //                 "block rounded-md px-3 py-2 text-base font-medium"
// //               )}
// //             >
// //               {item.name}
// //             </DisclosureButton>
// //           ))}
// //           {/* Mobile "Connect Wallet" button */}
// //           <div className="mt-3 px-3">
// //           {account ? (
// //     <button onClick={disconnectWallet} className="flex items-center gap-2 rounded-full gold-gradient-btn px-4 py-2 text-black font-medium shadow hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
// //       Disconnect: {account.slice(0, 3)}...{account.slice(-2)}
// //     </button>
// //   ) : (
// //     <button onClick={connectWallet} className="flex items-center gap-2 rounded-full gold-gradient-btn px-4 py-2 text-black font-medium shadow hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
// //       Connect Wallet
// //     </button>
// //   )}
// //           </div>
// //         </div>
// //       </DisclosurePanel>
// //     </Disclosure>
// <Disclosure as="nav" className="bg-black fixed top-0 w-full z-50">
//   {({ open }) => (
//     <>
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <div className="relative flex h-16 items-center justify-between">

//           {/* Mobile Menu Button */}
//           <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
//             <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
//               {open ? (
//                 <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
//               ) : (
//                 <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
//               )}
//             </Disclosure.Button>
//           </div>

//           {/* Logo (Left) */}
//           {/* <div className="flex flex-1 items-center justify-start">
//             <Image
//               width={40}
//               height={40}
//               alt="Your Company"
//               src={logo}
//               className="h-10 w-auto"
//             />
//             <h5 className="gold-text font-bold text-2xl ps-2">Hashfor</h5>
//           </div> */}
// {/* Logo (Left) */}
// {/* Logo (Responsive Positioning) */}
// <div className="flex flex-1 justify-center sm:justify-start items-center">
//   <Image
//     width={40}
//     height={40}
//     alt="Your Company"
//     src={logo}
//     className="h-10 w-auto"
//   />
//   <h5 className="gold-text font-bold text-2xl ps-2 hidden sm:block">Hashfor</h5>
// </div>


//           {/* Navigation Centered */}
//           <div className="hidden sm:flex absolute inset-x-0 justify-center">
//             <div className="flex space-x-4">
//               {navigation.map((item) => (
//                 <Link
//                   key={item.name}
//                   href={item.href}
//                   aria-current={item.current ? "page" : undefined}
//                   className={classNames(
//                     item.current
//                       ? "gold-text"
//                       : "text-gray-400 hover:gold-gradient-btn hover:text-white",
//                     "rounded-md px-3 py-2 text-md font-medium"
//                   )}
//                 >
//                   {item.name}
//                 </Link>
//               ))}
//             </div>
//           </div>

//           {/* Wallet Button (Right) */}
//           {/* <div className="sm:flex flex-1 items-center justify-end">
//             {account ? (
//               <button
//                 onClick={disconnectWallet}
//                 className="flex items-center gap-2 rounded-full gold-gradient-btn px-4 py-2 text-black font-medium shadow hover:opacity-90"
//               >
//                 Disconnect: {account.slice(0, 3)}...{account.slice(-2)}
//               </button>
//             ) : (
//               <button
//                 onClick={connectWallet}
//                 className="flex items-center gap-2 rounded-full gold-gradient-btn px-4 py-2 text-black font-medium shadow hover:opacity-90"
//               >
//                 Connect Wallet
//               </button>
//             )}
//           </div> */}
//             <div className="hidden sm:flex absolute inset-y-0 right-0 items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 cursor-pointer">
           
//  <div>
//  {account ? (
//     <button onClick={disconnectWallet} className="flex items-center gap-2 rounded-full gold-gradient-btn px-4 py-2 text-black font-medium shadow hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
//       Disconnect: {account.slice(0, 3)}...{account.slice(-2)}
//     </button>
//   ) : (
//     <button onClick={connectWallet} className="flex items-center gap-2 rounded-full gold-gradient-btn px-4 py-2 text-black font-medium shadow hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
//       Connect Wallet
//     </button>
//   )}
//           </div>
       


//         </div>
//       </div>

//       {/* Mobile Nav Panel */}
//       <Disclosure.Panel className="sm:hidden px-4 pt-2 pb-3 space-y-1">
//         {navigation.map((item) => (
//           <Disclosure.Button
//             key={item.name}
//             as="a"
//             href={item.href}
//             className={classNames(
//               item.current
//                 ? "bg-gray-900 text-white"
//                 : "text-gray-300 hover:bg-gray-700 hover:text-white",
//               "block rounded-md px-3 py-2 text-base font-medium"
//             )}
//             aria-current={item.current ? "page" : undefined}
//           >
//             {item.name}
//           </Disclosure.Button>
//         ))}

//         {/* Mobile Wallet Button */}
//         <div className="mt-4">
//           {account ? (
//             <button
//               onClick={disconnectWallet}
//               className="w-full flex items-center justify-center gap-2 rounded-full gold-gradient-btn px-4 py-2 text-black font-medium shadow hover:opacity-90"
//             >
//               Disconnect: {account.slice(0, 3)}...{account.slice(-2)}
//             </button>
//           ) : (
//             <button
//               onClick={connectWallet}
//               className="w-full flex items-center justify-center gap-2 rounded-full gold-gradient-btn px-4 py-2 text-black font-medium shadow hover:opacity-90"
//             >
//               Connect Wallet
//             </button>
//           )}
//         </div>
//       </Disclosure.Panel>
//     </>
//   )}
// </Disclosure>


//   );
// }
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
  { name: "Dashboard", href: "#", current: true },
  { name: "Swap", href: "#", current: false },
  { name: "Pool", href: "#", current: false },
  { name: "Farm", href: "#", current: false },
  { name: "Analytics", href: "#", current: false },
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

  return (
    <Disclosure as="nav" className="bg-black fixed top-0 w-full z-50">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              {/* Mobile Menu Button */}
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>

              {/* Logo */}
              <div className="flex flex-1 justify-center sm:justify-start items-center">
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

              {/* Center Navigation */}
              <div className="hidden sm:flex absolute inset-x-0 justify-center">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "gold-text"
                          : "text-gray-400 hover:gold-gradient-btn hover:text-white",
                        "rounded-md px-3 py-2 text-md font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Wallet Button */}
              <div className="hidden sm:flex absolute inset-y-0 right-0 items-center pr-4">
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
          <DisclosurePanel className="sm:hidden px-4 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <DisclosureButton
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
              </DisclosureButton>
            ))}
            <div className="mt-4">
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
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}

