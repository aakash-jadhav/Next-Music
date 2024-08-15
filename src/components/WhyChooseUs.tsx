"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const musicSchoolContent = [
  {
    title: "Discover your sound with us: A Personal Journey in music Mastery",
    description:
      "Embark on a musical journey that's uniquely yours. Our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and creativity. At our music school, your aspirations meet our dedicated support, creating a harmonious path to mastery",
  },
  {
    title: "Master the Art of Improvisation",
    description:
      "Unleash your creativity through spontaneous musical expression. Learn techniques to improvise with confidence and style.",
  },
  {
    title: "Unlock Your Inner Musician: Comprehensive Music Theory",
    description:
      "Gain a deep understanding of music theory to enhance your playing, composition, and songwriting skills.",
  },
  {
    title: "Ensemble Harmony: Collaborative Music Making",
    description:
      "Experience the joy of creating music together. Learn to play in various ensembles and develop your collaborative skills.",
  },
  {
    title: "Music Business Bootcamp: From Artist to Entrepreneur",
    description:
      "Learn the ins and outs of the music industry. Discover strategies for building a successful music career.",
  },
];

export default function WhyChooseUs() {
  return (
    <div className="p-10">
      <StickyScroll content={musicSchoolContent} />
    </div>
  );
}
