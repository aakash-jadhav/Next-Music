"use client";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const musicSchoolTestimonials = [
  {
    quote:
      "Joining the music school was the best decision I've ever made. The instructors are passionate and knowledgeable, and the curriculum is well-structured. I've learned so much and can't wait to see what the future holds!",
    name: "John Doe",
    title: "Music Student",
  },
  {
    quote:
      "The music school has been a game-changer for me. The instructors are top-notch, and the curriculum is challenging but rewarding. I've gained so much confidence in my abilities and can't wait to see where this journey takes me!",
    name: "Jane Smith",
    title: "Music Student",
  },
  {
    quote:
      "The music school has been a game-changer for me. The instructors are top-notch, and the curriculum is challenging but rewarding. I've gained so much confidence in my abilities and can't wait to see where this journey takes me!",
    name: "Jane Smith",
    title: "Music Student",
  },
  {
    quote:
      "The music school has been a game-changer for me. The instructors are top-notch, and the curriculum is challenging but rewarding. I've gained so much confidence in my abilities and can't wait to see where this journey takes me!",
    name: "Jane Smith",
    title: "Music Student",
  },
  {
    quote:
      "The music school has been a game-changer for me. The instructors are top-notch, and the curriculum is challenging but rewarding. I've gained so much confidence in my abilities and can't wait to see where this journey takes me!",
    name: "Jane Smith",
    title: "Music Student",
  },
];
export default function MusciSchoolTestimonials() {
  return (
    <div className="h-[40rem] w-full  dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold text-center mb-8">
        Hear our Harmony: Voices of Success
      </h2>
      <div className=" flex justify-center w-full  overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-2-6xl ">
          <InfiniteMovingCards
            items={musicSchoolTestimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
}
