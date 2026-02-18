import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import navbarData from '../data/layout/navbar.json';
import logo from '../assets/logo.png'; // Keeping import for now, or could use dynamic require if path is static

export default function Navbar() {
  const location = useLocation();
  const { logo: logoData, links, cta } = navbarData;

  const [isResourcesOpen, setIsResourcesOpen] = React.useState(false);

  React.useEffect(() => {
    setIsResourcesOpen(false);
  }, [location.pathname]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 transition-all duration-300">

      {/* Content */}
      <div className="relative z-10 flex items-center justify-between w-full max-w-7xl mx-auto bg-[#0A2E22]/60 backdrop-blur-lg border border-white/5 rounded-full px-6 py-3 shadow-lg">
        {/* Logo */}
        <Link to={logoData.link} className="flex items-center gap-1 cursor-pointer group">
          <img src={logo} alt={logoData.alt} className="w-8 h-8 rounded-lg object-contain group-hover:rotate-12 transition-transform" />
          <span className="text-xl font-bold tracking-tight text-white">
            {logoData.text}<span className="text-[#E1F28F]">{logoData.highlight}</span>
          </span>
        </Link>

        {/* Right Side: Nav Links + CTA */}
        <div className="flex items-center gap-8">
          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-6">
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
                      className={`absolute top-full right-0 mt-4 w-48 bg-[#0A2E22] border border-white/10 rounded-xl shadow-xl overflow-hidden transition-all duration-300 transform origin-top-right flex flex-col p-1.5 ${isResourcesOpen ? 'opacity-100 visible scale-100' : 'opacity-0 invisible scale-95'}`}
                    >
                      {link.items?.map((subItem, subIndex) => (
                        subItem.type === 'link' ? (
                          <Link
                            key={subIndex}
                            to={subItem.link}
                            className={`px-4 py-2.5 text-sm rounded-lg transition-colors text-left ${location.pathname === subItem.link || (subItem.link === '/docs' && location.pathname.startsWith('/docs'))
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
                            className="px-4 py-2.5 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors text-left"
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
          <button className="bg-white text-[#0A2E22] hover:bg-[#E1F28F] px-5 py-2 rounded-full text-sm font-bold transition-all transform hover:-translate-y-0.5 shadow-lg">
            {cta.label}
          </button>
        </div>
      </div>
    </nav>
  );
}
