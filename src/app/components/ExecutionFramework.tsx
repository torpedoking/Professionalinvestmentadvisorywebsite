import { Search, FileSearch, DollarSign, FileCheck, Settings, TrendingUp } from 'lucide-react';

export function ExecutionFramework() {
  const framework = [
    {
      icon: Search,
      title: 'Investor-Led Deal Sourcing',
      description: 'We translate each investor\'s strategy, risk tolerance, and return objectives into clear acquisition criteria and proactively source opportunities aligned with those parameters.',
    },
    {
      icon: FileSearch,
      title: 'Rigorous Business Evaluation',
      description: 'We perform disciplined financial, commercial, and operational analysis to assess true earnings power, scalability, and execution risk.',
    },
    {
      icon: DollarSign,
      title: 'Valuation Discipline & Deal Structuring',
      description: 'We establish downside-protected valuation ranges and support deal structures that improve risk-adjusted returns.',
    },
    {
      icon: FileCheck,
      title: 'Transaction Execution',
      description: 'We coordinate advisors, manage diligence processes, and oversee execution through closing.',
    },
    {
      icon: Settings,
      title: 'Post-Acquisition Operational Support',
      description: 'We support early stabilization, integration, and operational efficiency through structured planning and execution.',
    },
    {
      icon: TrendingUp,
      title: 'Ongoing Value Creation',
      description: 'We track performance against underwriting assumptions and identify continuous improvement opportunities.',
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-[#0A1628] mb-6">
            Execution Framework
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive approach to investment lifecycle management
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {framework.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="p-3 bg-[#0A1628] rounded-lg">
                      <Icon size={24} className="text-white" />
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-2">Step {index + 1}</div>
                    <h3 className="text-xl text-[#0A1628] mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
