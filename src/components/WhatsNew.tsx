import React from "react";
import { newsData } from "@/constants";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "./ui/button";
import "bootstrap-icons/font/bootstrap-icons.css";

const LatestNews = () => {
  const handleClick = (link: string) => {
    // You can handle the button click here
    window.open(link, "_blank");
  };

  return (
    <div className="bg-orange-500 h-full py-20 px-3 text-center">
      <h2 className="font-medium text-3xl mb-3">What's New? </h2>
      <Carousel className="lg:w-2/3 lg:mt-8 lg:mx-auto">
        <CarouselContent>
          {newsData.map((item, index) => (
            <CarouselItem key={index}>
              <div className="flex flex-col py-0 px-3 gap-8 mb-5 lg:text-start">
                <div className="flex flex-col gap-5 justify-center items-center lg:flex-row lg:justify-start">
                  <span className="bi bi-calendar text-[110px] leading-none relative text-white inline-block w-[110px] h-[100px]">
                    <span className="flex items-center text-5xl justify-center absolute top-7 pt-1 left-0 right-0 text-center text-slate-800 font-bold">
                      {item.date}
                    </span>
                    <span className="flex items-center text-sm justify-center absolute bottom-0 pb-1 left-0 right-0 text-center text-white font-medium">
                      {item.month}
                    </span>
                  </span>
                  <div>
                    <h3 className="font-medium my-3 text-xl text-white lg:text-start">
                      {item.title}
                    </h3>
                    <Button
                      onClick={() => handleClick(item.link)} // Open the link on button click
                      className="w-fit"
                    >
                      KNOW MORE
                    </Button>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="absolute top-20 left-0 lg:-left-10" />
        <CarouselNext className="absolute top-20 right-0 lg:-right-10" />
      </Carousel>
    </div>
  );
};

export default LatestNews;
