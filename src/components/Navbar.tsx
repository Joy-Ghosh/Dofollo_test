import React from 'react';
import { ChevronDown, Menu, X, ChevronRight, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import navbarData from '../data/layout/navbar.json';
import logo from '../assets/logo.png'; // Keeping import for now, or could use dynamic require if path is static

export default function Navbar() {
  const location = useLocation();
  const { logo: logoData, links, cta } = navbarData;

  const [isResourcesOpen, setIsResourcesOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    setIsResourcesOpen(false);
  }, [location.pathname]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center px-4 py-4 md:px-6 md:py-6 transition-all duration-300">

      {/* Content */}
      <div className="relative z-50 flex items-center justify-between w-full max-w-7xl mx-auto bg-[#0A2E22]/80 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-full px-4 py-3 md:px-6 shadow-2xl">
        {/* Logo */}
        <Link to={logoData.link} className="flex items-center gap-2 cursor-pointer group" onClick={() => setIsMobileMenuOpen(false)}>
          <img src={logo} alt={logoData.alt} className="w-8 h-8 rounded-lg object-contain group-hover:rotate-12 transition-transform shadow-lg" />
          <span className="text-xl font-bold tracking-tight text-white">
            {logoData.text}<span className="text-[#E1F28F]">{logoData.highlight}</span>
          </span>
        </Link>

        {/* Right Side: Nav Links + CTA (Desktop) */}
        <div className="hidden md:flex items-center gap-8">
          {/* Nav Links */}
          <div className="flex items-center gap-6">
            {links.map((link, index) => {
              if (link.type === 'dropdown') {
                return (
                  <div
                    key={index}
                    className="relative group"
                    onMouseEnter={() => setIsResourcesOpen(true)}
                    onMouseLeave={() => setIsResourcesOpen(false)}
                  >
                    <button
                      className={`flex items-center gap-1 text-sm font-medium transition-colors ${link.items?.some((item: any) => item.link === location.pathname || (item.link === '/docs' && location.pathname.startsWith('/docs')))
                        ? 'text-[#E1F28F]'
                        : 'text-white/80 hover:text-white'
                        }`}
                    >
                      {link.label}
                      <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${isResourcesOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {/* Dropdown Menu */}
                    <div
                      className={`absolute top-full right-0 mt-4 w-56 bg-[#0A2E22] border border-white/10 rounded-xl shadow-2xl overflow-hidden transition-all duration-300 transform origin-top-right flex flex-col p-1.5 ${isResourcesOpen ? 'opacity-100 visible scale-100' : 'opacity-0 invisible scale-95'}`}
                    >
                      {link.items?.map((subItem, subIndex) => (
                        subItem.type === 'link' ? (
                          <Link
                            key={subIndex}
                            to={subItem.link}
                            className={`px-4 py-2.5 text-sm rounded-lg transition-colors text-left flex items-center justify-between group ${location.pathname === subItem.link || (subItem.link === '/docs' && location.pathname.startsWith('/docs'))
                              ? 'text-[#E1F28F] bg-white/5'
                              : 'text-white/70 hover:text-white hover:bg-white/5'
                              }`}
                          >
                            {subItem.label}
                          </Link>
                        ) : (
                          <a
                            key={subIndex}
                            href={subItem.link}
                            className="px-4 py-2.5 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors text-left flex items-center justify-between"
                          >
                            {subItem.label}
                          </a>
                        )
                      ))}
                    </div>
                  </div>
                );
              }

              return link.type === 'link' ? (
                <Link
                  key={index}
                  to={link.link}
                  className={`text-sm font-medium transition-colors ${location.pathname === link.link || (link.link === '/docs' && location.pathname.startsWith('/docs'))
                    ? 'text-[#E1F28F]'
                    : 'text-white/80 hover:text-white'
                    }`}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={index}
                  href={link.link}
                  className="text-sm font-medium text-white/80 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* CTA */}
          <button className="bg-white text-[#0A2E22] hover:bg-[#E1F28F] px-5 py-2 rounded-full text-sm font-bold transition-all transform hover:-translate-y-0.5 shadow-lg active:scale-95">
            {cta.label}
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden relative z-50 p-2 text-white/80 hover:text-white transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 bg-[#061C15]/95 backdrop-blur-xl transition-all duration-300 md:hidden flex flex-col pt-28 px-6 pb-8 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
        <div className="flex flex-col gap-6 overflow-y-auto max-h-[calc(100vh-120px)] hide-scrollbar">
          {links.map((link, index) => {
            if (link.type === 'dropdown') {
              return (
                <div key={index} className="flex flex-col gap-3">
                  <div className="text-xs font-bold text-white/40 uppercase tracking-widest px-2">{link.label}</div>
                  <div className="flex flex-col gap-2 pl-2 border-l border-white/10 ml-1">
                    {link.items?.map((subItem, subIndex) => (
                      subItem.type === 'link' ? (
                        <Link
                          key={subIndex}
                          to={subItem.link}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`px-4 py-3 text-base rounded-xl transition-colors text-left flex items-center justify-between ${location.pathname === subItem.link || (subItem.link === '/docs' && location.pathname.startsWith('/docs'))
                            ? 'text-[#E1F28F] bg-white/5 font-medium'
                            : 'text-white/70 hover:text-white hover:bg-white/5'
                            }`}
                        >
                          {subItem.label}
                          <ChevronRight className="w-4 h-4 opacity-50" />
                        </Link>
                      ) : (
                        <a
                          key={subIndex}
                          href={subItem.link}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="px-4 py-3 text-base text-white/70 hover:text-white hover:bg-white/5 rounded-xl transition-colors text-left flex items-center justify-between"
                        >
                          {subItem.label}
                          <ChevronRight className="w-4 h-4 opacity-50" />
                        </a>
                      )
                    ))}
                  </div>
                </div>
              );
            }

            return link.type === 'link' ? (
              <Link
                key={index}
                to={link.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-xl font-medium transition-colors px-2 ${location.pathname === link.link || (link.link === '/docs' && location.pathname.startsWith('/docs'))
                  ? 'text-[#E1F28F]'
                  : 'text-white/90'
                  }`}
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={index}
                href={link.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xl font-medium text-white/90 transition-colors px-2"
              >
                {link.label}
              </a>
            );
          })}
        </div>

        <div className="mt-auto pt-8 border-t border-white/10">
          <button className="w-full bg-white text-[#0A2E22] hover:bg-[#E1F28F] px-6 py-4 rounded-xl text-base font-bold transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2">
            {cta.label}
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </nav>
  );
}
