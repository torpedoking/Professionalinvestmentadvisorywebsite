import { ImageWithFallback } from './figma/ImageWithFallback';
import { CheckCircle } from 'lucide-react';

export function Services() {
  const services = [
    'Proprietary Deal Origination & Target Sourcing',
    'Financial Modeling & Valuation',
    'Deal Strategy, Negotiation & LOI Execution',
    'Financial & Operational Due Diligence',
    'Transaction Execution & Closing Support',
    'Post-Acquisition Integration & Transition Planning',
    'Value Creation & Cost Optimization',
    'Capital Advisory & Investor Support',
    'Offshore Operations & Execution Support',
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-[#0A1628] mb-6">
            Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Buyer-Side M&A & Capital Advisory
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl order-2 md:order-1">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1723987251277-18fc0a1effd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBhbmFseXNpcyUyMGNoYXJ0cyUyMGRhdGF8ZW58MXx8fHwxNzcyMTc4ODM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Financial analysis"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-4 order-1 md:order-2">
            {services.map((service, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle size={24} className="text-[#0A1628] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 text-lg">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
