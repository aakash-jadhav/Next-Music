"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { cn } from "@/utils/cn";

export default function ContactForm() {
  return (
    <div className="max-w-xl mx-auto my-4 ">
      <LabelInputContainer className="mb-4">
        <Input id="email" placeholder="Your Email Address" type="email" />
      </LabelInputContainer>
      <textarea
        className="bg-[#27272a] text-white rounded p-4 w-full  "
        name="message"
        id="message"
        placeholder="Your message"
        rows={5}
      ></textarea>
      <button className="px-8 mt-4 py-2 w-full sm:w-[40%] rounded-md bg-teal-500 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500">
        Send Message
      </button>
    </div>
  );
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
