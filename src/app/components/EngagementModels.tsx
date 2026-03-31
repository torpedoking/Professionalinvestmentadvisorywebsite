export function EngagementModels() {
  const models = [
    {
      name: 'Model A — Full Partnership',
      description: 'A long-term engagement where Strativiz acts as the outsourced M&A and operating execution team. Includes sourcing, underwriting, execution, integration, and ongoing value creation.',
      pricing: 'Monthly retainer, reduced success fee, and ongoing operational support fees.',
      highlight: true,
    },
    {
      name: 'Model B — Transaction Execution',
      description: 'Deal-specific underwriting, diligence, and execution support for investors with existing deal flow.',
      pricing: 'Project-based retainer and standard success fee.',
      highlight: false,
    },
    {
      name: 'Model C — Advisory & Sourcing',
      description: 'Flexible advisory and deal sourcing support without full execution responsibility.',
      pricing: 'Advisory retainer and success fee.',
      highlight: false,
    },
  ];

  return (
    <section id="engagement" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-[#0A1628] mb-6">
            Engagement Models
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Flexible engagement structures tailored to your investment approach
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {models.map((model, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-lg overflow-hidden ${
                model.highlight ? 'ring-2 ring-[#0A1628] transform scale-105' : ''
              }`}
            >
              {model.highlight && (
                <div className="bg-[#0A1628] text-white text-center py-2 text-sm">
                  Recommended
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl text-[#0A1628] mb-4">
                  {model.name}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {model.description}
                </p>
                <div className="border-t border-gray-200 pt-6">
                  <div className="text-sm text-gray-500 mb-2">Pricing</div>
                  <p className="text-gray-700">{model.pricing}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
