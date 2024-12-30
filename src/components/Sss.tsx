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

// Helper function to render carousels dynamically for solutions, spares, and services
const CarouselSection = ({
  data,
  sectionName,
}: {
  data: Array<0>;
  sectionName: string;
}) => {
  // If the provided data array is empty or null, return a fallback message
  if (!data || data.length === 0) {
    return <p>No items available in {sectionName}.</p>;
  }

  return (
    // <div className="md:basis-1/3 md:flex justify-start md:flex-col items-center p-5">
    <div className="flex flex-col flex-wrap mt-5 px-3 text-center mb-3 md:w-1/2 md:ml-12 lg:w-1/3 lg:m-0 lg:px-5 lg:my-10 lg:flex-row lg:justify-center">
      {/* Section title for the carousel */}
      <h2 className="text-3xl font-medium text-gray-900 mb-4">{sectionName}</h2>

      {/* Carousel component */}
      <Carousel
        className="w-full"
        opts={{
          align: "start",
        }}
      >
        {/* Carousel content where we map through the data */}
        <CarouselContent>
          {data.map((item, index) => (
            <CarouselItem key={item.name || index}>
              {/* Each carousel item wrapped in an anchor tag */}
              <a
                href={item.href} // Link to navigate when clicked
                target="_blank"
                rel="noopener"
                aria-label={`View ${sectionName}: ${item.name}`}
              >
                {/* Displaying the image for the carousel item */}
                <Image
                  src={item.src}
                  width={400}
                  height={300}
                  alt={item.alt}
                  className="max-w-fit min-w-full"
                />
                {/* Title for the item */}
                <h3 className="mt-4 text-xl font-semibold">{item.name}</h3>
                {/* Description for the item */}
                <p className="mt-2 text-gray-600 description">
                  {item.description}
                </p>
                {/* Button to view more details */}
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

        {/* Carousel navigation buttons */}
        <CarouselPrevious className="absolute top-36 left-1 md:top-1/2 md:-left-14 lg:left-2 lg:top-56" />
        <CarouselNext className="absolute top-36 right-1 md:top-1/2 md:-right-14 lg:right-2 lg:top-56" />
      </Carousel>
    </div>
  );
};

const ImageCarousel = () => {
  return (
    // <div className="flex justify-center flex-wrap py-10 text-center">
    <div className="sss-wrap lg:flex lg:flex-row lg:px-4">
      {/* Render carousels for Solutions, Spares, and Services */}
      <CarouselSection data={solutions} sectionName="Solutions" />
      <CarouselSection data={spares} sectionName="Spares" />
      <CarouselSection data={servicesSlides} sectionName="Services" />
    </div>
  );
};

export default ImageCarousel;
