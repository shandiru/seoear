import { Clock } from "lucide-react";

export default function HearingTestProcess() {
  return (
    <section className="py-16 sm:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            What Happens During the Test?
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Our industrial hearing screening is quick, simple, and carried out
            on-site where possible to minimise disruption.
          </p>
        </div>

        {/* Steps */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <Step
            number="1"
            color="bg-emerald-500"
            title="Pre-Test Questionnaire"
            description="Employees answer questions covering noise exposure, previous hearing issues, and protective equipment use."
          />

          <Step
            number="2"
            color="bg-blue-500"
            title="Otoscopic Ear Check"
            description="A brief visual inspection of the ear canal to ensure no blockages or conditions affect results."
          />

          <Step
            number="3"
            color="bg-amber-500"
            title="Audiometry Test"
            description="Employee wears headphones and indicates when they hear tones at different frequencies and volumes."
          />

          <Step
            number="4"
            color="bg-purple-500"
            title="Results & Reporting"
            description="Immediate pass/refer outcome with clear explanation and employer summary report."
          />
        </div>

        {/* Duration */}
        <div className="mt-10 sm:mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-muted px-6 py-3 rounded-full">
            <Clock className="w-5 h-5 text-emerald-500" />
            <span className="text-sm sm:text-base font-medium">
              Each test takes 10–15 minutes per person
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}

function Step({ number, color, title, description }) {
  return (
    <div className="text-center">
      <div className="mb-6">
        <div
          className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full ${color} text-white flex items-center justify-center text-xl sm:text-2xl font-bold mx-auto`}
        >
          {number}
        </div>
      </div>

      <h3 className="text-lg sm:text-xl font-semibold mb-3">
        {title}
      </h3>

      <p className="text-sm sm:text-base text-muted-foreground">
        {description}
      </p>
    </div>
  );
}
