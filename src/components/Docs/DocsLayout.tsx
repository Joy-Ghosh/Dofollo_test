import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import DocsSidebar from './DocsSidebar';
import Footer from '../Footer';

interface DocsLayoutProps {
    children: React.ReactNode;
    toc?: React.ReactNode;
}

const DocsLayout: React.FC<DocsLayoutProps> = ({ children, toc }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen bg-white flex flex-col pt-24 relative">
            {/* Added padding top for mobile header, removed on desktop if header is sticky or handles it. 
        Actually, the main Navbar is fixed, so we always need padding-top or margin-top.
        The layout assumes standard page flow. 
    */}

            {/* Navbar Background for scrolling obscuration */}
            <div className="fixed top-0 left-0 right-0 h-24 bg-[#0A2E22] z-40" />

            {/* Mobile Menu Button */}
            <div className="md:hidden fixed top-28 left-4 z-30">
                <button
                    onClick={() => setIsSidebarOpen(true)}
                    className="p-2 bg-[#0A2E22]/80 backdrop-blur border border-white/10 rounded-lg text-white shadow-lg hover:bg-white/5 transition-colors"
                >
                    <Menu className="w-5 h-5" />
                </button>
            </div>

            <div className="flex flex-1">
                {/* Left Sidebar */}
                <DocsSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

                {/* Main Content Area */}
                <main className="flex-1 min-w-0 mt-8 md:mt-0 flex flex-col"> {/* Margin top for mobile menu button spacing */}
                    <div className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex">
                        {/* Center Content */}
                        <div className="flex-1 min-w-0 py-8 lg:py-12 lg:pr-8">
                            {children}
                        </div>

                        {/* Right TOC (Desktop Only) */}
                        {toc && (
                            <aside className="hidden xl:block w-64 flex-shrink-0 border-l border-[#0A2E22]/10">
                                <div className="sticky top-24 pl-8 py-8 h-[calc(100vh-6rem)] overflow-y-auto">
                                    {toc}
                                </div>
                            </aside>
                        )}
                    </div>
                </main>
            </div>

            <Footer />
        </div>
    );
};

export default DocsLayout;
