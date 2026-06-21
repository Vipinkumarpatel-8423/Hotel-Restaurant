// import { InstagramIcon } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import Logo from "../../assets/icons/logo.png";

export default function Footer() {
  return (
    <footer className="bg-[#131618]">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

          {/* Logo */}
          <div>

            <img
              src={Logo}
              alt="Royalx Logo"
              className="w-32 h-auto"
            />
            {/* <h2 className="text-5xl font-serif">
              wish
              <span className="text-[#555555] italic">
                co.
              </span>
            </h2> */}

            <div className="flex items-center gap-3 mt-8">
              <p className="text-xl text-[#f8f8f8]">
                Follow us on
              </p>

              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-gray-500 text-white flex items-center justify-center hover:bg-[#E76D2F] transition"
              >
                {/* <InstagramIcon size={20} /> */}
                <FaInstagram  size={20} />
              </a>
            </div>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-3xl font-semibold mb-6 text-[#f8f8f8]">
              Address
            </h3>

            <p className="text-[#cbcbcb] text-lg leading-9">
              12th Floor, Magnum Global Park,
              <br />
              91 Springboard Business Hub Pvt Ltd,
              <br />
              Golf Course Extension Road,
              Sector-58,
              <br />
              Gurgaon, Haryana, India, 122011
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-3xl font-semibold mb-6 text-[#f8f8f8]">
              Contact
            </h3>

            <div className="space-y-5">
              <a
                href="mailto:info@wishco.in"
                className="block text-[#cbcbcb] text-lg hover:text-[#c9a46b]"
              >
                info@royalx.in
              </a>

              <a
                href="tel:+918130905225"
                className="block text-[#cbcbcb] text-lg hover:text-[#c9a46b]"
              >
                +91-8130905225
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Copyright */}
      <div className="bg-[#c9a46b] py-5">
        <p className="text-center text-white text-base md:text-lg">
          © 2024–2025 Royalx. All Rights Reserved
        </p>
      </div>

    </footer>
  );
}