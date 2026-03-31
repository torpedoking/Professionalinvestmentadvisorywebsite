import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl text-[#0A1628] mb-6">
              About Strativiz
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Strativiz is a buy-side investment and acquisition advisory firm serving high-net-worth individuals, 
                family offices, and sponsor-backed investors. We partner with capital allocators to identify, evaluate, 
                acquire, and transform high-quality businesses through disciplined judgment, valuation rigor, and 
                hands-on operational execution.
              </p>
              <p>
                Our work spans the full investment lifecycle — from proprietary deal origination to post-acquisition 
                integration and value creation. We operate exclusively on the buy side, avoiding conflicts of interest 
                and prioritizing long-term capital stewardship over transaction volume.
              </p>
              <p>
                Strativiz was built for investors who value discipline, transparency, and execution. We do not chase 
                deals. We underwrite risk, protect downside, and remain engaged well beyond closing to help build 
                stronger, more resilient businesses.
              </p>
            </div>
          </div>
          <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1758518730384-be3d205838e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBidXNpbmVzcyUyMGhhbmRzaGFrZSUyMG1lZXRpbmd8ZW58MXx8fHwxNzcyMTA3ODI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Business partnership"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
