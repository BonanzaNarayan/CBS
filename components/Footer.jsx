import React from "react";
import { Mail, MapPin, Phone, Facebook, Linkedin, Twitter, Instagram } from "lucide-react";
import { servicesData } from "@/data/services";
import Link from "next/link";
import { Link2 } from "lucide-react";
import { nav } from "@/data/nav_links";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            Corporate Boss Solutions
          </h2>
          <p className="text-gray-200 text-sm leading-relaxed mb-4">
            Empowering Africa's youth, businesses, and communities through 
            technology, innovation, and mentorship. Building sustainable 
            growth for a digital future.
          </p>
          <div className="flex gap-4 mt-4">
            <a href="#" target="_new" className="hover:text-blue-500"><Facebook size={20} /></a>
            <a href="https://www.linkedin.com/company/corporate-boss-solutions" target="_new" className="hover:text-blue-500"><Linkedin size={20} /></a>
            <a href="https://x.com/corporate__BS" target="_new" className="hover:text-blue-500"><Twitter size={20} /></a>
            <a href="https://www.instagram.com/corporate__bs" target="_new" className="hover:text-blue-500"><Instagram size={20} /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {
              nav.map((nav, index)=>(
                <li key={index}><Link href={`${nav.url}`} className="hover:text-white transition">{nav.label}</Link></li>
              ))
            }
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Our Services</h3>
          <ul className="space-y-2 text-sm">
            {
              servicesData.map((service)=>(
                <li key={service.slug}><Link href={`/services/${service.slug}`} className="hover:text-white transition">{service.title}</Link></li>
              ))
            }
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-blue-500 mt-1" />
              <span>Accra, Ghana</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-blue-500" />
              <a href="tel:+233594957712" className="hover:text-white transition">
                0594957712
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-blue-500" />
              <a href="mailto:corporatebosssolutions@gmail.com" className="hover:text-white transition">
                corporatebosssolutions@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-200">
        <p>
          © {new Date().getFullYear()} Corporate Boss Solutions. All rights reserved.
        </p>
        <div className="mt-2 flex items-center gap-2">
          Designed & Developed by <a href="https://bonanzanarayan.netlify.app/" target="_blank" className="text-blue-500 font-medium flex items-center gap-1">Bonanza Narayan <Link2 /></a>
        </div>
      </div>
    </footer>
  );
}
