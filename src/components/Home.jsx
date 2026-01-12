const Hero = () => {
  return (
    <section id="Home" className="w-full bg-[#FAF9F7]">
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 items-center gap-16">
        {/* Left Content */}
        <div>
          <p className="text-gray-600 mb-4 font-medium">
            Welcome to my Portfolio
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            Hi I'm <span className="text-[#B98B5B]">Salsa</span>
            <br />
            <span className="text-[#B98B5B]">Pastry Cook</span> &<br />
            <span className="text-gray-900">FnB Enthusiast</span>
          </h1>

          {/* Buttons */}
          <div className="flex gap-4 mt-10">
            {/* Link ke Section Experience */}
            <a
              href="#Experience"
              className="md:px-7 md:py-3 px-3 py-2 rounded-full bg-[#C8A951] hover:bg-[#a08740] text-white 
              font-medium transition inline-block text-center"
            >
              Experience
            </a>

            {/* Link untuk Download CV */}
            <a
              href="/Assets/cv/cv-salsa.pdf"
              download="CV_Salsa.pdf"
              className="md:px-7 md:py-3 px-3 py-2 rounded-full bg-[#C8A951] hover:bg-[#a08740] text-white font-medium 
              flex items-center gap-2 transition"
            >
              Download CV{" "}
              <img
                src="/Assets/icon-download.png"
                alt="download"
                className="w-5 h-5"
              />
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center py-18 md:justify-end">
          <div className="relative">
            <div className="w-72 h-72 sm:w-96 sm:h-96 rounded-full overflow-hidden border-4 border-[#B98B5B]">
              <img
                src="/Assets/foto.jpg"
                alt="Salsa"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
