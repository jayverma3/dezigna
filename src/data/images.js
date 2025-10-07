import { rollupVersion } from "vite";

import image1 from "../assets/images/DEZIGNA_SERVICES/pexels-heyho-6585617.jpg";
import galleryImage1_1 from "../assets/images/DEZIGNA_SERVICES/pexels-curtis-adams-1694007-3935340.jpg";
import galleryImage1_2 from "../assets/images/DEZIGNA_SERVICES/pexels-falling4utah-2724749.jpg";
import galleryImage1_3 from "../assets/images/DEZIGNA_SERVICES/pexels-heyho-6508346.jpg";

import image2 from "../assets/images/DEZIGNA_SERVICES/pexels-pixabay-271722.jpg";
import galleryImage2_1 from "../assets/images/DEZIGNA_SERVICES/pexels-jvdm-1454805.jpg";
import galleryImage2_2 from "../assets/images/DEZIGNA_SERVICES/pexels-pixabay-271711.jpg";
import galleryImage2_3 from "../assets/images/DEZIGNA_SERVICES/pexels-longa-1652544.jpg";

import image3 from "../assets/images/DEZIGNA_SERVICES/pexels-curtis-adams-1694007-3935350.jpg";
import galleryImage3_1 from "../assets/images/DEZIGNA_SERVICES/pexels-falling4utah-2724748.jpg";
import galleryImage3_2 from "../assets/images/DEZIGNA_SERVICES/pexels-heyho-6312077.jpg";
import galleryImage3_3 from "../assets/images/DEZIGNA_SERVICES/pexels-jworks1124-342800.jpg";

import image4 from "../assets/images/DEZIGNA_SERVICES/pexels-heyho-7061393.jpg";
import galleryImage4_1 from "../assets/images/DEZIGNA_SERVICES/pexels-heyho-11701158.jpg";
import galleryImage4_2 from "../assets/images/DEZIGNA_SERVICES/pexels-ivaoo-691710.jpg";
import galleryImage4_3 from "../assets/images/DEZIGNA_SERVICES/pexels-marywhitneyph-90319.jpg";

import image5 from "../assets/images/DEZIGNA_SERVICES/pexels-pixabay-280232.jpg";
import galleryImage5_1 from "../assets/images/DEZIGNA_SERVICES/pexels-reneterp-1358900.jpg";
import galleryImage5_2 from "../assets/images/DEZIGNA_SERVICES/pexels-reneterp-1358910.jpg";
import galleryImage5_3 from "../assets/images/DEZIGNA_SERVICES/pexels-saviesa-home-1098995-2089698.jpg";

import image6 from "../assets/images/DEZIGNA_SERVICES/pexels-heyho-6489123.jpg";
import galleryImage6_1 from "../assets/images/DEZIGNA_SERVICES/pexels-anastasia-shuraeva-5704845.jpg";
import galleryImage6_2 from "../assets/images/DEZIGNA_SERVICES/pexels-anastasia-shuraeva-5705478.jpg";
import galleryImage6_3 from "../assets/images/DEZIGNA_SERVICES/pexels-anastasia-shuraeva-5705490.jpg";

import image7 from "../assets/images/DEZIGNA_SERVICES/pexels-heyho-8134812.jpg";
import galleryImage7_1 from "../assets/images/DEZIGNA_SERVICES/pexels-atbo-66986-245219.jpg";
import galleryImage7_2 from "../assets/images/DEZIGNA_SERVICES/pexels-christa-grover-977018-1909656.jpg";
import galleryImage7_3 from "../assets/images/DEZIGNA_SERVICES/pexels-paggiarofrancesco-581087.jpg";

import image8 from "../assets/images/DEZIGNA_SERVICES/pexels-pixabay-373541.jpg";
import galleryImage8_1 from "../assets/images/DEZIGNA_SERVICES/pexels-pixabay-220152.jpg";
import galleryImage8_2 from "../assets/images/DEZIGNA_SERVICES/pexels-pixabay-373548.jpg";
import galleryImage8_3 from "../assets/images/DEZIGNA_SERVICES/pexels-vika-glitter-392079-3315286.jpg";

import image9 from "../assets/images/DEZIGNA_SERVICES/pexels-heyho-6782465.jpg";
import galleryImage9_1 from "../assets/images/DEZIGNA_SERVICES/pexels-fotoaibe-1643384.jpg";
import galleryImage9_2 from "../assets/images/DEZIGNA_SERVICES/pexels-jvdm-1457847.jpg";
import galleryImage9_3 from "../assets/images/DEZIGNA_SERVICES/pexels-polina-kovaleva-5644353.jpg";

const images = {
  "pexels-heyho-6585617.jpg": image1,
  "pexels-curtis-adams-1694007-3935340.jpg": galleryImage1_1,
  "pexels-falling4utah-2724749.jpg": galleryImage1_2,
  "pexels-heyho-6508346.jpg": galleryImage1_3,
  "pexels-pixabay-271722.jpg": image2,
  "pexels-jvdm-1454805.jpg": galleryImage2_1,
  "pexels-pixabay-271711.jpg": galleryImage2_2,
  "pexels-longa-1652544.jpg": galleryImage2_3,
  "pexels-curtis-adams-1694007-3935350.jpg": image3,
  "pexels-falling4utah-2724748.jpg": galleryImage3_1,
  "pexels-heyho-6312077.jpg": galleryImage3_2,
  "pexels-jworks1124-342800.jpg": galleryImage3_3,
  "pexels-heyho-7061393.jpg": image4,
  "pexels-heyho-11701158.jpg": galleryImage4_1,
  "pexels-ivaoo-691710.jpg": galleryImage4_2,
  "pexels-marywhitneyph-90319.jpg": galleryImage4_3,
  "pexels-pixabay-280232.jpg": image5,
  "pexels-reneterp-1358900.jpg": galleryImage5_1,
  "pexels-reneterp-1358910.jpg": galleryImage5_2,
  "pexels-saviesa-home-1098995-2089698.jpg": galleryImage5_3,
  "pexels-heyho-6489123.jpg": image6,
  "pexels-anastasia-shuraeva-5704845.jpg": galleryImage6_1,
  "pexels-anastasia-shuraeva-5705478.jpg": galleryImage6_2,
  "pexels-anastasia-shuraeva-5705490.jpg": galleryImage6_3,
  "pexels-heyho-8134812.jpg": image7,
  "pexels-atbo-66986-245219.jpg": galleryImage7_1,
  "pexels-christa-grover-977018-1909656.jpg": galleryImage7_2,
  "pexels-paggiarofrancesco-581087.jpg": galleryImage7_3,
  "pexels-pixabay-373541.jpg": image8,
  "pexels-pixabay-220152.jpg": galleryImage8_1,
  "pexels-pixabay-373548.jpg": galleryImage8_2,
  "pexels-vika-glitter-392079-3315286.jpg": galleryImage8_3,
  "pexels-heyho-6782465.jpg": image9,
  "pexels-fotoaibe-1643384.jpg": galleryImage9_1,
  "pexels-jvdm-1457847.jpg": galleryImage9_2,
  "pexels-polina-kovaleva-5644353.jpg": galleryImage9_3,
};

export default images;
