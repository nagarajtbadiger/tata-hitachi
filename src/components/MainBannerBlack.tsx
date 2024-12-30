import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";

const MainBannerBlack = () => {
  return (
    <>
      <div className="bg-slate-900 mt-10 mb-0 pb-3 flex items-center justify-center gap-5 flex-wrap">
        <div className="inline-flex gap-5 mt-3 flex-row items-end justify-center md:items-center lg:mt-0">
          <Image
            src="/images/zaxis-gi.png"
            alt="Description of image"
            width="256"
            height="150"
            className="h-auto w-[140px] lg:w-[160px]"
          />
          <Image
            src="/images/unbeatable-performance.png"
            alt="Description of image"
            width="256"
            height="66"
            className="h-auto w-[140px] lg:w-[180px]"
          />
        </div>
        <div className="inline-flex gap-5 flex-row items-center justify-center">
          <Image
            src="/images/banner-hero-img.png"
            alt="Description of image"
            width="256"
            height="213"
            className="h-auto w-[150px] lg:w-[180px]"
          />
          <div className="inline-flex gap-3 flex-col items-start justify-center lg:flex-row lg:mt-3">
            <Button variant="outline">Download Brochure</Button>
            <Button variant="brandColor">Know More</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBannerBlack;
