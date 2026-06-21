// import Header from "./Header";
import Banner from "../../assets/Images/Banners/banner.png";
import { PhoneCall } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <img
        src={Banner}
        alt="Luxury Hotel"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-black/80"></div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40"></div>

      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black/50"></div> */}

      {/* Navbar */}
      {/* <Header /> */}

      {/* Hero Content */}
      {/* <div className="absolute bottom-0 left-0 z-10 h-full flex items-end">
        <div className="max-w-7xl px-5 sm:px-8 md:px-12 lg:px-20 xl:px-28 py-8 space-y-4">
          <p className="text-white mt-4 text-lg">
            Luxury Hotel & Restaurant
          </p>
          <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-serif space-y-2 md:space-y-4">
            <h1 className=" ">
              Enjoy Your <span className="text-[#c9a46b]">Dream</span> Time With{" "}
              <br />
            </h1>
            <h1 className=" ">
              <span className="text-[#c9a46b]">Luxury</span> Experience
            </h1>

            <div className="flex items-center gap-3 md:gap-4 mt-6">
            <div className="w-12 h-12 md:w-14 md:h-14 border border-white rounded-2xl flex items-center justify-center">
              <PhoneCall className="text-white w-5 h-5" />
            </div>

            <div className="flex flex-col gap-2">
              <h4 className="text-white text-sm md:text-base font-semibold">Book Now</h4>

              <p className="text-white text-sm md:text-base font-medium">842 355 3599</p>
            </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="absolute bottom-0 left-0 z-10 h-full flex items-end">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-7xl px-5 sm:px-8 md:px-12 lg:px-20 xl:px-28 py-8 space-y-4"
        >
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-white mt-4 text-lg"
          >
            Luxury Hotel & Restaurant
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-serif space-y-2 md:space-y-4"
          >
            <h1>
              Enjoy Your <span className="text-[#c9a46b]">Dream</span> Time With
            </h1>

            <h1>
              <span className="text-[#c9a46b]">Luxury</span> Experience
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="flex items-center gap-3 md:gap-4 mt-6"
          >
            <div className="w-12 h-12 md:w-14 md:h-14 border border-white rounded-2xl flex items-center justify-center">
              <PhoneCall className="text-white w-5 h-5" />
            </div>

            <div className="flex flex-col gap-2">
              <h4 className="text-white text-sm md:text-base font-semibold">
                Book Now
              </h4>

              <p className="text-white text-sm md:text-base font-medium">
                842 355 3599
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
