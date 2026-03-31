import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Vision & Mission', href: '#vision' },
    { label: 'Philosophy', href: '#philosophy' },
    { label: 'Services', href: '#services' },
    { label: 'Engagement', href: '#engagement' },
    { label: 'Values', href: '#values' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl tracking-tight text-[#0A1628]">
              Strativiz
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {isHomePage ? (
              <>
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-sm text-gray-700 hover:text-[#0A1628] transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                ))}
                <Link
                  to="/blog"
                  className="text-sm text-gray-700 hover:text-[#0A1628] transition-colors duration-200"
                >
                  Blog
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/"
                  className="text-sm text-gray-700 hover:text-[#0A1628] transition-colors duration-200"
                >
                  Home
                </Link>
                <Link
                  to="/blog"
                  className="text-sm text-gray-700 hover:text-[#0A1628] transition-colors duration-200"
                >
                  Blog
                </Link>
                <Link
                  to="/#contact"
                  className="text-sm text-gray-700 hover:text-[#0A1628] transition-colors duration-200"
                >
                  Contact
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-3">
            {isHomePage ? (
              <>
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="block text-gray-700 hover:text-[#0A1628] py-2 transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <Link
                  to="/blog"
                  className="block text-gray-700 hover:text-[#0A1628] py-2 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blog
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/"
                  className="block text-gray-700 hover:text-[#0A1628] py-2 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/blog"
                  className="block text-gray-700 hover:text-[#0A1628] py-2 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blog
                </Link>
                <Link
                  to="/#contact"
                  className="block text-gray-700 hover:text-[#0A1628] py-2 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}