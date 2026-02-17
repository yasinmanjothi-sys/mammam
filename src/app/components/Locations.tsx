"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

interface Location {
    name: string;
    address: string;
    mapSrc?: string;
    imageSrc?: string;
    mapsUrl?: string;
    phone?: string;
}

export default function Locations() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".location-card", {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                },
                y: 50,
                opacity: 0,
                stagger: 0.2,
                duration: 0.8,
                ease: "power2.out",
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    const locations: Location[] = [
        {
            name: "Karen",
            address: "Karen, Nairobi",
            imageSrc: "/assets/karen-map.png", // Custom map image
            mapsUrl: "https://www.google.com/maps/place/M%C4%83m+M%C4%83m+Karen/@-1.337297,36.7202119,17z/data=!4m16!1m9!3m8!1s0x182f1b0a82e35e91:0x4fb00b3c20767e17!2zTcSDbSBNxINtIEthcmVu!8m2!3d-1.3373024!4d36.7250828!9m1!1b1!16s%2Fg%2F11yjxpktk1!3m5!1s0x182f1b0a82e35e91:0x4fb00b3c20767e17!8m2!3d-1.3373024!4d36.7250828!16s%2Fg%2F11yjxpktk1?entry=ttu&g_ep=EgoyMDI2MDIxMS4wIKXMDSoASAFQAw%3D%3D",
            phone: "+254 700 000000" // Placeholder
        },
        {
            name: "Westlands",
            address: "Westlands, Nairobi",
            imageSrc: "/assets/mwanzi-map.png", // Custom map image
            mapsUrl: "https://www.google.com/maps/place/M%C4%83m+M%C4%83m+Westlands/@-1.2552304,36.7970812,17z/data=!3m1!4b1!4m6!3m5!1s0x182f176bd74b884f:0x6fc6f1f434137076!8m2!3d-1.2552304!4d36.7996561!16s%2Fg%2F11vxvl81_t?entry=ttu&g_ep=EgoyMDI2MDIxMS4wIKXMDSoASAFQAw%3D%3D",
            phone: "+254 700 000000" // Placeholder
        }
    ];

    return (
        <section id="find-us" ref={containerRef} className="relative w-full py-20 md:py-32 bg-marigold text-black overflow-hidden border-t-8 border-black">

            <div className="container mx-auto px-6 relative z-10">
                <h2 className="text-6xl md:text-8xl font-display font-black uppercase text-center mb-16 stroke-black"
                    style={{ WebkitTextStroke: "2px black", color: "black" }}>
                    Find Us
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
                    {locations.map((loc, index) => (
                        <div key={index} className="location-card flex flex-col gap-6">
                            <div className="bg-white border-4 border-black p-2 shadow-[8px_8px_0px_#000] rotate-1 hover:-rotate-1 transition-transform duration-300 relative aspect-video">
                                {loc.mapSrc ? (
                                    <iframe
                                        src={loc.mapSrc}
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0, filter: "grayscale(100%) contrast(1.2)" }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        className="border-2 border-black w-full h-full"
                                    ></iframe>
                                ) : (
                                    <a href={loc.mapsUrl || "#"} target="_blank" rel="noopener noreferrer" className="block relative w-full h-full border-2 border-black overflow-hidden cursor-pointer">
                                        <Image
                                            src={loc.imageSrc || ""}
                                            alt={`${loc.name} Map`}
                                            fill
                                            className="object-contain"
                                        />
                                    </a>
                                )}
                            </div>

                            <div className="text-center">
                                <h3 className="text-4xl font-bold uppercase mb-2">{loc.name}</h3>
                                <p className="font-body text-xl font-bold">{loc.address}</p>
                                <a href={loc.mapsUrl || "#"} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 bg-indigo text-white px-6 py-2 border-4 border-black font-bold uppercase hover:translate-y-1 hover:shadow-none shadow-[4px_4px_0px_#000] transition-all">
                                    Get Directions
                                </a>
                                <div className="mt-4">
                                    <a href={`tel:${loc.phone}`} className="inline-block bg-white text-black px-6 py-2 border-4 border-black font-bold uppercase hover:translate-y-1 hover:shadow-none shadow-[4px_4px_0px_#000] transition-all">
                                        Call {loc.name}
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
