// Experience.jsx
import React from "react";
import experienceData from "../data/ExperienceData"; // Import data dari file sebelah

const Experience = () => {
  return (
    <section id="Experience" className="bg-[#FAF9F7] mx-auto py-40 font-sans">
      <div className="text-center mb-10">
        <h2 className="md:text-4xl text-3xl font-bold text-gray-800 mb-2">
          Experience
        </h2>
        <p className="text-gray-500 md:text-md text-sm">
          Berikut ini merupakan pengalaman bekerja saya
        </p>
      </div>

      <div className="max-w-4xl mx-auto flex flex-col gap-10 md:px-16 px-10">
        {experienceData.map((exp) => (
          <div
            key={exp.id}
            className="group flex flex-col md:flex-row border-2 border-[#f3e8d6] rounded-2xl p-8 shadow-md 
                 transition-all duration-300
                 hover:bg-[#B08968] hover:border-[#D6C3B3] text-[#2E2E2E] hover:text-[#FAF9F7]"
          >
            {/* Bagian Ikon & Info */}
            <div className="flex-1 flex flex-col gap-4">
              {/* Baris Tanggal */}
              <div className="flex items-center gap-4 cursor-pointer">
                <div className="relative w-5 h-5">
                  <img
                    src={exp.iconDate}
                    alt="date"
                    className="w-full h-full absolute transition-opacity duration-300 group-hover:opacity-0"
                  />
                  <img
                    src={exp.hoverDate}
                    alt="date-hover"
                    className="w-full h-full absolute transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                  />
                </div>
                <p>{exp.date}</p>
              </div>

              {/* Baris Jabatan */}
              <div className="flex items-center gap-4 cursor-pointer">
                <div className="relative w-5 h-5">
                  <img
                    src={exp.iconAs}
                    alt="as"
                    className="w-full h-full absolute transition-opacity duration-300 group-hover:opacity-0"
                  />
                  <img
                    src={exp.hoverAs}
                    alt="as-hover"
                    className="w-full h-full absolute transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                  />
                </div>
                <p>{exp.as}</p>
              </div>

              {/* Baris Lokasi */}
              <div className="flex items-center gap-4 cursor-pointer">
                <a
                  href={exp.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 cursor-pointer hover:underline group/loc w-fit"
                >
                  <div className="relative w-5 h-6">
                    <img
                      src={exp.iconLocation}
                      alt="place"
                      className="w-full h-full absolute transition-opacity duration-300 group-hover:opacity-0"
                    />
                    <img
                      src={exp.hoverLocation}
                      alt="place-hover"
                      className="w-full h-full absolute transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                    />
                  </div>
                  <p>{exp.location}</p>
                </a>
              </div>
            </div>

            {/* Bagian Deskripsi */}
            <div className="flex-1 mt-6 md:mt-0 md:pl-8 flex items-center justify-end">
              <p className="text-sm md:text-right leading-relaxed">
                {exp.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
