import { useState } from "react";
import work1 from "../assets/Images/work/1.jpg";
import work2 from "../assets/Images/work/2.jpg";
import work3 from "../assets/Images/work/3.jpg";
import work4 from "../assets/Images/work/4.jpg";
import work5 from "../assets/Images/work/3.jpg";
import work6 from "../assets/Images/work/2.jpg";
import work10 from "../assets/Images/work/4.jpg";
import work11 from "../assets/Images/work/1.jpg";
import work12 from "../assets/Images/work/3.jpg";

const categories = [
  "Haldi/Mehendi",
  "Cocktail/Sangeet",
  "Engagement",
  "Wedding",
];

const galleryData = {
  "Haldi/Mehendi": [
    work1,
    work2,
    work3,
    work4,
    work5,
    work6,
  ],
  "Cocktail/Sangeet": [
    work1,
    work2,
    work3,
  ],
  Engagement: [
    work4,
    work5,
    work6,
  ],
  Wedding: [
    work10,
    work11,
    work12,
  ],
};

export default function Work() {
  const [activeTab, setActiveTab] = useState("Haldi/Mehendi");

  return (
    <section className="py-24 bg-[#f7f7f7]">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-[#1d2b36]">
            Royalx Weddings
          </h2>

          <p className="text-xl text-gray-600 mt-3">
            For Every Occasion
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 
                cursor-pointer
              ${
                activeTab === tab
                  ? "bg-[#b08a5b] text-white shadow-lg"
                  : "bg-white text-[#1d2b36] hover:bg-gray-100"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryData[activeTab].map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl group"
            >
              <img
                src={img}
                alt=""
                className="
                  w-full
                  h-[250px]
                  md:h-[280px]
                  lg:h-[300px]
                  object-cover
                  transition-all
                  duration-500
                  group-hover:scale-110
                "
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}