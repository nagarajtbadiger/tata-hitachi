import React, { useState } from "react";
import { data } from "@/constants";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "./ui/button";
import Image from "next/image";

const Showroom = () => {
  const [selectedTab, setSelectedTab] = useState(data.categories[0].name);
  return (
    <>
      <ul className="flex items-stretch justify-center p-1 flex-wrap md:hidden">
        {data.categories.map((category) => (
          <li
            key={category.name}
            className="w-1/3 lg:basis-0 leading-[1.1] mb-2 min-h-full text-center lg:m-0 lg:text-left"
          >
            <a
              href={category.link}
              target="_blank"
              rel="noopener noreferrer"
              className="border rounded-lg border-gray-400 m-1 p-1 block h-full hover:bg-gray-100 lg:border-0 lg:m-0"
            >
              <Image
                src={category.image}
                alt={category.name}
                className="w-auto rounded-lg mx-auto lg:hidden"
                width={150}
                height={150}
              />
              <h4 className="font-medium text-[14px] px-2 lg:text-lg">
                {category.name}
              </h4>
            </a>
          </li>
        ))}
      </ul>

      <div className="hidden md:flex md:justify-start flex-wrap md:items-stretch">
        <div className="w-1/3 lg:w-1/5">
          <ul className="flex flex-col h-full bg-slate-50">
            {data.categories.map((category) => (
              <li
                key={category.name}
                className={`p-5 cursor-pointer mb-0.5 transition-all ${
                  selectedTab === category.name
                    ? "bg-orange-500 text-white"
                    : "hover:bg-orange-500 hover:text-white "
                }`}
                onClick={() => setSelectedTab(category.name)}
              >
                {category.name}
              </li>
            ))}
          </ul>
        </div>

        {data.categories.map(
          (category) =>
            selectedTab === category.name && (
              <div
                key={category.name}
                className="w-2/3 lg:w-4/5 py-4 px-8 pb-8"
              >
                <h2 className="text-3xl font-medium mb-3">{category.name}</h2>
                <p className="mb-3">{category.desc}</p>
                <Carousel
                  className="w-10/12 mx-auto lg:w-11/12"
                  opts={{
                    align: "start",
                    loop: true,
                  }}
                >
                  <CarouselContent>
                    {category.products?.length ? (
                      category.products.map((product) => (
                        <CarouselItem
                          key={product.title}
                          className="lg:basis-1/3"
                        >
                          <a
                            href={product.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Image
                              src={product.image}
                              alt={product.title}
                              width={400}
                              height={293}
                              className="w-full"
                            />
                            <h4 className="font-medium text-xl mt-5 mb-3 text-orange-500">
                              {product.title}
                            </h4>
                            <p className="description">{product.description}</p>
                            <Button
                              variant="brandColor"
                              className="mt-4 font-normal h-9 text-[15px] hover:bg-orange-700"
                            >
                              Know More
                            </Button>
                          </a>
                        </CarouselItem>
                      ))
                    ) : (
                      <div></div>
                    )}
                  </CarouselContent>
                  <CarouselPrevious className="absolute -left-12 top-1/2" />
                  <CarouselNext className="absolute -right-12 top-1/2" />
                </Carousel>
              </div>
            )
        )}
      </div>
    </>
  );
};

export default Showroom;
