const About = () => {
  return (
    <section id="About" className="w-full bg-[#F6F2EC] py-24">
      <div className="max-w-2xl mx-auto px-6 py-8">
        {/* Title */}
        <h2 className="text-center md:text-4xl text-3xl font-bold text-gray-800 md:mb-14 mb-7">
          About
        </h2>

        {/* Content Box */}
        <div
          className="bg-linear-to-tr from-[#C8A951] via-[#B08968] to-[#C8A951]
         rounded-3xl md:px-10 md:py-12 px-5 py-6 text-center shadow-md"
        >
          <p className="text-[#FAF9F7] md:text-lg text-md font-semibold">
            Saya merupakan mahasiswa Manajemen Universitas Pamulang yang aktif
            bekerja sebagai Pastry Cook dan Kepala Toko Amato Dessert Bar.
            Terbiasa mengelola operasional harian, tim kerja, serta terlibat
            dalam pengembangan dessert.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
