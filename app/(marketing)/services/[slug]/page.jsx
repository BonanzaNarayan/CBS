"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { servicesData } from "@/data/services";
import { notFound } from "next/navigation";
import { Card } from "@/components/ui/card";

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params.slug;
  
  const service = servicesData.find(s => s.slug === slug);
  
  if (!service) {
    notFound();
  }

  // Mock detailed content - replace with your actual data

  return (
    <main className="min-h-screen bg-white">
      {/* === Breadcrumb === */}
      <nav className="py-6 px-6 max-w-6xl mx-auto">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Link href="/" className="hover:text-blue-600 transition-colors">
            Home
          </Link>
          <span className="text-gray-400">/</span>
          <Link href="/services" className="hover:text-blue-600 transition-colors">
            Services
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-blue-600 font-medium">{service.title}</span>
        </div>
      </nav>

      {/* === Hero Section === */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Content */}
          <div className="lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-blue-600 font-medium">
                <div className="p-2 rounded-lg bg-blue-100">
                  <service.icon className="w-5 h-5" />
                </div>
                Our Services
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                {service.title}
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                {service.shortDescription}
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                {service.fullDescription}
              </p>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 py-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">50+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">98%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">24/7</div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 hover:shadow-lg text-center"
              >
                Get Started Today
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 border border-gray-300 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 text-center"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="lg:w-1/2 w-full">
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-video lg:aspect-square">
              <img
                src={service.image}
                alt={service.title}
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                property
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* === Features Section === */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Key Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to succeed with our {service.title} service
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                service.details.features.map((features, index)=>(
                    <div
                        key={index}
                        className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
                    >
                        <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                        <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-2">{features}</h3>
                    </div>
                ))
            }
          </div>
        </div>
      </section>

      {/* === Process Section === */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Process
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            How we deliver exceptional results for your business
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {service.details.process.map((step, index) => (
            <div key={step.step} className="text-center">
              <div className="relative mb-6">
                <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg mx-auto">
                  {step.step}
                </div>
                {index < service.details.process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-200 -z-10"></div>
                )}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* === Benefits Section === */}
      <section className="py-16 px-6 bg-neutral-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Us?
            </h2>
            <p className="text-xl max-w-2xl mx-auto">
              The benefits you get when working with our team
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.details.benefits.map((benefit, index) => (
              <Card
                key={index}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="font-semibold">{benefit}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}