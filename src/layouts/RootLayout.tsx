import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import MagneticCursor from '../components/MagneticCursor';
import { Outlet } from 'react-router-dom';

export default function RootLayout() {
    const [scrollPct, setScrollPct] = useState(0);

    useEffect(() => {
        const onScroll = () => {
            const doc = document.documentElement;
            const scrolled = doc.scrollTop;
            const total = doc.scrollHeight - doc.clientHeight;
            setScrollPct(total > 0 ? (scrolled / total) * 100 : 0);
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <div className="flex flex-col min-h-screen bg-[#0A2E22] text-white font-sans">
            {/* Global Scroll Progress */}
            <div className="fixed top-0 left-0 right-0 z-[100] h-[2px] pointer-events-none">
                <div
                    className="h-full bg-gradient-to-r from-[#E1F28F] to-[#045C4E] transition-all duration-75"
                    style={{ width: `${scrollPct}%` }}
                />
            </div>

            {/* Magnetic Cursor (desktop only) */}
            <MagneticCursor />

            <Navbar />

            <main className="flex-grow">
                <Outlet />
            </main>
        </div>
    );
}
