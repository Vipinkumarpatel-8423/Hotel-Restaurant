import {
  Wifi,
  BedDouble,
  UtensilsCrossed,
  Waves,
  Presentation,
  Users,
  Headset,
  Trees,
} from "lucide-react";

const services = [
  {
    icon: Wifi,
    title: "Basic Facilities",
    items: [
      "Reception/Front Desk",
      "Room Service",
      "Housekeeping",
      "Wi-Fi & Parking",
    ],
  },
  {
    icon: BedDouble,
    title: "Room Amenities",
    items: [
      "Comfortable Bedding",
      "Bathroom & Pool",
      "TV, AC & Heating",
      "Mini Bar & Safe",
    ],
  },
  {
    icon: UtensilsCrossed,
    title: "Dining Options",
    items: [
      "Restaurant & Cafe",
      "Bar & Lounge",
      "Cafe & Canteen",
      "Room Service",
    ],
  },
  {
    icon: Waves,
    title: "Leisure Facilities",
    items: [
      "Swimming Pool",
      "Gym / Fitness Center",
      "Spa & Beauty",
      "Sauna & Steam Room",
    ],
  },
  {
    icon: Presentation,
    title: "Business Services",
    items: [
      "Conference Hall",
      "Meeting Rooms",
      "Business Center",
      "Wi-Fi & Internet",
    ],
  },
  {
    icon: Users,
    title: "Family Facilities",
    items: [
      "Kids Club",
      "Babysitting Services",
      "Family Rooms",
      "Game Zone",
    ],
  },
  {
    icon: Headset,
    title: "Additional Services",
    items: [
      "Concierge",
      "Laundry & Dry Cleaning",
      "Shuttle Service",
      "Pet-Friendly",
    ],
  },
  {
    icon: Trees,
    title: "Special Features",
    items: [
      "Custom Rooms",
      "Garden & Golf",
      "Terrace",
      "Event Spaces",
    ],
  },
];

export default function Services() {
  return (
    <section className="py-23 bg-[#f8f8f8]">
      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold font-serif">
            Our Best{" "}
            <span className="text-[#b08a5b]">
              Services
            </span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="
                  bg-white
                  rounded-3xl
                  p-10
                  border
                  border-transparent
                  hover:border-black
                  transition-all
                  duration-300
                  shadow-sm
                  hover:shadow-lg
                "
              >
                <Icon
                  size={55}
                  className="text-[#b08a5b] mb-8"
                />

                <h3 className="text-3xl font-serif font-semibold mb-6">
                  {service.title}
                </h3>

                <ul className="space-y-3">
                  {service.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="text-gray-600 text-lg"
                    >
                      - {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}