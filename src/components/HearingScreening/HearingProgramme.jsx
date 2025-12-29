export default function HearingProgramme() {
  const items = [
    {
      title: "Pre-Screening Noise Exposure Assessment",
      description: "Comprehensive workplace noise evaluation",
    },
    {
      title: "Ear Health Inspection",
      description: "Professional otoscopic examination",
    },
    {
      title: "Audiometric Hearing Tests",
      description: "Full hearing assessments for all employees",
    },
    {
      title: "Detailed Compliance Reports",
      description: "Comprehensive documentation for regulatory needs",
    },
    {
      title: "Ongoing Monitoring Support",
      description: "Continued surveillance programme management",
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            What Our Industrial Hearing Programme Includes
          </h2>
          <div className="space-y-4">
            {items.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-lg bg-[rgba(0,0,0,0.03)] transition-colors hover:bg-[rgba(0,0,0,0.03)]/60"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
                <div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
