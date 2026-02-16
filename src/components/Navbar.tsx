import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Navbar() {
  const location = useLocation();

  const [isResourcesOpen, setIsResourcesOpen] = React.useState(false);

  React.useEffect(() => {
    setIsResourcesOpen(false);
  }, [location.pathname]);

  const getNavLinkClass = (path: string) => {
    const isActive = location.pathname === path;
    return `px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${isActive
      ? "bg-[#E1F28F]/10 text-[#E1F28F] border-[#E1F28F]/20 shadow-[0_0_15px_-5px_rgba(225,242,143,0.3)]"
      : "text-white/80 border-transparent hover:text-white hover:bg-white/5"
      }`;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 transition-all duration-300">

      {/* Content */}
      <div className="relative z-10 flex items-center justify-between w-full max-w-7xl mx-auto bg-[#0A2E22]/60 backdrop-blur-lg border border-white/5 rounded-full px-6 py-3 shadow-lg">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-1 cursor-pointer group">
          <img src={logo} alt="Dofollo" className="w-8 h-8 rounded-lg object-contain group-hover:rotate-12 transition-transform" />
          <span className="text-xl font-bold tracking-tight text-white">
            Dofollo<span className="text-[#E1F28F]">.ai</span>
          </span>
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-2">
          <Link to="/features" className={getNavLinkClass('/features')}>Features</Link>

          <a href="#" className={getNavLinkClass('/pricing')}>Pricing</a>

          <div
            className="relative"
            onMouseEnter={() => setIsResourcesOpen(true)}
            onMouseLeave={() => setIsResourcesOpen(false)}
          >
            <button
              className={`flex items-center gap-1 cursor-pointer ${getNavLinkClass('/resources')}`}
              onClick={() => setIsResourcesOpen(!isResourcesOpen)}
            >
              <span>Resources</span>
              <ChevronDown className={`w-3 h-3 transition-transform duration-300 opacity-70 ${isResourcesOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu */}
            <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-[#0A2E22] border border-white/10 rounded-xl shadow-xl overflow-hidden transition-all duration-300 transform origin-top flex flex-col p-1.5 ${isResourcesOpen ? 'opacity-100 visible scale-100' : 'opacity-0 invisible scale-95'}`}>
              <a href="#" className="px-4 py-2.5 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors text-left">Docs</a>
              <a href="#" className="px-4 py-2.5 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors text-left">Blog</a>
              <Link to="/support" className="px-4 py-2.5 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors text-left">Support</Link>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <a href="#" className="hidden sm:block text-sm font-medium text-white hover:text-[#E1F28F] transition-colors">Log in</a>
          <button className="bg-white text-[#0A2E22] hover:bg-[#E1F28F] px-5 py-2 rounded-full text-sm font-bold transition-all transform hover:-translate-y-0.5 shadow-lg">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}