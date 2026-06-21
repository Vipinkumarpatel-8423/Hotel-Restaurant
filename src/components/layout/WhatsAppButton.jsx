import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/918423553599"
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed
        bottom-5
        right-5
        z-9999
        flex
        items-center
        justify-center
        w-14
        h-14
        md:w-16
        md:h-16
        rounded-full
        bg-[#25D366]
        text-white
        shadow-lg
        hover:scale-110
        transition-all
        duration-300
      "
    >
      <FaWhatsapp className="text-3xl md:text-4xl" />
    </a>
  );
}