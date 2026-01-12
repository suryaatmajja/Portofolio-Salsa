import skillsData from "../data/SkilsData";

const Skills = () => {
  return (
    <section id="Skills" className="w-full bg-[#FAF9F7] py-28">
      <div className="max-w-6xl mx-auto md:px-20 px-10">
        <div className="text-center mb-20">
          <h2 className="md:text-4xl text-3xl font-bold text-gray-800 mb-4">
            Skills
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Menciptakan dessert berkualitas melalui perpaduan keterampilan
            pastry, manajemen operasional, dan inovasi menu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skillsData.map(({ id, title, desc, icon, iconHover }) => (
            <div
              key={id}
              className="
                group bg-white border border-gray-200 rounded-2xl p-8
                transition-all duration-300
                hover:bg-[#B8926F] hover:border-[#D6C3B3] shadow-md
              "
            >
              {/* Icon Wrapper */}
              <div
                className="
                w-12 h-12 mb-6 rounded-lg border border-gray-300
                flex items-center justify-center
                transition-all duration-300
                group-hover:border-white
              "
              >
                {/* Default Icon */}
                <img
                  src={icon}
                  alt={title}
                  className="w-6 h-6 block group-hover:hidden"
                />

                {/* Hover Icon */}
                <img
                  src={iconHover}
                  alt={`${title} hover`}
                  className="w-6 h-6 hidden group-hover:block"
                />
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-white">
                {title}
              </h3>

              <p className="text-gray-600 leading-relaxed group-hover:text-white/90">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
