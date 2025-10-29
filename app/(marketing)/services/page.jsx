"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { servicesData } from "@/data/services";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* === Hero Section === */}
      <section className=" hero-service relative py-16 md:py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl text-white leading-relaxed max-w-3xl mx-auto">
            Empowering individuals, startups, and organizations through
            technology, innovation, and mentorship. Explore what Corporate Boss
            Solutions can do for you.
          </p>
        </div>
      </section>

      {/* === Services List Section === */}
      <section className="py-16 md:py-20 px-6 max-w-6xl mx-auto">
        <div className="space-y-12">
          {servicesData.map((service, index) => (
            <article 
              key={service.slug}
              className="flex flex-col lg:flex-row gap-8 items-center group even:lg:flex-row-reverse"
            >
              {/* Image Section */}
              <div className="lg:w-1/2 w-full">
                <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-video lg:aspect-square">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority={index < 2}
                  />
                  <div className="absolute inset-0 bg-blue-600/10 group-hover:bg-blue-600/5 transition-colors duration-500" />
                  
                  {/* Service Icon Badge */}
                  <div className="absolute top-6 left-6 p-3 rounded-xl bg-white/90 backdrop-blur-sm shadow-sm">
                    <service.icon className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="lg:w-1/2 w-full space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-sm font-medium text-blue-600">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Service {index + 1}
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    {service.title}
                  </h2>
                  
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {service.shortDescription}
                  </p>
                  
                  <p className="text-gray-500 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Sed do eiusmod tempor incididunt ut labore et dolore magna 
                    aliqua. Ut enim ad minim veniam.
                  </p>
                </div>

                {/* Features List */}
                <ul className="space-y-3">
                  {[1, 2, 3].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-gray-600">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>Feature {item} description goes here</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 hover:shadow-lg hover:gap-4 group/btn"
                >
                  Learn More About {service.title}
                  <span className="transition-all duration-300 group-hover/btn:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* === CTA Section === */}
      <section className="py-16 md:py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Let's discuss how our services can help you achieve your goals. 
              Get in touch for a free consultation.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 hover:shadow-lg"
            >
              Get Free Consultation
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 border border-gray-300 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}