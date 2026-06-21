import blog1 from "../assets/Images/Blog/blog1.jpg";
import blog2 from "../assets/Images/Blog/blog2.jpg";
import blog3 from "../assets/Images/Blog/blog3.jpg";
import blog4 from "../assets/Images/Blog/blog4.jpg";

const blogs = [
  {
    id: 1,
    image: blog1,
    date: "June 28, 2024",
    category: "Restaurant",
    title: "Best way to solve business deal issue in market.",
  },
  {
    id: 2,
    image: blog2,
    date: "June 30, 2024",
    category: "Gym",
    title: "Marketing Guide 5 steps to Success.",
  },
  {
    id: 3,
    image: blog3,
    date: "June 16, 2024",
    category: "Spa",
    title: "Best Way to solve Business deal.",
  },
  {
    id: 4,
    image: blog4,
    date: "June 10, 2024",
    category: "Golf",
    title: "Customer service stats know in 2025.",
  },
];

export default function Blog() {
  return (
    <section className="py-22 bg-[#f8f8f8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-14">

          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-20 h-[2px] bg-[#b08a5b]" />
            <p className="text-[#666] text-lg font-medium">
              New Blogs
            </p>
            <div className="w-20 h-[2px] bg-[#b08a5b]" />
          </div>

          <h2 className="text-4xl md:text-5xl font-serif font-bold">
            Latest{" "}
            <span className="text-[#b08a5b]">
              News
            </span>
          </h2>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">

          {blogs.map((blog) => (
            <article
              key={blog.id}
              className="group relative overflow-hidden rounded-t-[140px] rounded-b-[30px] shadow-md"
            >
              {/* Image */}
              <img
                src={blog.image}
                alt={blog.title}
                className="
                  w-full
                  h-[420px]
                  object-cover
                  transition-all
                  duration-700
                  group-hover:scale-110
                "
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">

                <p className="text-white/90 text-sm mb-3">
                  {blog.date} - {blog.category}
                </p>

                <h3 className="text-white text-xl font-medium leading-relaxed">
                  {blog.title}
                </h3>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}