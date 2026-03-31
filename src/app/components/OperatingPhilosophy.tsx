import { ImageWithFallback } from './figma/ImageWithFallback';

export function OperatingPhilosophy() {
  return (
    <section id="philosophy" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1765438869297-6fa4b627906a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHN0cmF0ZWd5JTIwcGxhbm5pbmd8ZW58MXx8fHwxNzcyMDc5ODYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Strategic planning"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div>
            <h2 className="text-4xl md:text-5xl text-[#0A1628] mb-6">
              Operating Philosophy
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              We believe long-term investment success is driven by discipline, not momentum. Our philosophy is 
              rooted in valuation rigor, independent thinking, and execution excellence.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg mt-6">
              We prioritize capital preservation, surface risks early, and maintain engagement beyond closing. 
              We think and act as long-term stewards of capital, applying institutional standards regardless of 
              transaction size.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
