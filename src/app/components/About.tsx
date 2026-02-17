"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(textRef.current, {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                },
                y: 50,
                opacity: 0,
                duration: 0.8,
                ease: "power2.out",
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="about" ref={containerRef} className="relative w-full py-20 md:py-32 bg-kelly text-white overflow-hidden border-t-8 border-black">

            {/* Background Texture - Crosshatch */}
            <div className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                    backgroundImage: 'linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000), linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000)',
                    backgroundSize: '20px 20px',
                    backgroundPosition: '0 0, 10px 10px'
                }}>
            </div>

            <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row gap-12 items-center">

                {/* Image / Graphic Side */}
                <div className="w-full md:w-1/2 relative aspect-square md:aspect-[4/5] max-h-[600px]">
                    <div className="w-full h-full border-4 border-black bg-marigold shadow-[16px_16px_0px_#000] rotate-2 transform hover:-rotate-1 transition-transform duration-500">
                        <div className="w-full h-full border-2 border-black overflow-hidden relative">
                            {/* Placeholder or Art Image */}
                            <Image
                                src="/assets/art/IMG_6493.jpg"
                                alt="Mammam Street Art"
                                fill
                                className="object-cover contrast-125"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>

                {/* Text Side */}
                <div ref={textRef} className="w-full md:w-1/2 flex flex-col gap-6">
                    <h2 className="text-6xl md:text-8xl font-display font-black uppercase leading-[0.9]"
                        style={{ color: "white" }}>
                        The Real<br /><span className="text-marigold">Deal</span>
                    </h2>

                    <div className="bg-white border-4 border-black p-6 md:p-8 shadow-[8px_8px_0px_#000] transform -rotate-1">
                        <p className="font-body text-black text-xl md:text-2xl leading-relaxed font-bold">
                            "MĂM MĂM is loud, chaotic, and unapologetically Vietnamese. We don't do subtle. We do bold flavors, fresh ingredients, and street food that hits you in the face (in a good way)."
                        </p>
                        <p className="mt-4 font-body text-gray-700 text-lg">
                            Born from the hustle of Saigon and brought to the streets of Nairobi. We are serving up the freshest Banh Mi and Pho this side of the equator. No reservations, just come hungry.
                        </p>
                    </div>

                    <div className="flex gap-4 mt-4">
                        <div className="bg-marigold px-6 py-3 border-4 border-black font-bold text-xl uppercase shadow-[4px_4px_0px_#000]">
                            Est. 2024
                        </div>
                        <div className="bg-indigo text-white px-6 py-3 border-4 border-black font-bold text-xl uppercase shadow-[4px_4px_0px_#000]">
                            Nairobi
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
