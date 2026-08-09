import { PROPERTIES } from "@/lib/data";
import PropertyDetailContent from "./PropertyDetailContent";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return PROPERTIES.map((property) => ({
    slug: property.slug,
  }));
}

interface PageProps {
  params: {
    slug: string;
  };
}

export default function Page({ params }: PageProps) {
  const property = PROPERTIES.find((p) => p.slug === params.slug);

  if (!property) {
    notFound();
  }

  return <PropertyDetailContent property={property} />;
}
