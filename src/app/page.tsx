"use client";
import HomeSpotLight from "@/components/HomeSpotLight";
import SearchForm from "@/components/SearchForm";
import QuickLinks from "@/components/QuickLinks";
import Showroom from "@/components/Showroom";

import Nav from "@/components/Nav";
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Sss from "@/components/Sss";
import WhatsNew from "@/components/WhatsNew";
import Testimonials from "@/components/Testimonials";
import MainBannerBlack from "@/components/MainBannerBlack";
import InfinitePotential from "@/components/InfinitePotential";

export default function Home() {
  const [isNavOpen, setNavOpen] = useState(false);
  const [isQlOpen, setQlOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!isNavOpen);
  };

  const toggleQl = () => {
    setQlOpen(!isQlOpen);
  };

  return (
    <>
      <aside className="flex justify-between lg:justify-end bg-black">
        <SearchForm />
        <Button
          onClick={toggleQl}
          variant="link"
          className="text-white text-[30px] lg:hidden leading-none p-2"
        >
          <i className="bi bi-three-dots"></i>
        </Button>
      </aside>

      <div className={`quick-links ${isQlOpen ? "active" : ""} lg:hidden z-50`}>
        <QuickLinks />
      </div>
      <header
        className={`main-nav z-50 bg-black text-white break-words w-[70px] h-lvh ${
          isNavOpen ? "active" : ""
        }`}
      >
        <Nav />
        <i
          onClick={toggleNav}
          className={`bi bi-x-lg absolute top-2 lg:hidden right-[-30px] text-[24px] bg-white text-black ${
            isNavOpen ? "active" : ""
          }`}
        ></i>
      </header>
      <main className="content-wrap">
        <aside className="flex items-center justify-between pl-3 lg:pl-0">
          <button
            onClick={toggleNav}
            className="text-[30px] pl-2 menu-button lg:hidden"
          >
            <i className="bi bi-list"></i>
          </button>

          <span className="hidden lg:block">
            <QuickLinks />
          </span>
          <a
            href="https://www.tatahitachi.co.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/th-brand-logo.png"
              alt="Description of image"
              width="158"
              height="72"
              className="image-class"
            />
          </a>
        </aside>
        <section className="w-full">
          <HomeSpotLight />
        </section>

        <Showroom />
        <MainBannerBlack />
        <Sss />

        <InfinitePotential />
        <div className="md:flex">
          <div className="md:w-1/2">
            <WhatsNew />
          </div>
          <div className="md:w-1/2">
            <Testimonials />
          </div>
        </div>
      </main>
      <footer className=""></footer>
    </>
  );
}
