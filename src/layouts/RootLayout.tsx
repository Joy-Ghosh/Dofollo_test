import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';

export default function RootLayout() {
    return (
        <div className="flex flex-col min-h-screen bg-[#0A2E22] text-white font-sans">
            <Navbar />

            <main className="flex-grow">
                <Outlet />
            </main>

            {/* Footer Placeholder */}
            {/* <footer className="py-10">...</footer> */}
        </div>
    );
}
