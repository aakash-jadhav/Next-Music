import React from "react";
import { Meteors } from "@/components/ui/meteors";
import ContactForm from "@/components/ContactForm";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
export default function page() {
  const words = ` We're here to help with any questions about our courses, programs, or
        events. Reach out and let us know how we can assist you in your musical
        journey.`;
  return (
    <div className="min-h-screen bg-black py-12 pt-36 min-w-full overflow-hidden relative px-4">
      <h1 className="text-3xl md:text-7xl text-center font-sans font-bold mb-8 text-white">
        Contact Us
      </h1>

      <div className="max-w-xl mx-auto text-center mb-8">
        <TextGenerateEffect duration={0.3} filter={false} words={words} />
      </div>

      <Meteors number={20} />
      <ContactForm />
    </div>
  );
}
