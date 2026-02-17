"use client";

import { ReactLenis } from "lenis/react";
import { ReactNode, useEffect } from "react";

export default function SmoothScroll({ children }: { children: ReactNode }) {
    useEffect(() => {
        // Ensure page loads at the top
        window.scrollTo(0, 0);

        // Prevent scroll restoration
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }
    }, []);

    return (
        <ReactLenis root options={{ lerp: 0.1, duration: 1.5, autoRaf: true }}>
            {children}
        </ReactLenis>
    );
}
