import CTA from "@/components/CTA"
import Hero from "@/components/Hero"
import ServicesCardHome from "@/components/ServicesCardHome"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Button } from "@/components/ui/button"
import { servicesData } from "@/data/services"
import { reasons } from "@/data/why-us"
import { Target, Rocket, Globe2, Brain, Zap, Users, BarChart3 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

function page() {
  return (
    <>
      <Hero />
      
      {/* Stats Bar */}
      <section className="py-12 bg-gradient-to-r from-gray-50 to-blue-50/30 border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-2xl md:text-3xl font-bold text-gray-900">50K+</div>
              <div className="text-sm text-gray-600 font-medium">Professionals Mentored</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl md:text-3xl font-bold text-gray-900">95%</div>
              <div className="text-sm text-gray-600 font-medium">Success Rate</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl md:text-3xl font-bold text-gray-900">24/7</div>
              <div className="text-sm text-gray-600 font-medium">AI Support</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl md:text-3xl font-bold text-gray-900">100+</div>
              <div className="text-sm text-gray-600 font-medium">Enterprise Partners</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Overview */}
      <section className="min-h-[50vh] py-20 px-6 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
              <Brain className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-700">AI-Powered Platform</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-br from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Intelligent Mentorship for Modern Careers
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              <span className="text-primary font-semibold">Corporate Boss Solutions (CBS)</span> leverages advanced AI to bridge the gap between education, employment, and enterprise. Our intelligent platform delivers personalized mentorship at scale, helping individuals build future-ready skills while enabling businesses to cultivate top talent.
            </p>
            <div className="flex items-center gap-4">
              <Link href={'/about'}>
                <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6">
                  Learn More
                </Button>
              </Link>
              <Link href={'/contact'}>
                <Button variant={'outline'} className="border-gray-300 hover:border-blue-500">
                  See Demo
                </Button>
              </Link>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative">
              <AspectRatio ratio={16 / 9}>
                <Image 
                  src={'/business-ilus.avif'} 
                  alt="AI Mentorship Platform" 
                  fill
                  className="rounded-xl object-cover shadow-lg border border-gray-200"
                />
              </AspectRatio>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl rotate-12 opacity-10"></div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl -rotate-12 opacity-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="min-h-[50vh] py-20 px-6 bg-gray-50/50" id="services">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4">
              <Zap className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-700">Our Solutions</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-br from-gray-900 to-gray-700 bg-clip-text text-transparent">
              AI-Powered Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Leverage our intelligent platform to accelerate growth across individuals, teams, and organizations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {servicesData.map((service) => (
              <ServicesCardHome service={service} key={service.slug} />
            ))}
          </div>
          
          <div className="text-center">
            <Link href={'/services'}>
              <Button variant={'outline'} className="border-2 border-gray-300 hover:border-blue-500 text-gray-700 hover:text-blue-600 px-8">
                Explore All Solutions
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section id="why-us" className="min-h-[60vh] py-20 px-6 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-blue-50/20 to-indigo-100/10"></div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4">
            <Users className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-700">Why Choose Us</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 bg-gradient-to-br from-gray-900 to-gray-700 bg-clip-text text-transparent">
            The Intelligent Advantage
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-16">
            Experience the future of mentorship with our AI-driven platform that adapts to individual needs and delivers measurable results.
          </p>

          <div className="grid gap-8 md:grid-cols-3">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-100 group"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-500/10 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <reason.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800 group-hover:text-gray-900 transition-colors">
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section id="our-mission-and-vision" className="min-h-[60vh] py-20 px-6 bg-gray-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4">
              <Target className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-700">Our Purpose</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-br from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Driving Growth Through AI
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're building Africa's leading intelligent mentorship ecosystem that transforms how people learn, work, and grow through cutting-edge AI technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-500/10 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <Globe2 className="w-6 h-6 text-purple-600" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-800">
                  Our Vision
                </h2>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                To become Africa's premier AI-powered ecosystem that empowers youth, businesses, and communities through intelligent mentorship — driving sustainable growth across the continent.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-500/10 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-800">
                  Our Mission
                </h2>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                To solve Africa's skills gap and accelerate digital transformation through AI-driven training, personalized mentorship, and enterprise development initiatives.
              </p>
            </div>
          </div>

          {/* Impact Stats */}
          <div className="mt-16 bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="space-y-3">
                <BarChart3 className="w-8 h-8 text-blue-600 mx-auto" />
                <div className="text-2xl font-bold text-gray-900">10x</div>
                <div className="text-sm text-gray-600 font-medium">Faster Skill Acquisition</div>
              </div>
              <div className="space-y-3">
                <Users className="w-8 h-8 text-green-600 mx-auto" />
                <div className="text-2xl font-bold text-gray-900">85%</div>
                <div className="text-sm text-gray-600 font-medium">Career Progression Rate</div>
              </div>
              <div className="space-y-3">
                <Rocket className="w-8 h-8 text-purple-600 mx-auto" />
                <div className="text-2xl font-bold text-gray-900">2.5x</div>
                <div className="text-sm text-gray-600 font-medium">ROI for Businesses</div>
              </div>
            </div>
          </div>

          {/* Tagline */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-4 rounded-2xl border border-blue-100">
              <Rocket className="w-6 h-6 text-blue-600" />
              <p className="text-gray-700 font-semibold text-lg">
                Empowering talent, transforming businesses, and shaping Africa's digital future through AI.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <CTA />
    </>
  )
}

export default page