import Link from "next/link";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { ArrowUpRight } from "lucide-react";

export default function ServicesCardHome({ service }) {
  return (
    <Card className="group relative overflow-hidden border border-gray-100 bg-white hover:shadow-md transition-all duration-300 hover:border-blue-100 h-full">
      <CardContent className="p-6 h-full flex flex-col">
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-10 h-10 bg-blue-50 rounded-lg mb-4 group-hover:bg-blue-100 transition-colors duration-300 mx-auto">
          <service.icon className="w-5 h-5 text-blue-600" />
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-3 text-gray-900 text-center">
            {service.title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-6 text-center line-clamp-3">
            {service.shortDescription}
          </p>
        </div>

        {/* CTA */}
        <div className="text-center mt-auto">
          <Link href={`/services/${service.slug}`}>
            <Button 
              variant="ghost" 
              size="sm"
              className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 font-medium"
            >
              Learn More
              <ArrowUpRight className="w-4 h-4 ml-1" />
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}