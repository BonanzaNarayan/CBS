"use client";
import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // You can integrate EmailJS, Supabase, or a backend endpoint here
  };

  return (
    <main className="min-h-screen text-gray-800">
      {/* Hero Section */}
      <header className="relative py-20 px-6 md:px-12 bg-blue-50 text-center overflow-hidden">
        <div className="max-w-3xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-gray-700">
            Have a question, partnership idea, or want to join our programs? We’d love to hear from you.
          </p>
        </div>
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/contact-bg.jpg"
            alt="Team collaboration background"
            fill
            className="object-cover"
          />
        </div>
      </header>

      {/* Contact Section */}
      <section className="py-20 px-6 md:px-12 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Contact Info */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
          <p className="text-gray-700 mb-6">
            Reach out to our team for inquiries about training programs, partnerships, or media collaborations. We’ll get back to you within 24 hours.
          </p>

          <ul className="space-y-5">
            <li className="flex items-start gap-3">
              <Mail className="text-blue-600 w-6 h-6 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900">Email</h3>
                <p className="text-gray-700">info@corporateboss-solutions.com</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="text-blue-600 w-6 h-6 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900">Phone</h3>
                <p className="text-gray-700">0594957712</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="text-blue-600 w-6 h-6 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900">Address</h3>
                <p className="text-gray-700">
                  Accra - Tema, Ghana
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="text-blue-600 w-6 h-6 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900">Office Hours</h3>
                <p className="text-gray-700">Mon – Fri: 9:00 AM – 5:00 PM</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Right: Contact Form */}
        <form
          action='https://formsubmit.co/info@corporateboss-solutions.com'
          method="POST"
          className="bg-white shadow-lg rounded-2xl p-8"
        >
          <h2 className="text-2xl font-bold mb-6 text-blue-900">
            Send Us a Message
          </h2>

          <div className="space-y-5">
            <div>
              <label htmlFor="name" className="block font-semibold mb-1">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-semibold mb-1">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block font-semibold mb-1">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="message" className="block font-semibold mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
              ></textarea>
            </div>

            <Button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg flex items-center gap-2"
            >
              <Send size={18} /> Send Message
            </Button>
          </div>
        </form>
      </section>

      {/* Optional Map or Image */}
      <section className="relative w-full h-fit">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254133.52713415658!2d-0.3445424528422615!3d5.591185714579514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa550c8a8ec9f1b33%3A0x40669aa39b1da4cc!2sCorporate%20Boss%20Solutions!5e0!3m2!1sen!2sgh!4v1761759951193!5m2!1sen!2sgh" width="100%" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </section>
    </main>
  );
}
