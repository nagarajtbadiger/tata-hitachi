import React from "react";
import Image from "next/image";
import { solutions, spares, servicesSlides } from "@/constants";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "./ui/button";

// Define the type for carousel items
interface CarouselItemData {
  name: string;
  href: string;
  src: string;
  alt: string;
  description: string;
}

// Helper function to render carousels dynamically for solutions, spares, and services
const CarouselSection = ({
  data,
  sectionName,
}: {
  data: CarouselItemData[]; // Updated to use the correct type
  sectionName: string;
}) => {
  // If the provided data array is empty or null, return a fallback message
  if (!data || data.length === 0) {
    return <p>No items available in {sectionName}.</p>;
  }

  return (
    <div className="flex flex-col flex-wrap mt-5 px-3 text-center mb-3 md:w-1/2 md:ml-12 lg:w-1/3 lg:m-0 lg:px-5 lg:my-10 lg:flex-row lg:justify-center">
      <h2 className="text-3xl font-medium text-gray-900 mb-4">{sectionName}</h2>

      <Carousel
        className="w-full"
        opts={{
          align: "start",
        }}
      >
        <CarouselContent>
          {data.map((item, index) => (
            <CarouselItem key={item.name || index}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener"
                aria-label={`View ${sectionName}: ${item.name}`}
              >
                <Image
                  src={item.src}
                  width={400}
                  height={300}
                  alt={item.alt}
                  className="max-w-fit min-w-full"
                />
                <h3 className="mt-4 text-xl font-semibold">{item.name}</h3>
                <p className="mt-2 text-gray-600 description">
                  {item.description}
                </p>
                <Button
                  variant="brandColor"
                  className="mt-4 font-normal h-9 text-[15px] hover:bg-orange-700"
                >
                  Know More
                </Button>
              </a>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="absolute top-36 left-1 md:top-1/2 md:-left-14 lg:left-2 lg:top-56" />
        <CarouselNext className="absolute top-36 right-1 md:top-1/2 md:-right-14 lg:right-2 lg:top-56" />
      </Carousel>
    </div>
  );
};

const ImageCarousel = () => {
  return (
    <div className="sss-wrap lg:flex lg:flex-row lg:px-4">
      <CarouselSection data={solutions} sectionName="Solutions" />
      <CarouselSection data={spares} sectionName="Spares" />
      <CarouselSection data={servicesSlides} sectionName="Services" />
    </div>
  );
};

export default ImageCarousel;
