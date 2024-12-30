import React from "react";
import { testimonials } from "@/constants";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import "bootstrap-icons/font/bootstrap-icons.css";

const LatestNews = () => {
  return (
    <div className="bg-orange-50 h-full py-20 px-4">
      <h2 className="font-medium text-3xl mb-3 text-center">Testimonials</h2>
      <Carousel className="lg:w-10/12 lg:mt-8 lg:mx-auto">
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index}>
              <Dialog>
                <DialogTrigger className="cursor-pointer" asChild>
                  <figure className="lg:flex lg:flex-row">
                    <span className="relative inline-flex items-center justify-center lg:text-start lg:w-2/5">
                      <Image
                        className="rounded-md"
                        src={testimonial.imageUrl}
                        alt={testimonial.altText}
                        width="400"
                        height="240"
                      />
                      <i className="bi bi-play-fill text-[26px] text-white rounded-full absolute text-center border-white border-2 w-[50px] h-[50px] py-1 px-3 bg-slate-900 bg-opacity-20 hover:bg-orange-500"></i>
                    </span>

                    <figcaption className="lg:p-3 lg:w-3/5">
                      <h3 className="text-md mb-3 mt-3 lg:mt-0 text-xl">
                        &quot;{testimonial.description}&quot;
                      </h3>

                      <h3 className="font-medium text-end lg:mt-5">
                        - {testimonial.user}
                      </h3>
                      <h5 className="text-gray-600 text-end">
                        {testimonial.organization}
                      </h5>
                    </figcaption>
                  </figure>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[1000px] p-1">
                  {/* Embed YouTube Video in Dialog Content */}
                  <div className="video-embed-wrapper">
                    <iframe
                      width="1280"
                      height="600"
                      src={testimonial.videoUrl.replace(
                        "https://youtu.be",
                        "https://www.youtube.com/embed"
                      )}
                      title={`Video testimonial by ${testimonial.user}`}
                      className="aspect-video max-w-full h-fit"
                      loading="lazy"
                    ></iframe>
                  </div>
                </DialogContent>
              </Dialog>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="absolute top-20 left-0 lg:-left-12" />
        <CarouselNext className="absolute top-20 right-0 lg:-right-12" />
      </Carousel>
    </div>
  );
};

export default LatestNews;
