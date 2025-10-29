import React from "react";
import { 
  BriefcaseBusiness, 
  UserPlus, 
  Rocket, 
  CheckCircle, 
  ArrowRight, 
  Building2, 
  Users,
  Target,
  Star,
  Award,
  Clock,
  TrendingUp,
  MapPin,
  Calendar,
  Zap,
  HeartHandshake,
  Shield
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function InternshipsAndCareers() {
  const processSteps = [
    {
      step: "01",
      title: "Register & Profile Setup",
      icon: <UserPlus className="w-10 h-10 text-blue-600" />,
      description: "Sign up, create your professional profile, and tell us your career goals.",
      features: ["Digital Portfolio", "Skill Assessment", "Career Goals Mapping", "Profile Optimization"]
    },
    {
      step: "02",
      title: "Training & Preparation",
      icon: <Rocket className="w-10 h-10 text-green-600" />,
      description: "Gain real-world skills through our training and mentorship programs.",
      features: ["Industry Workshops", "Technical Skills", "Soft Skills Training", "Mock Interviews"]
    },
    {
      step: "03",
      title: "Placement Matching",
      icon: <BriefcaseBusiness className="w-10 h-10 text-purple-600" />,
      description: "We connect you with the best companies that match your profile and ambitions.",
      features: ["AI-Powered Matching", "Company Interviews", "Role Customization", "Multiple Offers"]
    },
    {
      step: "04",
      title: "Career Growth Support",
      icon: <TrendingUp className="w-10 h-10 text-orange-600" />,
      description: "Get ongoing support, guidance, and networking opportunities for long-term success.",
      features: ["Career Coaching", "Networking Events", "Skill Upgrades", "Promotion Support"]
    }
  ];

  const careerTracks = [
    {
      icon: <Building2 className="w-10 h-10 text-blue-600" />,
      title: "Corporate & Business Internships",
      description: "Gain experience in business operations, finance, administration, and strategy.",
      duration: "3-6 months",
      locations: ["Lagos", "Nairobi", "Accra", "Remote"],
      skills: ["Business Strategy", "Financial Analysis", "Project Management", "Stakeholder Communication"],
      companies: 50,
      color: "blue"
    },
    {
      icon: <Zap className="w-10 h-10 text-green-600" />,
      title: "Tech & Innovation Roles",
      description: "Work with startups and tech companies on software, digital marketing, and design.",
      duration: "4-12 months",
      locations: ["Remote", "Hybrid", "Cape Town", "Kigali"],
      skills: ["Software Development", "UI/UX Design", "Data Analytics", "Digital Marketing"],
      companies: 75,
      color: "green"
    },
    {
      icon: <Users className="w-10 h-10 text-purple-600" />,
      title: "Community & Leadership Programs",
      description: "Develop leadership, communication, and project management skills through field work.",
      duration: "6-12 months",
      locations: ["Multiple Locations", "Field Work", "Community Centers"],
      skills: ["Leadership", "Public Speaking", "Community Engagement", "Project Management"],
      companies: 30,
      color: "purple"
    }
  ];

  const successStats = [
    { number: "2,500+", label: "Placements Made", icon: <CheckCircle className="w-6 h-6" /> },
    { number: "95%", label: "Success Rate", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "200+", label: "Partner Companies", icon: <Building2 className="w-6 h-6" /> },
    { number: "15", label: "African Countries", icon: <MapPin className="w-6 h-6" /> }
  ];

  const employerBenefits = [
    {
      icon: <Target className="w-10 h-10 text-blue-600" />,
      title: "Pre-vetted Talent",
      description: "Access to thoroughly screened candidates with verified skills and experience."
    },
    {
      icon: <Clock className="w-10 h-10 text-green-600" />,
      title: "Reduced Hiring Time",
      description: "Cut your recruitment process from weeks to days with our ready-to-work talent pool."
    },
    {
      icon: <Award className="w-10 h-10 text-purple-600" />,
      title: "Quality Guarantee",
      description: "We guarantee candidate performance with our 90-day replacement policy."
    },
    {
      icon: <Shield className="w-10 h-10 text-orange-600" />,
      title: "Risk-Free Trial",
      description: "Try candidates on a project basis before making long-term commitments."
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Enhanced Hero Section */}
      <section className="relative py-24 px-6 md:px-12 to-purple-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-primary text-sm font-medium mb-6 border border-white/20">
            <Award className="w-4 h-4" />
            Africa's Leading Talent Platform
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Launch Your
            <span className="block text-transparent bg-clip-text bg-primary">
              Dream Career
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-neutral-800 max-w-3xl mx-auto leading-relaxed mb-8">
            Bridging the gap between exceptional talent and forward-thinking employers across Africa. 
            Start your journey to professional success with Corporate Boss Solutions.
          </p>
        </div>
      </section>

      {/* Success Stats */}
      <section className="py-16 px-6 md:px-12 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {successStats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-2xl bg-blue-100 text-blue-600 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section className="py-20 px-6 md:px-12 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Connecting Africa's
                <span className="text-blue-600"> Future Leaders</span>
              </h2>
              
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  <strong className="text-gray-900">Corporate Boss Solutions</strong> connects 
                  exceptional talent with top startups, SMEs, and multinational organizations 
                  across the continent.
                </p>
                <p>
                  Through our comprehensive Talent Placement Program, we ensure every candidate 
                  is equipped with practical skills, expert mentorship, and the right exposure 
                  to thrive in today's competitive job market.
                </p>
                <p>
                  Our personalized approach matches your unique strengths with opportunities 
                  that align with your career aspirations and values.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="font-semibold text-gray-900">Personalized Matching</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="font-semibold text-gray-900">Career Coaching</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="font-semibold text-gray-900">Interview Preparation</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="font-semibold text-gray-900">Ongoing Support</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center">
                      <Star className="w-8 h-8 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">4.8/5</div>
                      <div className="text-gray-600">Candidate Satisfaction</div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-900">Why Candidates Choose Us?</h3>
                    <div className="space-y-3">
                      {[
                        "Average 3-week placement time",
                        "85% receive multiple offers",
                        "30% higher starting salaries",
                        "Lifetime career support"
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Element */}
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-2xl font-bold shadow-lg">
                2,500+ Success Stories
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Process Section */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Your Path to Career Success
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven 4-step process that has helped thousands launch their dream careers
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Step Number */}
                <div className="text-blue-600 font-bold text-4xl mb-4 opacity-20 group-hover:opacity-100 transition-opacity duration-300">
                  {step.step}
                </div>
                
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{step.description}</p>
                
                {/* Features */}
                <div className="space-y-3">
                  {step.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                {/* Connector Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-200 group-hover:bg-blue-300 transition-colors duration-300"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Career Tracks */}
      <section className="py-20 px-6 md:px-12 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Career Tracks & Opportunities
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore diverse career paths tailored to your skills and aspirations
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {careerTracks.map((track, index) => (
              <article
                key={index}
                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
              >
                {/* Header */}
                <div className="text-center mb-6">
                  <div className={`w-20 h-20 rounded-2xl bg-${track.color}-100 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {track.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{track.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{track.description}</p>
                </div>
                
                {/* Details */}
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span>{track.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Building2 className="w-4 h-4" />
                      <span>{track.companies}+ Companies</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span>{track.locations.join(", ")}</span>
                  </div>
                </div>
                
                {/* Skills */}
                <div className="space-y-3 mb-6">
                  <h4 className="font-semibold text-gray-900">Key Skills:</h4>
                  <div className="flex flex-wrap gap-2">
                    {track.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>


      {/* Final CTA */}
      <section className="py-20 px-6 md:px-12 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Launch Your Career?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            Whether you're a student seeking hands-on experience or a graduate ready to launch 
            your career, Corporate Boss Solutions provides the platform, guidance, and opportunities 
            to accelerate your professional journey.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href={'/contact'}>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg">
                Contact Us
                <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-gray-200">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">24h</div>
              <div className="text-gray-600 text-sm">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">100%</div>
              <div className="text-gray-600 text-sm">Free Service</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">1:1</div>
              <div className="text-gray-600 text-sm">Career Coaching</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}