export default function WorkshopTestProcess() {
  const steps = [
    {
      title: "Work-Environment Noise Assessment",
      desc: "Understanding specific workshop conditions",
    },
    {
      title: "Otoscopic Ear Check",
      desc: "Visual examination of ear health",
    },
    {
      title: "Audiometric Hearing Screening",
      desc: "Professional hearing level assessment",
    },
    {
      title: "Immediate Explanation of Results",
      desc: "Clear communication on the day",
    },
    {
      title: "Follow-Up Guidance If Required",
      desc: "Next steps and recommendations",
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            What Happens During the Test
          </h2>
          <div className="space-y-4">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 p-4 rounded-lg bg-[rgba(0,0,0,0.03)]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-1"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
                <div>
                  <h3 className="font-semibold mb-1">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
