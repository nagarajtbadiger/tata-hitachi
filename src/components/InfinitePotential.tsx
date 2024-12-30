import React from "react";
import Image from "next/image";

const InfinitePotential = () => {
  return (
    <>
      <div className="bg-[url('/images/infinite-bg.png')] text-white p-6 pb-20">
        <Image
          src="/images/cdb-logo.png"
          alt="Description of image"
          width="400"
          height="164"
          className="h-auto w-[140px] lg:w-[160px]"
        />
        <h2 className="text-4xl mt-4 text-center mb-8">INFINITE POTENTIAL</h2>
 
        <div className="bg-[url('/images/infinite-graphic-mob.png')] md:bg-[url('/images/infinite-graphic.png')] flex flex-col md:flex-row gap-5 bg-no-repeat bg-center justify-center items-center bg-cover lg:w-4/5 mx-auto min-h-[50vh] lg:px-5 py-4">
          <blockquote className="text-white text-sm pb-10 lg:px-14 text-center w-2/4 lg:w-2/4 md:text-xl">
            Tata Hitachi has been a trusted partner in India&apos;s growth story,
            ever since the increased emphasis on infrastructure and mining
            sectors
          </blockquote>
          <blockquote className="text-white text-sm py-16 lg:px-14 text-center w-2/4 lg:w-2/4 md:text-xl">
            Chalo Desh Banaye has Tata Hitachi&apos;s clarion call to build the
            nation. &quot;Aao Kartavya Nibhaye, Chalo Desh Banaye&quot; is a celebration
            of pride, purpose and personal commitment to building the India of
            tomorrow
          </blockquote>
          <blockquote className="text-white text-sm pt-10 lg:px-14 text-center w-2/4 lg:w-2/4 md:text-xl">
            We do this by providing our customers with best-in-class equipment
            and support solutions that are reliable and innovative
          </blockquote>
        </div>
      </div>
    </>
  );
};

export default InfinitePotential;
