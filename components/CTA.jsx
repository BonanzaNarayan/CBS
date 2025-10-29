import React from "react";
import { ArrowRight, Rocket } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

export default function CTA() {
  return (
    <section
      id="cta"
      className="relative bg-gray-200 py-20 px-6 md:px-12 overflow-hidden"
    >
      {/* Background Accent */}
      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10 bg-cover bg-center"></div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="flex justify-center mb-4">
          <Rocket className="w-10 h-10" />
        </div>

        <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-snug">
          Ready to Transform Your Future?
        </h2>
        <p className="max-w-2xl mx-auto text-lg md:text-xl mb-8">
          Join Corporate Boss Solutions today and take your business or career
          to the next level through technology, mentorship, and innovation.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <Link
            href="/contact"
          >
            <Button>Get Started <ArrowRight size={20} /></Button>
          </Link>
          <Link
            href="/services"
          >
            <Button variant={'outline'}>Explore Services</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
