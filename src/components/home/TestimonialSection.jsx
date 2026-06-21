import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import testimonial1 from "../../assets/Images/Testimonial/1.jpg";
import testimonial2 from "../../assets/Images/testimonial/2.jpg";
import testimonial3 from "../../assets/Images/testimonial/3.jpg";
import testimonial4 from "../../assets/Images/testimonial/4.jpg";
import testimonial5 from "../../assets/Images/testimonial/5.jpg";

const testimonials = [
  {
    image: testimonial1,
    name: "Tanisha Jain",
    review:
      "Choosing Wishco was the best decision! They far exceeded expectations.",
  },
  {
    image: testimonial2,
    name: "Neeru",
    review:
      "Accommodated our last-minute requests while staying true to everything we had planned.",
  },
  {
    image: testimonial3,
    name: "Mudit Gusain",
    review:
      "A smooth and memorable experience. Thanks to the Wishco team!",
  },
  {
    image: testimonial4,
    name: "Pamoli Dutt",
    review:
      "Dreamy decor for all our events—they understood our vision perfectly.",
  },
  {
    image: testimonial5,
    name: "Aishwarya",
    review:
      "The entire event was managed beautifully from start to finish.",
  },
];

export default function TestimonialSection() {
  return (
    <section className="py-20 bg-[#f8f8f8]">
      <div className="max-w-7xl mx-auto px-4">

        <h2 className="text-center text-4xl md:text-5xl font-serif font-bold mb-14">
          What our customer says
        </h2>

        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          spaceBetween={24}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1400: {
              slidesPerView: 4,
            },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className="
                  bg-white
                  rounded-3xl
                  p-10
                  h-[450px]
                  flex
                  flex-col
                  hover:-translate-y-2
                  transition-all
                  duration-300
                  shadow-sm
                  hover:shadow-xl
                "
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 rounded-full object-cover"
                />

                <p className="mt-8 text-2xl leading-relaxed text-[#222] flex-1">
                  "{item.review}"
                </p>

                <h4 className="font-serif text-3xl mt-8">
                  {item.name}
                </h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}