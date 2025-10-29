import Link from "next/link";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

export default function ServicesCardHome({service}) {
  return (
    <Card>
        <CardContent className="p-6 text-center">
        <service.icon className="w-10 h-10 mx-auto mb-4 text-blue-600" />
        <h3 className="text-xl text-neutral-900 font-semibold mb-2">{service.title}</h3>
        <p className="text-gray-600 mb-4">{service.shortDescription}</p>
        <Link
            href={`/services/${service.slug}`}
        >
            <Button>
                Learn More →
            </Button>
        </Link>
        </CardContent>
    </Card>
  )
}
