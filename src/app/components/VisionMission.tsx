import { Target, Compass } from 'lucide-react';

export function VisionMission() {
  return (
    <section id="vision" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-10 rounded-lg shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-[#0A1628] rounded-lg">
                <Target size={32} className="text-white" />
              </div>
              <h2 className="text-3xl text-[#0A1628]">Vision</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To be a trusted buy-side partner that identifies, evaluates, and secures high-quality businesses 
              at compelling valuations, while driving sustained post-acquisition value through efficient operational 
              and support solutions.
            </p>
          </div>

          <div className="bg-white p-10 rounded-lg shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-[#0A1628] rounded-lg">
                <Compass size={32} className="text-white" />
              </div>
              <h2 className="text-3xl text-[#0A1628]">Mission</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Our mission is to help investors acquire the right businesses at the right price and maximize value 
              through disciplined analysis and ongoing operational support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
