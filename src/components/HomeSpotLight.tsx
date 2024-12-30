import Image from "next/image";
import { spotlightImages } from "../constants";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import React from "react";

const HomeSpotLight = () => {
  return (
    <div>
      <Carousel>
        <CarouselContent>
          {spotlightImages.map((image, index) => (
            <CarouselItem key={index}>
              <a href={image.href} target="_blank" rel="noopener">
                <Image
                  src={image.src}
                  width={image.width}
                  height={image.height}
                  alt={image.alt}
                  className="w-full"
                />
              </a>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-2 top-1/2" />
        <CarouselNext className="absolute right-2 top-1/2" />
      </Carousel>
    </div>
  );
};

export default HomeSpotLight;
