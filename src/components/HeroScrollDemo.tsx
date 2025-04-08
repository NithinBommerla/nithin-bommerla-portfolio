
"use client";

import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
export function HeroScrollDemo() {
  return <div className="flex flex-col overflow-hidden pt-16 md:pt-20">
      <ContainerScroll titleComponent={<>
            <h1 className="text-3xl font-semibold text-black dark:text-white mb-4 mx-0 my-0 py-0">
              Hello There, Thanks for visiting
              <br />
              <span className="text-4xl md:text-5xl font-bold mt-1 leading-none bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
                My Portfolio
              </span>
            </h1>
          </>}>
        <img src="/lovable-uploads/nithinbommerla.webp" alt="Nithin Bommerla" className="mx-auto rounded-2xl object-cover h-full w-full object-center" draggable={false} />
      </ContainerScroll>
    </div>;
}
