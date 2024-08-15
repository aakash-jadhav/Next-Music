"use client";
import Link from "next/link";
import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";
export default function UpcomingWebinar() {
  const featuredWebinars = [
    {
      title: "Introduction to Music Theory",
      description:
        "Learn the fundamentals of music theory and how it applies to various musical styles.",
      slug: "introduction-to-music-theory",
      isFeatured: true,
    },
    {
      title: "Advanced Piano Techniques",
      description:
        "Dive deep into advanced piano techniques and explore the intricacies of playing the piano.",
      slug: "advanced-piano-techniques",
      isFeatured: true,
    },
    {
      title: "Music Composition",
      description:
        "Discover the art of composing music and learn how to create your own musical pieces.",
      slug: "music-composition",
      isFeatured: true,
    },
    {
      title: "Music Production",
      description:
        "Explore the world of music production and learn how to create professional-quality music.",
      slug: "music-production",
      isFeatured: true,
    },
    {
      title: "Music History",
      description:
        "Explore the rich history of music and discover the evolution of music over time.",
      slug: "music-history",
      isFeatured: true,
    },
    {
      title: "Music Therapy",
      description:
        "Explore the therapeutic benefits of music and learn how it can be used for relaxation and healing.",
      slug: "music-therapy",
      isFeatured: true,
    },
  ];
  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            Featured Webinars
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Enhanced musical journey
          </p>
        </div>
        <div className="mt-10">
          <HoverEffect
            items={featuredWebinars.map((webinar) => ({
              title: webinar.title,
              description: webinar.description,
              link: webinar.slug,
            }))}
          />
        </div>
        <div className="mt-10 text-center">
          <Link
            className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 trasition duration-200   "
            href={"/"}
          >
            View All webinars
          </Link>
        </div>
      </div>
    </div>
  );
}
