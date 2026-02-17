"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

export default function Footer() {
    const stampRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Rotate the stamp
        gsap.to(stampRef.current, {
            rotation: 360,
            repeat: -1,
            duration: 10,
            ease: "linear",
        });
    }, []);

    return (
        <footer className="relative w-full bg-kelly text-white border-t-8 border-black overflow-hidden pt-20 pb-8">
            {/* Halftone Pattern Overlay */}
            <div className="absolute inset-0 opacity-10 pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(#000 2px, transparent 2px)', backgroundSize: '16px 16px' }}>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">

                    {/* Newsletter Section */}
                    <div className="flex-1 max-w-xl">
                        <h3 className="text-4xl md:text-6xl font-display font-bold uppercase mb-8 stroke-black">
                            Stay Hungry
                        </h3>
                        <form className="flex flex-col gap-4">
                            <input type="email" placeholder="YOUR EMAIL HERE"
                                className="w-full bg-white border-4 border-black p-4 font-body text-black placeholder:text-gray-500 shadow-[8px_8px_0px_#000] focus:outline-none focus:translate-y-1 focus:shadow-[4px_4px_0px_#000] transition-all" />
                            <button type="submit"
                                className="w-full bg-marigold text-black font-bold text-xl uppercase p-4 border-4 border-black shadow-[8px_8px_0px_#000] hover:translate-y-1 hover:shadow-[4px_4px_0px_#000] active:shadow-none active:translate-y-2 transition-all">
                                Subscribe
                            </button>
                        </form>
                    </div>

                    {/* Links Grid */}
                    <div className="flex-1 grid grid-cols-2 gap-8 font-body font-bold text-xl uppercase tracking-widest">
                        <div className="flex flex-col gap-4">
                            <a href="#" className="hover:text-marigold hover:underline decoration-4 underline-offset-4">Home</a>
                            <a href="#menu" className="hover:text-marigold hover:underline decoration-4 underline-offset-4">Menu</a>
                            <a href="#about" className="hover:text-marigold hover:underline decoration-4 underline-offset-4">Our Story</a>
                            <a href="#find-us" className="hover:text-marigold hover:underline decoration-4 underline-offset-4">Locations</a>
                        </div>
                        <div className="flex flex-col gap-4">
                            <a href="https://www.instagram.com/mammam.ke/" target="_blank" rel="noopener noreferrer" className="hover:text-marigold hover:underline decoration-4 underline-offset-4">Instagram</a>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar with Stamp */}
                <div className="flex flex-col md:flex-row items-center justify-between border-t-4 border-black pt-8 mt-8 relative">
                    <p className="font-body text-sm uppercase tracking-widest z-10">© 2026 Mammam. All Rights Reserved.</p>

                    {/* Logo - Moved to Bottom Right */}
                    <div className="relative w-24 h-24 md:w-32 md:h-32 mt-8 md:mt-0 md:-mr-4">
                        <Image
                            src="/assets/alternative-logo.svg"
                            alt="Mammam Alternative Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>



            </div >
        </footer >
    );
}
