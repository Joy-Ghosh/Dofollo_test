import React, { useEffect, useRef } from 'react';

export default function MagneticCursor() {
    const dotRef = useRef<HTMLDivElement>(null);
    const ringRef = useRef<HTMLDivElement>(null);

    // Use refs for mutable state so the animation loop never restarts
    const state = useRef({
        mouse: { x: -200, y: -200 },
        dot: { x: -200, y: -200 },
        ring: { x: -200, y: -200 },
        visible: false,
        clicked: false,
        hovered: false,
        isLightBg: false,
    });

    useEffect(() => {
        // Hide on touch devices or small screens — check once on mount
        if (window.matchMedia('(pointer: coarse)').matches || window.innerWidth <= 768) return;

        let raf: number;
        const s = state.current;

        const onMove = (e: MouseEvent) => {
            s.mouse.x = e.clientX;
            s.mouse.y = e.clientY;
            s.visible = true;
        };

        const onLeave = () => { s.visible = false; };
        const onEnter = () => { s.visible = true; };
        const onDown = () => { s.clicked = true; };
        const onUp = () => { s.clicked = false; };

        const onOver = (e: MouseEvent) => {
            const t = e.target as HTMLElement;
            if (!t || !t.closest) return;
            s.hovered = !!t.closest('button, a, [data-magnetic], input, textarea, select');
            s.isLightBg = !!t.closest('.bg-white, .bg-gray-50, .bg-\\[\\#F9FAFB\\]');
        };
        const onOut = () => { s.hovered = false; };

        document.addEventListener('mousemove', onMove, { passive: true });
        document.addEventListener('mouseleave', onLeave);
        document.addEventListener('mouseenter', onEnter);
        document.addEventListener('mousedown', onDown);
        document.addEventListener('mouseup', onUp);
        document.addEventListener('mouseover', onOver, { passive: true });
        document.addEventListener('mouseout', onOut, { passive: true });

        const animate = () => {
            // Dot follows almost instantly
            s.dot.x += (s.mouse.x - s.dot.x) * 0.85;
            s.dot.y += (s.mouse.y - s.dot.y) * 0.85;
            // Ring trails with spring
            s.ring.x += (s.mouse.x - s.ring.x) * 0.12;
            s.ring.y += (s.mouse.y - s.ring.y) * 0.12;

            const dotScale = s.clicked ? 0.5 : s.hovered ? 2.5 : 1;
            const ringScale = s.clicked ? 0.7 : s.hovered ? 1.5 : 1;
            const ringOpacity = s.visible ? (s.hovered ? 0.7 : 0.35) : 0;
            const dotOpacity = s.visible ? 1 : 0;

            if (dotRef.current) {
                dotRef.current.style.transform = `translate(${s.dot.x - 4}px, ${s.dot.y - 4}px) scale(${dotScale})`;
                dotRef.current.style.opacity = String(dotOpacity);
                if (s.isLightBg) dotRef.current.classList.add('dark');
                else dotRef.current.classList.remove('dark');
            }
            if (ringRef.current) {
                ringRef.current.style.transform = `translate(${s.ring.x - 20}px, ${s.ring.y - 20}px) scale(${ringScale})`;
                ringRef.current.style.opacity = String(ringOpacity);
                if (s.isLightBg) ringRef.current.classList.add('dark');
                else ringRef.current.classList.remove('dark');
            }

            raf = requestAnimationFrame(animate);
        };

        raf = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(raf);
            document.removeEventListener('mousemove', onMove);
            document.removeEventListener('mouseleave', onLeave);
            document.removeEventListener('mouseenter', onEnter);
            document.removeEventListener('mousedown', onDown);
            document.removeEventListener('mouseup', onUp);
            document.removeEventListener('mouseover', onOver);
            document.removeEventListener('mouseout', onOut);
        };
    }, []); // ← empty array: runs once, never restarts

    return (
        <>
            <div ref={dotRef} className="cursor-dot" />
            <div ref={ringRef} className="cursor-ring" />
        </>
    );
}
