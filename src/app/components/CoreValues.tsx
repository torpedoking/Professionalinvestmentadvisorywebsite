import { Shield, Target, Users, TrendingUp, Award, Briefcase, Lock } from 'lucide-react';

export function CoreValues() {
  const values = [
    { icon: Users, title: 'Investor Alignment', color: 'bg-blue-500' },
    { icon: Target, title: 'Discipline & Rigor', color: 'bg-indigo-500' },
    { icon: Shield, title: 'Integrity & Transparency', color: 'bg-purple-500' },
    { icon: TrendingUp, title: 'Long-Term Value Creation', color: 'bg-green-500' },
    { icon: Award, title: 'Ownership Mentality', color: 'bg-orange-500' },
    { icon: Briefcase, title: 'Operational Excellence', color: 'bg-red-500' },
    { icon: Lock, title: 'Professionalism & Discretion', color: 'bg-gray-700' },
  ];

  return (
    <section id="values" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-[#0A1628] mb-6">
            Core Values
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The principles that guide our work and define our commitment to clients
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg text-center hover:bg-gray-100 transition-colors duration-200"
              >
                <div className={`inline-flex p-4 rounded-full ${value.color} mb-4`}>
                  <Icon size={28} className="text-white" />
                </div>
                <h3 className="text-gray-800 leading-snug">
                  {value.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
