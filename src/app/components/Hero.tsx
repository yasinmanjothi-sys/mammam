"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<SVGSVGElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Rotate the circular text
            gsap.to(".circular-text", {
                rotation: 360,
                repeat: -1,
                duration: 20,
                ease: "linear",
                transformOrigin: "center center",
            });

            // Initial reveal animation (Pop Art style - scale up with elasticity)
            gsap.from(".hero-logo", {
                scale: 0,
                duration: 1.5,
                ease: "elastic.out(1, 0.3)",
                delay: 0.5,
            });

            gsap.from(".corner-link", {
                opacity: 0,
                y: 20,
                stagger: 0.1,
                duration: 0.8,
                ease: "power2.out",
                delay: 1,
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    const cornerClasses = "corner-link fixed p-6 text-xl font-bold uppercase tracking-widest hover:text-indigo transition-colors duration-300 z-50 mix-blend-difference text-white";

    return (
        <div ref={containerRef} className="relative w-full h-screen bg-marigold overflow-hidden flex items-center justify-center">

            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/assets/HERO.png"
                    alt="Mammam Hero Background"
                    fill
                    className="object-cover"
                    priority
                />
            </div>



            {/* Background Texture/Pattern (Halftone dots using CSS radial gradient) */}
            <div className="absolute inset-0 opacity-10 pointer-events-none z-0"
                style={{ backgroundImage: 'radial-gradient(#000 2px, transparent 2px)', backgroundSize: '20px 20px' }}>
            </div>

            {/* Corner Links */}
            <a href="#menu" className="corner-link fixed top-0 left-0 p-6 text-xl font-bold uppercase tracking-widest hover:text-indigo transition-colors duration-300 z-50 text-white">Menu</a>
            <a href="#find-us" className="corner-link fixed top-0 right-0 p-6 text-xl font-bold uppercase tracking-widest hover:text-indigo transition-colors duration-300 z-50 text-white">Book</a>

            {/* Central Content */}
            <div className="relative z-10 flex flex-col items-center justify-center p-4">



                {/* Brand Logo - Wavy "MĂM MĂM" */}
                {/* Brand Logo - New SVG Asset */}
                <div className="hero-logo text-center relative w-[95vw] md:w-[1200px] h-[50vw] md:h-[600px]">
                    <Image
                        src="/assets/hero-logo.svg"
                        alt="MĂM MĂM Logo"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>

            </div>

        </div>
    );
}
