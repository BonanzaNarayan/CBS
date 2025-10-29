import React from "react";
import { 
  GraduationCap, 
  Users, 
  Star, 
  Target, 
  Rocket, 
  ArrowRight, 
  CheckCircle, 
  PlayCircle,
  Award,
  Clock,
  TrendingUp,
  BookOpen,
  Shield,
  HeartHandshake
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AcademyPage() {
  const learningTracks = [
    {
      icon: <GraduationCap className="w-10 h-10 text-blue-600" />,
      title: "Professional Development",
      description: "Master soft and technical skills to advance your career and personal brand.",
      features: ["Leadership Training", "Communication Skills", "Personal Branding", "Career Strategy"],
      duration: "6-8 weeks",
      level: "All Levels",
      color: "blue"
    },
    {
      icon: <Target className="w-10 h-10 text-green-600" />,
      title: "Entrepreneurship & Innovation",
      description: "Learn how to launch, manage, and scale startups with expert mentorship.",
      features: ["Business Planning", "Funding Strategies", "Market Analysis", "Growth Hacking"],
      duration: "8-10 weeks",
      level: "Intermediate",
      color: "green"
    },
    {
      icon: <Rocket className="w-10 h-10 text-purple-600" />,
      title: "Tech & Digital Transformation",
      description: "Upskill in digital tools, strategy, and technology-driven growth models.",
      features: ["Digital Marketing", "Data Analytics", "AI Fundamentals", "Tech Strategy"],
      duration: "10-12 weeks",
      level: "Beginner+",
      color: "purple"
    }
  ];

  const learningModel = [
    {
      icon: <Users className="w-12 h-12 text-blue-600" />,
      title: "Expert Mentorship",
      description: "One-on-one and group mentorship from industry professionals with proven track records.",
      features: ["Personalized Guidance", "Industry Insights", "Career Coaching", "Networking"]
    },
    {
      icon: <BookOpen className="w-12 h-12 text-green-600" />,
      title: "Project-Based Learning",
      description: "Real-world projects that test and apply your knowledge in practical scenarios.",
      features: ["Portfolio Building", "Case Studies", "Live Projects", "Problem Solving"]
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-purple-600" />,
      title: "Career Acceleration",
      description: "Job placement, internships, and exposure through our extensive corporate network.",
      features: ["Interview Prep", "Resume Building", "Job Matching", "Career Support"]
    }
  ];

  const stats = [
    { number: "2,000+", label: "Graduates", icon: <GraduationCap className="w-6 h-6" /> },
    { number: "95%", label: "Success Rate", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "50+", label: "Industry Experts", icon: <Users className="w-6 h-6" /> },
    { number: "12", label: "Countries", icon: <Shield className="w-6 h-6" /> }
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium mb-6 border border-white/20">
            <Award className="w-4 h-4" />
            Top-Rated Professional Academy
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Transform Your
            <span className="block text-transparent bg-clip-text bg-primary">
              Career Future
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-neutral-800 max-w-3xl mx-auto leading-relaxed mb-8">
            Empowering Africa's next generation of leaders, innovators, and professionals
            through hands-on mentorship, cutting-edge skills, and real-world experience.
          </p>
          
          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button className=" px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg">
              Start Learning Free
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" >
              <PlayCircle className="mr-2 w-5 h-5" />
              Watch Demo
            </Button>
          </div> */}

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>Industry-Recognized Certificates</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-blue-400" />
              <span>Flexible Learning</span>
            </div>
            <div className="flex items-center gap-2">
              <HeartHandshake className="w-5 h-5 text-red-400" />
              <span>1-on-1 Mentorship</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 md:px-12 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
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
                Africa's Premier
                <span className="text-blue-600"> Professional Learning Hub</span>
              </h2>
              
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  The <strong className="text-gray-900">Corporate Boss Academy</strong> is the cornerstone 
                  of the CBS ecosystem, designed to bridge the gap between academic knowledge 
                  and real-world professional requirements.
                </p>
                <p>
                  We combine cutting-edge curriculum, industry expert mentorship, and 
                  hands-on project experience to create transformative learning journeys 
                  that propel careers forward.
                </p>
                <p>
                  Our programs are meticulously crafted to address the evolving demands 
                  of today's competitive job market while fostering innovation and 
                  entrepreneurial thinking.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="font-semibold text-gray-900">Job-Ready Skills</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="font-semibold text-gray-900">Expert Mentors</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="font-semibold text-gray-900">Career Support</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="font-semibold text-gray-900">Global Network</span>
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
                      <div className="text-2xl font-bold text-gray-900">4.9/5</div>
                      <div className="text-gray-600">Student Rating</div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-900">Why Choose Our Academy?</h3>
                    <div className="space-y-3">
                      {[
                        "Industry-aligned curriculum",
                        "Personalized learning paths",
                        "Project-based assessment",
                        "Lifetime career support",
                        "Global certification"
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
                Join 2,000+ Graduates
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Learning Tracks */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Specialized Learning Tracks
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose your path to professional excellence with our comprehensive programs
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {learningTracks.map((track, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Header */}
                <div className="text-center mb-6">
                  <div className={`w-20 h-20 rounded-2xl bg-${track.color}-100 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {track.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{track.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{track.description}</p>
                </div>
                
                {/* Features */}
                <div className="space-y-4 mb-6">
                  <h4 className="font-semibold text-gray-900">What You'll Learn:</h4>
                  <div className="space-y-3">
                    {track.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Learning Model */}
      <section className="py-20 px-6 md:px-12 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Proven Learning Model
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A comprehensive approach designed for maximum impact and career transformation
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {learningModel.map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{item.description}</p>
                
                <div className="space-y-3">
                  {item.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}