export default function Contact() {
  return (
    <section className="py-20 lg:py-24 bg-[#f8f8f8]">
      <div className="max-w-7xl mx-auto px-4">

        <div className="bg-[#f3f3f3] rounded-[30px] p-5 md:p-8 lg:p-10">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">

            {/* Google Map */}
            <div className="overflow-hidden rounded-2xl min-h-[350px] lg:min-h-[560px]">
              <iframe
                title="Location"
                src="https://maps.google.com/maps?q=Panchkula%20Sector%2020%20Chandigarh&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>

            {/* Contact Form */}
            <div>
              <form className="space-y-6">

                {/* Name + Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                  <div>
                    <label className="block text-lg mb-2 font-medium">
                      Your Name*
                    </label>

                    <input
                      type="text"
                      className="
                        w-full
                        h-14
                        rounded-xl
                        bg-white
                        px-4
                        outline-none
                        border
                        border-transparent
                        focus:border-[#b08a5b]
                      "
                    />
                  </div>

                  <div>
                    <label className="block text-lg mb-2 font-medium">
                      Your Email*
                    </label>

                    <input
                      type="email"
                      className="
                        w-full
                        h-14
                        rounded-xl
                        bg-white
                        px-4
                        outline-none
                        border
                        border-transparent
                        focus:border-[#b08a5b]
                      "
                    />
                  </div>

                </div>

                {/* Subject */}
                <div>
                  <label className="block text-lg mb-2 font-medium">
                    Your Subject*
                  </label>

                  <input
                    type="text"
                    className="
                      w-full
                      h-14
                      rounded-xl
                      bg-white
                      px-4
                      outline-none
                      border
                      border-transparent
                      focus:border-[#b08a5b]
                    "
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-lg mb-2 font-medium">
                    Message*
                  </label>

                  <textarea
                    rows="7"
                    className="
                      w-full
                      rounded-xl
                      bg-white
                      p-4
                      outline-none
                      resize-none
                      border
                      border-transparent
                      focus:border-[#b08a5b]
                    "
                  />
                </div>

                {/* Button */}
                <button
                  type="submit"
                  className="
                    px-10
                    py-4
                    border
                    border-black
                    rounded-2xl
                    text-lg
                    font-medium
                    hover:bg-black
                    hover:text-white
                    transition-all
                    duration-300
                  "
                >
                  Send Message
                </button>

              </form>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}