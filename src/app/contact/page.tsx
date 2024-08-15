import React from "react";
import { Meteors } from "@/components/ui/meteors";
export default function page() {
  return (
    <div className="min-h-screen bg-gray-900 py-12 pt-36">
      <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">
        Contact Us
      </h1>
      <p className="mt-4 font-normal text-base md:text-lg  max-w-lg mx-auto text-center text-gray-400">
        We're here to help with any questions about our courses, programs, or
        events. Reach out and let us know how we can assist you in your musical
        journey.
      </p>
      <Meteors number={20} />
    </div>
  );
}
