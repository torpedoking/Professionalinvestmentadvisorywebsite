import { Link } from 'react-router';

export function Footer() {
  return (
    <footer className="bg-[#0f1f3a] text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white text-xl mb-4">Strativiz</h3>
            <p className="leading-relaxed">
              Buy-side investment and acquisition advisory for sophisticated investors.
            </p>
          </div>

          <div>
            <h4 className="text-white mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <a href="/#about" className="block hover:text-white transition-colors">About</a>
              <a href="/#vision" className="block hover:text-white transition-colors">Vision & Mission</a>
              <a href="/#services" className="block hover:text-white transition-colors">Services</a>
              <a href="/#engagement" className="block hover:text-white transition-colors">Engagement Models</a>
              <Link to="/blog" className="block hover:text-white transition-colors">Blog</Link>
            </nav>
          </div>

          <div>
            <h4 className="text-white mb-4">Contact</h4>
            <p className="leading-relaxed">
              Ready to discuss your acquisition objectives?
            </p>
            <a href="mailto:contact@strativiz.com" className="text-white hover:underline mt-2 inline-block">
              contact@strativiz.com
            </a>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Strativiz. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}