"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

const images = [
    "IMG_6480.jpg", "IMG_6481.jpg", "IMG_6482.jpg", "IMG_6483.jpg",
    "IMG_6484.jpg", "IMG_6485.jpg", "IMG_6486.jpg", "IMG_6487.jpg"
];

// Duplicate images for infinite loop
const galleryImages = [...images, ...images];

export default function GalleryCarousel() {
    const containerRef = useRef<HTMLDivElement>(null);
    const sliderRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(sliderRef.current, {
                xPercent: -50, // Move halfway (one full set of images)
                ease: "none",
                duration: 20, // Adjust speed here
                repeat: -1,
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="relative w-full py-20 bg-marigold border-t-8 border-black">

            {/* Pop Art Title */}
            <div className="container mx-auto px-4 mb-12">
                <h2 className="text-6xl md:text-8xl font-display font-bold text-black uppercase tracking-tighter">
                    The Vibe
                </h2>
            </div>

            {/* Scroll Container */}
            <div ref={containerRef} className="w-full overflow-hidden">
                <div ref={sliderRef} className="flex gap-8 px-8 pb-12 w-max">
                    {galleryImages.map((src, index) => (
                        <div key={index} className="relative flex-shrink-0 w-[300px] h-[400px] md:w-[400px] md:h-[500px] bg-white border-4 border-black shadow-[10px_10px_0px_#000] hover:shadow-[15px_15px_0px_#000] hover:-translate-y-2 transition-all duration-300 transform select-none">
                            {/* Image Container */}
                            <div className="relative w-full h-full p-2 pointer-events-none">
                                <div className="relative w-full h-full border-2 border-black overflow-hidden bg-gray-200">
                                    <Image
                                        src={`/assets/restaurant/${src}`}
                                        alt={`Restaurant Interior ${index + 1}`}
                                        fill
                                        className="object-cover transition-all duration-500 contrast-125"
                                        sizes="(max-width: 768px) 300px, 400px"
                                    />
                                </div>
                            </div>

                            <div className="absolute -bottom-4 -right-4 bg-white border-2 border-black px-2 py-1 transform rotate-[-2deg] shadow-[4px_4px_0px_#000]">
                                <span className="font-bold text-sm uppercase">Fig. {index + 1}</span>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </section >
    );
}
