import food from "../../public/Assets/icons/piso.png";
import foodHover from "../../public/Assets/icons/piso-hover.png";

import baking from "../../public/Assets/icons/bake.png";
import bakingHover from "../../public/Assets/icons/bake-hover.png";

import communication from "../../public/Assets/icons/comunication.png";
import communicationHover from "../../public/Assets/icons/comunication-hover.png";

import creative from "../../public/Assets/icons/idea.png";
import creativeHover from "../../public/Assets/icons/idea-hover.png";

const skillsData = [
  {
    id: 1,
    title: "Food Preparation",
    desc: "Mampu melakukan persiapan bahan makanan dengan tepat, higienis, dan efisien sesuai standar operasional dapur.",
    icon: food,
    iconHover: foodHover,
  },
  {
    id: 2,
    title: "Baking Techniques",
    desc: "Menguasai teknik baking pastry dan dessert untuk menghasilkan produk dengan tekstur, rasa, dan kualitas yang konsisten.",
    icon: baking,
    iconHover: bakingHover,
  },
  {
    id: 3,
    title: "Communication",
    desc: "Mampu berkomunikasi secara efektif dalam tim untuk mendukung koordinasi kerja dan kelancaran operasional.",
    icon: communication,
    iconHover: communicationHover,
  },
  {
    id: 4,
    title: "Thorough & Creative",
    desc: "Teliti dalam setiap proses kerja serta kreatif dalam mengembangkan dan menyajikan dessert yang menarik dan inovatif.",
    icon: creative,
    iconHover: creativeHover,
  },
];

export default skillsData;
