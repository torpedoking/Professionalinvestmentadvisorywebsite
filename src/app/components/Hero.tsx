import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628] via-[#1a2942] to-[#0f1f3a]">
        <div className="absolute inset-0 opacity-10">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1651666176094-2bef8442db12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBidWlsZGluZyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzIwODM4ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Modern architecture"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl text-white mb-8 tracking-tight">
          Strategic Vision.<br />Disciplined Execution.
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Buy-side investment and acquisition advisory for high-net-worth individuals,
          family offices, and institutional investors.
        </p>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 bg-white text-[#0A1628] px-8 py-4 rounded hover:bg-gray-100 transition-colors duration-200 group"
        >
          Start a Conversation
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
        </a>
      </div>
    </section>
  );
}
