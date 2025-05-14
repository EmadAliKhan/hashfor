// import Link from "next/link";
// import React from "react";
// import { FaWallet } from "react-icons/fa";
// import { LuWallet } from "react-icons/lu";
// import { FaGithub } from "react-icons/fa6";
// import { FaTwitter } from "react-icons/fa";
// import { FaDiscord } from "react-icons/fa6";
// import Image from "next/image";
// import logo from "../../../public/logo.png";

// const Footer = () => {
//   return (
//     <>
//       <div>
//         <footer className="footer sm:footer-horizontal bg-black text-white p-10 border-t border-b border-white-400">
//           <aside className="mt-[60px] mb-[60px]">
//             <div className="flex gap-2">
//               {/* <p className="border-black rounded-xl p-2 gold-gradient-btn">
//                 <LuWallet className="text-4xl text-black" />
//               </p> */}
//               <Image
//                 width={300}
//                 height={300}
//                 alt="Your Company"
//                 src={logo}
//                 className="h-14 w-auto"
//               />
//               <p className="gold-text text-2xl font-bold mt-2">Hashfor</p>
//             </div>
//             <div className="mt-3">
//               <p className="text-lg">
//                 The next generation DeFi platform
//                 <span className="block">for trading, earning, and growing</span>
//                 your digital assets.
//               </p>
//             </div>
//             <div className="flex gap-3 text-2xl mt-3 cursor-pointer ">
//               <FaTwitter className="hover:text-yellow-400" />
//               <FaGithub className="hover:text-yellow-400" />
//               <FaDiscord className="hover:text-yellow-400" />
//             </div>
//           </aside>
//           <nav className="mt-[60px] mb-[60px] text-lg cursor-pointer">
//             <h6 className="footer-title gold-text">PRODUCT</h6>
//             <Link href="" className=" hover:text-yellow-400">
//               Dashboard
//             </Link>
//             <Link href="" className="hover:text-yellow-400">
//               Swap
//             </Link>
//             <Link href="" className="hover:text-yellow-400">
//               Liquidity
//             </Link>
//             <Link href="" className="hover:text-yellow-400">
//               Staking
//             </Link>
//             <Link href="" className="hover:text-yellow-400">
//               Farming
//             </Link>
//           </nav>
//           <nav className="mt-[60px] mb-[60px] text-lg cursor-pointer">
//             <h6 className="footer-title gold-text">RESOURCES</h6>
//             <Link href="" className=" hover:text-yellow-400">
//               Documentation
//             </Link>
//             <Link href="" className="hover:text-yellow-400">
//               API Reference
//             </Link>
//             <Link href="" className="hover:text-yellow-400">
//               Whitepaper
//             </Link>
//             <Link href="" className="hover:text-yellow-400">
//               Analytics
//             </Link>
//             <Link href="" className="hover:text-yellow-400">
//               Blog
//             </Link>
//           </nav>
//           <nav className="mt-[60px] text-lg cursor-pointer">
//             <h6 className="footer-title gold-text">COMPANY</h6>
//             <Link href="" className=" hover:text-yellow-400">
//               About
//             </Link>
//             <Link href="" className="hover:text-yellow-400">
//               Team
//             </Link>
//             <Link href="" className="hover:text-yellow-400">
//               Careers
//             </Link>
//             <Link href="" className="hover:text-yellow-400">
//               Contact
//             </Link>
//             <Link href="" className="hover:text-yellow-400">
//               Privacy Policy
//             </Link>
//           </nav>
//         </footer>
//       </div>
//     </>
//   );
// };

// export default Footer;
import Link from "next/link";
import React from "react";
import { FaWallet } from "react-icons/fa";
import { LuWallet } from "react-icons/lu";
import { FaGithub } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";
import Image from "next/image";
import logo from "../../../public/logo.png";

const Footer = () => {
  return (
    <>
      <div>
        <footer className="footer sm:footer-horizontal bg-black text-white p-10 border-t border-b border-white-400">
          <aside className="mt-[60px] mb-[60px]">
            <div className="flex gap-2">
              <Image
                width={300}
                height={300}
                alt="Your Company"
                src={logo}
                className="h-14 w-auto"
              />
              <p className="gold-text text-2xl font-bold mt-2">Hashfor</p>
            </div>
            <div className="mt-3">
              <p className="text-lg  ">
                The next generation DeFi platform
                <span className="block">for trading, earning, and growing</span>
                your digital assets.
              </p>
            </div>
            <div className="flex gap-3 text-2xl mt-3 cursor-pointer">
              <FaTwitter className="hover:text-yellow-400" />
              <FaGithub className="hover:text-yellow-400" />
              <FaDiscord className="hover:text-yellow-400" />
            </div>
          </aside>

          {/* For the Product, Resources, and Company sections */}
          <nav className="sm:mt-[60px] mb-[60px] text-lg cursor-pointer ">
            <h6 className="footer-title gold-text">PRODUCT</h6>
            <Link href="" className="hover:text-yellow-400">
              Dashboard
            </Link>
            <Link href="" className="hover:text-yellow-400">
              Swap
            </Link>
            <Link href="" className="hover:text-yellow-400">
              Liquidity
            </Link>
            <Link href="" className="hover:text-yellow-400">
              Staking
            </Link>
            <Link href="" className="hover:text-yellow-400">
              Farming
            </Link>
          </nav>
          
          <nav className="sm:mt-[60px] mb-[60px] text-lg cursor-pointer">
            <h6 className="footer-title gold-text">RESOURCES</h6>
            <Link href="" className="hover:text-yellow-400">
              Documentation
            </Link>
            <Link href="" className="hover:text-yellow-400">
              API Reference
            </Link>
            <Link href="" className="hover:text-yellow-400">
              Whitepaper
            </Link>
            <Link href="" className="hover:text-yellow-400">
              Analytics
            </Link>
            <Link href="" className="hover:text-yellow-400">
              Blog
            </Link>
          </nav>
          
          <nav className="sm:mt-[60px] text-lg cursor-pointer">
            <h6 className="footer-title gold-text">COMPANY</h6>
            <Link href="" className="hover:text-yellow-400">
              About
            </Link>
            <Link href="" className="hover:text-yellow-400">
              Team
            </Link>
            <Link href="" className="hover:text-yellow-400">
              Careers
            </Link>
            <Link href="" className="hover:text-yellow-400">
              Contact
            </Link>
            <Link href="" className="hover:text-yellow-400">
              Privacy Policy
            </Link>
          </nav>
        </footer>
      </div>
    </>
  );
};

export default Footer;
