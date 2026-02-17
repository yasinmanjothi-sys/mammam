"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const menuCategories = [
    {
        title: "Banh Mi",
        items: [
            { name: "The O.G.", price: "$12", desc: "Pâté, ham, pork floss, mayo, cucumber, cilantro, chili" },
            { name: "Lemongrass Pork", price: "$13", desc: "Char-grilled pork, scallion oil, pickled carrots, magick sauce" },
            { name: "Tofu Crunch", price: "$11", desc: "Crispy tofu, mushroom pâté, soy glaze, thai basil" },
        ]
    },
    {
        title: "Pho & Bowls",
        items: [
            { name: "Pho Dac Biet", price: "$18", desc: "Beef combo: brisket, flank, tendon, meatball in 24h bone broth" },
            { name: "Chicken Pho", price: "$16", desc: "Free-range chicken, kaffir lime leaf, ginger nuoc cham" },
            { name: "Vermicelli Bowl", price: "$15", desc: "Rice noodles, spring roll, fresh herbs, peanuts, fish sauce vinaigrette" },
        ]
    },
    {
        title: "Snacks",
        items: [
            { name: "Spring Rolls", price: "$8", desc: "Pork & shrimp or taro & mung bean. Served with lettuce wrap" },
            { name: "Wings", price: "$14", desc: "Fish sauce caramelized wings, garlic chips, lime" },
            { name: "Mango Salad", price: "$12", desc: "Green mango, prawn crackers, rau ram, chili jam" },
        ]
    }
];

export default function Menu() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate menu items in on scroll
            const items = gsap.utils.toArray<HTMLElement>(".menu-item");

            ScrollTrigger.batch(items, {
                onEnter: batch => gsap.to(batch, { opacity: 1, y: 0, stagger: 0.1, overwrite: true }),
                start: "top 80%",
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} id="menu" className="relative w-full py-20 md:py-32 bg-indigo text-off-white overflow-hidden">

            {/* Background Watermark */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-5 overflow-hidden select-none">
                <span className="absolute top-[10%] -left-[10%] text-[10rem] md:text-[20rem] font-script transform -rotate-12 text-white whitespace-nowrap">Noodles</span>
                <span className="absolute bottom-[20%] -right-[10%] text-[10rem] md:text-[20rem] font-script transform rotate-12 text-white whitespace-nowrap">Banh Mi</span>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <h2 className="text-5xl md:text-9xl font-display font-bold text-marigold mb-12 md:mb-24 text-center md:text-left">
                    Menu
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
                    {menuCategories.map((category, idx) => (
                        <div key={idx} className="flex flex-col gap-12">
                            {/* Category Header */}
                            <div className="border-b-4 border-marigold pb-4">
                                <h3 className="text-4xl md:text-5xl font-bold uppercase tracking-widest text-marigold">
                                    {category.title}
                                </h3>
                            </div>

                            {/* Items */}
                            <div className="flex flex-col gap-10">
                                {category.items.map((item, i) => (
                                    <div key={i} className="menu-item opacity-0 translate-y-8 flex flex-col gap-2">
                                        <div className="flex justify-between items-baseline border-b border-gray-700 pb-2 border-dashed">
                                            <h4 className="text-2xl md:text-3xl font-bold">{item.name}</h4>
                                            <span className="text-xl font-bold text-marigold">{item.price}</span>
                                        </div>
                                        <p className="font-body text-gray-400 text-lg max-w-[90%]">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
