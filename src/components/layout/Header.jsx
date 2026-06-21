// export default function Header() {

//   return (
//     <header
//       className={`fixed top-0 left-0 w-full z-50 transition-all duration-500
//         bg-black/95 backdrop-blur-md py-4 shadow-lg
//       `}
//     >
//       <div className="container mx-auto px-30">
//         <div className="flex items-center justify-between">
//           <h1 className="text-[#b48b5b] text-5xl font-serif">
//             Royalx
//           </h1>

//             {/* Desktop Menu */}
//           <nav className="hidden lg:flex items-center gap-12 text-white">

//             <a href="/" className="flex items-center gap-2 hover:text-[#c9a46b] transition">
//               Home
//             </a>

//             <a href="/services" className="flex items-center gap-2 hover:text-[#c9a46b] transition">
//               Services
//             </a>

//             <a href="/work" className="flex items-center gap-2 hover:text-[#c9a46b] transition">
//               Work
//             </a>

//             <a href="/blog" className="flex items-center gap-2 hover:text-[#c9a46b] transition">
//               Blog
//             </a>

//             <a href="/contact" className="flex items-center gap-2 hover:text-[#c9a46b] transition">
//               Contact
//             </a>

//           </nav>

//           {/* <button className="border border-white px-8 py-3 rounded-xl text-white">
//             Book Now
//           </button> */}
//         </div>
//       </div>
//     </header>
//   );
// }

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "../../assets/icons/logo.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Work", path: "/work" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/95 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          {/* <h1 className="text-[#b48b5b] text-3xl sm:text-4xl lg:text-5xl font-serif">
            Royalx
          </h1> */}

          <Link to="/">
            <img
              src={Logo}
              alt="Royalx Logo"
              className="h-8 sm:h-10 lg:h-12 cursor-pointer"
            />
          </Link>
          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-10 text-white">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="hover:text-[#c9a46b] transition duration-300"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Book Now Button */}
          {/* <button className="hidden md:block border border-white px-6 py-2 rounded-xl text-white hover:bg-[#c9a46b] hover:border-[#c9a46b] transition">
            Book Now
          </button> */}

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-black/95 overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-4 text-white">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="py-3 border-b border-white/10 hover:text-[#c9a46b]"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          {/* <button className="mt-4 border border-white py-3 rounded-xl hover:bg-[#c9a46b] transition">
            Book Now
          </button> */}
        </nav>
      </div>
    </header>
  );
}
