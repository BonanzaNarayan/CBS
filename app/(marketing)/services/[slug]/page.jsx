import { notFound } from "next/navigation";
import { servicesData } from "@/data/services";
import Details from "../_components/Details";

export function generateMetadata({ params }) {
  const service = servicesData.find((s) => s.slug === params.slug);

  if (!service) return { title: "Service Not Found" };

  return {
    title: service.title,
    description: service.description || "Explore CBS services",
    openGraph: {
      title: service.title,
      description: service.details.intro,
      images: service.image ? [{ url: service.image }] : [],
    },
  };
}

export default function ServiceDetailPage({ params }) {
  const service = servicesData.find((s) => s.slug === params.slug);

  if (!service) notFound();

  return <Details />;
}
