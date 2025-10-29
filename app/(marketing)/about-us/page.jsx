import Image from "next/image";
import React from "react";
import { Users, Target, Globe2, Rocket, Heart, Award, TrendingUp, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <main className="min-h-screen text-gray-800">
      {/* Enhanced Hero Section */}
      <header className="relative py-24 px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0"></div>
          <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-primary text-sm font-medium mb-6 border border-white/20">
            <Award className="w-4 h-4" />
            Leading Talent Development Platform
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Shaping Africa's
            <span className="block">
              Future Workforce
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-neutral-800 max-w-3xl mx-auto leading-relaxed mb-8">
            Empowering young professionals, startups, and organizations through
            skills, mentorship, and opportunities that drive meaningful impact.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button>
              Join Our Mission
            </Button>
            <Button variant="outline">
              Our Impact Story
            </Button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </header>

      {/* Who We Are - Enhanced */}
      <section className="py-20 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
              <Shield className="w-4 h-4" />
              Trusted Since 2018
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Building Bridges Between
              <span className="text-blue-600"> Education & Industry</span>
            </h2>
            
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                <strong className="text-gray-900">Corporate Boss Solutions (CBS)</strong> is a professional development and 
                employability-focused organization that bridges the critical gap between academic 
                education and the dynamic job market.
              </p>
              <p>
                We believe every young African deserves access to the skills, mentorship, and 
                opportunities needed to thrive in today's rapidly evolving business landscape.
              </p>
              <p>
                Through comprehensive training programs, strategic internship placements, 
                corporate partnerships, and dedicated mentorship initiatives, CBS has become 
                the trusted partner for students, graduates, and forward-thinking companies.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">6+</div>
                <div className="text-sm text-gray-600">Years of Excellence</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">50+</div>
                <div className="text-sm text-gray-600">Industry Partners</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]">
              <img
                src="https://img.freepik.com/premium-vector/team-four-diverse-people-work-together-laptops-modern-office-with-city-view_150234-81332.jpg"
                alt="Corporate Boss Solutions team collaboration"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">95% Success Rate</div>
                  <div className="text-sm text-gray-600">Job Placement</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision - Enhanced */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Guiding Principles
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The foundation that drives everything we do at Corporate Boss Solutions
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center">
                  <Target className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                To empower individuals and organizations through skill-based education, 
                transformative mentorship, and innovative talent solutions that drive 
                sustainable career growth and business excellence across Africa.
              </p>
            </div>
            
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-purple-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center">
                  <Globe2 className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                To become Africa's premier ecosystem for employability development — 
                creating seamless bridges that connect education, innovation, and 
                meaningful opportunities for every aspiring professional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Core Values */}
      <section className="py-20 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Core Values
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The principles that guide every decision and action we take
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Users className="w-12 h-12 text-blue-600" />,
              title: "Collaboration",
              desc: "We believe in the transformative power of teamwork — building strong, lasting relationships between learners, mentors, and organizations to create collective success.",
              color: "blue"
            },
            {
              icon: <Rocket className="w-12 h-12 text-purple-600" />,
              title: "Innovation",
              desc: "We continuously evolve our programs and approaches to match modern business trends, leveraging cutting-edge technologies and methodologies.",
              color: "purple"
            },
            {
              icon: <Heart className="w-12 h-12 text-red-600" />,
              title: "Impact-Driven",
              desc: "Every initiative we undertake is designed to create measurable, lasting change in individual lives, businesses, and communities across Africa.",
              color: "red"
            },
          ].map((value, i) => (
            <article
              key={i}
              className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200"
            >
              <div className={`w-20 h-20 rounded-2xl bg-${value.color}-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {value.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Enhanced Impact Section */}
      <section className=" border py-20 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-primary/90 rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-purple-600/80 rounded-full"></div>
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Transforming Lives Across Africa
          </h2>
          <p className="text-xl text-neutral-800 max-w-2xl mx-auto mb-16 leading-relaxed">
            Through strategic partnerships with universities, startups, and corporations, 
            we've created a lasting impact that spans multiple countries and sectors.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "10,000+", label: "Students & Graduates Trained", icon: "🎓" },
              { number: "500+", label: "Successful Internship Placements", icon: "💼" },
              { number: "200+", label: "Corporate & University Partners", icon: "🤝" },
              { number: "5+", label: "African Countries Reached", icon: "🌍" },
            ].map((stat, i) => (
              <div 
                key={i} 
                className="bg-white/10 rounded-2xl p-8 border hover:bg-white/15 transition-all duration-300 group"
              >
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <h3 className="text-4xl font-bold mb-2">{stat.number}</h3>
                <p className="text-neutral-800 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Story Section */}
      <section className="py-20 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              From Vision to
              <span className="text-blue-600"> Movement</span>
            </h2>
            
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                Founded in 2018 with a clear vision to close Africa's employability gap, 
                CBS began as a grassroots initiative helping students transition from 
                the classroom to the corporate world.
              </p>
              <p>
                What started as small-scale mentorship sessions has evolved into a 
                comprehensive development ecosystem connecting thousands of learners 
                with leading companies and experienced mentors across the continent.
              </p>
              <p>
                Today, CBS stands as a trusted name for career readiness and corporate 
                development, driving measurable growth for individuals and organizations 
                while shaping the future of Africa's workforce.
              </p>
            </div>
            
            <div className="flex items-center gap-4 pt-6">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <Award className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <div className="font-bold text-gray-900">6+ Industry Awards</div>
                <div className="text-sm text-gray-600">Recognized Excellence</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]">
              <img
                src="https://img.freepik.com/premium-vector/man-woman-sit-chair-with-laptop-tree_1187092-70504.jpg"
                alt="Mentorship session at Corporate Boss Solutions"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Experience Badge */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-2xl font-bold shadow-lg">
              Since 2018
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}