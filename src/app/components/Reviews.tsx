"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Reviews() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".review-receipt", {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 70%",
                },
                y: 100,
                opacity: 0,
                rotate: () => gsap.utils.random(-10, 10),
                stagger: 0.2,
                duration: 1,
                ease: "elastic.out(1, 0.75)",
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    const reviews = [
        {
            name: "Sarah K.",
            item: "PHO BO",
            rating: "★★★★★",
            text: "The broth hits different. Best hangover cure in Nairobi, hands down. 🍜🔥",
            date: "12/02/2026"
        },
        {
            name: "David M.",
            item: "BANH MI",
            rating: "★★★★★",
            text: "That baguette crunch though. Authentic AF. Need this daily.",
            date: "14/01/2026"
        },
        {
            name: "Wanjiku",
            item: "SPRING ROLLS",
            rating: "★★★★★",
            text: "Fresh, crispy, perfect dipping sauce. Mammam don't miss.",
            date: "05/02/2026"
        },
        {
            name: "Kevin J.",
            item: "COFFEE",
            rating: "★★★★★",
            text: "Vietnamese coffee here will wake up your ancestors. Potent stuff! ☕⚡",
            date: "10/02/2026"
        }
    ];

    return (
        <section ref={containerRef} className="relative w-full py-20 md:py-32 bg-indigo text-white overflow-hidden border-t-8 border-black">

            <div className="container mx-auto px-6 relative z-10">
                <h2 className="text-6xl md:text-8xl font-display font-black uppercase text-center mb-16 text-marigold">
                    Street Talk
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {reviews.map((review, index) => (
                        <div key={index} className="review-receipt relative bg-white text-black p-6 font-mono text-sm shadow-[10px_10px_0px_rgba(0,0,0,0.5)] transform rotate-2">
                            {/* Receipt Holes (Top) */}
                            <div className="absolute top-0 left-0 w-full h-4 bg-marigold" style={{ maskImage: "radial-gradient(circle at 10px 0, transparent 5px, black 6px)", maskSize: "20px 10px", maskRepeat: "repeat-x" }}></div>

                            {/* Zigzag Bottom Edge */}
                            <div className="absolute bottom-[-10px] left-0 w-full h-[10px] bg-white"
                                style={{
                                    clipPath: "polygon(0% 0%, 5% 100%, 10% 0%, 15% 100%, 20% 0%, 25% 100%, 30% 0%, 35% 100%, 40% 0%, 45% 100%, 50% 0%, 55% 100%, 60% 0%, 65% 100%, 70% 0%, 75% 100%, 80% 0%, 85% 100%, 90% 0%, 95% 100%, 100% 0%)"
                                }}>
                            </div>

                            <div className="border-b-2 border-black border-dashed pb-4 mb-4 text-center">
                                <h3 className="text-2xl font-black uppercase text-indigo">{review.name}</h3>
                                <p className="text-xs">OFFICIAL RECEIPT</p>
                                <p className="text-xs">{review.date}</p>
                            </div>

                            <div className="flex justify-between font-bold mb-2">
                                <span>ITEM:</span>
                                <span>{review.item}</span>
                            </div>

                            <div className="mb-4">
                                <p className="leading-snug">"{review.text}"</p>
                            </div>

                            <div className="border-t-2 border-black border-dashed pt-2 flex justify-between items-center">
                                <span className="font-bold text-xs">VERIFIED</span>
                                <span className="text-xl tracking-tighter">{review.rating}</span>
                            </div>

                            <div className="mt-8 text-center text-[10px] opacity-70">
                                THANK YOU FOR EATING<br />PLEASE COME AGAIN
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
