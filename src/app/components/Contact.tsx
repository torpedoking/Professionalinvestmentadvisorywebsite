import { ImageWithFallback } from './figma/ImageWithFallback';
import { Mail, MessageSquare } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#0A1628] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl mb-6">
              Let's Discuss Your Acquisition Objectives
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Contact Strativiz to explore how we can support your investment strategy and 
              determine the appropriate engagement model for your needs.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/10 rounded-lg">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-xl mb-2">Email Us</h3>
                  <a href="mailto:contact@strativiz.com" className="text-gray-300 hover:text-white transition-colors">
                    contact@strativiz.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/10 rounded-lg">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <h3 className="text-xl mb-2">Schedule a Consultation</h3>
                  <p className="text-gray-300">
                    Reach out to discuss your specific investment criteria and how we can assist in 
                    identifying and acquiring high-quality businesses.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1769839271827-e7e287319dd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwY29sbGFib3JhdGlvbnxlbnwxfHx8fDE3NzIxMDYyODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Professional collaboration"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
