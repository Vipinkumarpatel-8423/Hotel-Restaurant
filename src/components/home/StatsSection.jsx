
export default function StatsSection() {
  const stats = [
  { number: "12+", title: "Years of Industry Experience" },
  { number: "150+", title: "Venue Tie-ups" },
  { number: "300+", title: "Events" },
  { number: "96%", title: "Positive Reviews" },
];
  return (
   <section className="bg-[#e5e2e2] border border-[#eee] py-16">
  <div className="max-w-7xl mx-auto px-4">
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

      {stats.map((item, index) => (
        <div
          key={index}
          className="text-center animate-fade-up"
        >
          <h2 className="text-[#b08a5b] text-5xl md:text-6xl font-serif">
            {item.number}
          </h2>

          <p className="mt-3 text-[#b08a5b] text-lg">
            {item.title}
          </p>
        </div>
      ))}

    </div>
  </div>
</section>
  );
}