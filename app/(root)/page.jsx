import CTA from "@/components/CTA"
import Hero from "@/components/Hero"
import ServicesCardHome from "@/components/ServicesCardHome"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Button } from "@/components/ui/button"
import { servicesData } from "@/data/services"
import { reasons } from "@/data/why-us"
import { Target } from "lucide-react"
import { Rocket } from "lucide-react"
import { Globe2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

function page() {
  return (
    <>
      <Hero />
      <section className="min-h-[50vh] mt-10 px-6 mb-20 grid grid-cols-1 md:grid-cols-2" id="about-overview">
        <div>
          <AspectRatio ratio={16 / 9}>
            <Image src={'/business-ilus.avif'} alt="about overview image" height={100} width={1000} className=" rounded-md object-cover"/>
          </AspectRatio>
        </div>
        <div className="mt-30 sm:mt-20">
          <h2 className="text-3xl md:text-5xl mb-5">Who We Are</h2>
          <p className=""><span className="text-primary font-medium">Corporate Boss Solutions (CBS)</span> is a skills and career development organization that connects education, employment, and enterprise. We train individuals for the future of work, help businesses find and develop the right talent, and offer consulting that drives sustainable growth.
          </p>
        </div>
      </section>

      <section className="min-h-[50vh] py-4 px-6 mb-10" id="services">
        <h2 className="text-3xl md:text-5xl mb-5">What We Offer</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mb-5">
          {
            servicesData.map((service)=>(
              <ServicesCardHome service={service} key={service.slug}/>
            ))
          }
        </div>
        <div className="flex items-center justify-center">
          <Link href={'/services'}>
            <Button variant={'outline'}>
              Read More 
            </Button>
          </Link>
        </div>
      </section>

      <section
        id="why-us"
        className="min-h-[60vh] py-16 px-6 md:px-12 bg-gray-50 mb-10"
      >
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-gray-900">
              Why Choose Us
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-12">
              Corporate Boss Solutions (CBS) empowers individuals and organizations
              through a proven approach that combines learning, mentorship, and
              transformation.
            </p>

            <div className="grid gap-8 md:grid-cols-3">
              {reasons.map((reason, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <reason.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    {reason.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="our-mission-and-vision"
          className="min-h-[60vh] py-16 px-6 md:px-12 mb-10"
        >
          <div className="max-w-6xl mx-auto text-center">
            {/* Section Heading */}
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
              Our Mission & Vision
            </h1>
            <p className="text-gray-600 max-w-3xl mx-auto mb-12 text-base md:text-lg leading-relaxed">
              Corporate Boss Solutions (CBS) is an ecosystem transforming how
              Africans learn, work, and grow. We’re building Africa’s leading
              platform that empowers youth, businesses, and communities through
              technology, innovation, and mentorship.
            </p>

            {/* Vision & Mission Cards */}
            <div className="grid md:grid-cols-2 gap-8 text-left">
              {/* Vision */}
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <Globe2 className="w-8 h-8 text-blue-600" />
                  <h2 className="text-2xl font-semibold text-gray-800">
                    Our Vision
                  </h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  To become Africa’s leading ecosystem that empowers youth,
                  businesses, and communities through technology, innovation, and
                  mentorship — driving sustainable growth across the continent.
                </p>
              </div>

              {/* Mission */}
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-8 h-8 text-blue-600" />
                  <h2 className="text-2xl font-semibold text-gray-800">
                    Our Mission
                  </h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  To solve unemployment, build digital and leadership skills, and
                  accelerate Africa’s digital transformation through inclusive
                  training, mentorship, and enterprise development initiatives.
                </p>
              </div>
            </div>

            {/* Tagline / Inspirational Footer */}
            <div className="mt-12 flex items-center justify-center gap-3">
              <Rocket className="w-6 h-6 text-blue-600" />
              <p className="text-gray-700 font-medium text-lg">
                Empowering people, transforming businesses, and shaping Africa’s
                future — one leader at a time.
              </p>
            </div>
          </div>
        </section>
        <CTA />
    </>
  )
}

export default page