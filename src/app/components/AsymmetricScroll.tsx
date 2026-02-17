"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const artImages = ["IMG_6479.jpg", "IMG_6492.jpg", "IMG_6493.jpg"];
const foodImages = ["IMG_6489.jpg", "IMG_6490.jpg", "IMG_6491.jpg", "IMG_6494.jpg", "IMG_6497.jpg", "IMG_6498.jpg", "IMG_6499.jpg"];

export default function AsymmetricScroll() {
    const containerRef = useRef<HTMLDivElement>(null);
    const leftColRef = useRef<HTMLDivElement>(null);
    const rightColRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Pin the left column while the right column scrolls
            ScrollTrigger.create({
                trigger: containerRef.current,
                start: "top top",
                end: "bottom bottom",
                pin: leftColRef.current,
                scrub: true,
            });

            // Left column is pinned, cards use CSS sticky

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative w-full min-h-[300vh] flex bg-marigold">

            {/* Left Column - Pinned Art (Desktop Only) */}
            <div ref={leftColRef} className="hidden md:flex w-1/2 h-screen items-center justify-center bg-kelly relative overflow-hidden border-r-4 border-black">
                {/* Halftone Pattern Overlay */}
                <div className="absolute inset-0 opacity-20 pointer-events-none z-10"
                    style={{ backgroundImage: 'radial-gradient(#000 3px, transparent 3px)', backgroundSize: '24px 24px' }}>
                </div>

                <div className="relative w-full h-full p-12 flex flex-col justify-center">
                    <h2 className="text-8xl font-display font-black text-marigold uppercase leading-none z-20 mb-8 stroke-black"
                        style={{ WebkitTextStroke: "2px black" }}>
                        Street<br />Hustle
                    </h2>

                    <div className="relative z-20 w-full aspect-[3/4] border-4 border-black shadow-[12px_12px_0px_#000] rotate-[-3deg] bg-white p-4">
                        <div className="relative w-full h-full border-2 border-black overflow-hidden bg-black">
                            <video
                                src="/assets/vertical-scroll-video.mp4"
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="w-full h-full object-cover contrast-125"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Column - Scrolling Food Cards */}
            <div ref={rightColRef} className="w-full md:w-1/2 flex flex-col items-center py-12 md:py-24 gap-24 md:gap-32">

                {/* Mobile Header */}
                <div className="md:hidden text-center mb-12 flex flex-col items-center gap-8">
                    <h2 className="text-6xl font-display font-black text-kelly uppercase leading-none stroke-black"
                        style={{ WebkitTextStroke: "1px black" }}>
                        Street<br />Hustle
                    </h2>

                    {/* Mobile Video */}
                    <div className="relative z-20 w-[80%] aspect-[3/4] border-4 border-black shadow-[8px_8px_0px_#000] rotate-[-2deg] bg-white p-2">
                        <div className="relative w-full h-full border-2 border-black overflow-hidden bg-black">
                            <video
                                src="/assets/vertical-scroll-video.mp4"
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="w-full h-full object-cover contrast-125"
                            />
                        </div>
                    </div>
                </div>

                {foodImages.map((src, index) => (
                    <div key={index} className={`stack-card sticky top-24 w-[80%] max-w-md aspect-[4/5] bg-white border-4 border-black p-4 shadow-[16px_16px_0px_#000] ${index % 2 === 0 ? 'rotate-1' : '-rotate-1'} transition-transform duration-300`}>
                        <div className="relative w-full h-full border-2 border-black overflow-hidden bg-gray-100">
                            <Image
                                src={`/assets/restaurant/${src}`}
                                alt={`Food Item ${index + 1}`}
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>

                    </div>
                ))}
                {/* Spacer at bottom to allow scrolling past last card */}
                <div className="h-[50vh]"></div>
            </div>

        </section>
    );
}
