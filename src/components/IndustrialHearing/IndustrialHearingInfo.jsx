import { Factory, Wrench, Users } from "lucide-react";

export default function IndustrialHearingInfo() {
  return (
    <section className="py-16 sm:py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          
          {/* Left Content */}
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
              What Is an Industrial Hearing Screening Test?
            </h2>

            <p className="text-base sm:text-lg text-muted-foreground mb-6">
              An industrial hearing screening test is a non-invasive assessment
              designed to check an employee's hearing levels, particularly in
              noisy work environments.
            </p>

            <p className="text-sm sm:text-base text-muted-foreground mb-8">
              The test detects early noise-induced hearing loss before it becomes
              permanent, allowing preventative action to be taken.
            </p>

            {/* List */}
            <div className="space-y-3">
              
              <InfoLink icon={Factory} text="Factories & manufacturing plants" />
              <InfoLink icon={Wrench} text="Construction sites" />
              <InfoLink icon={Users} text="Warehouses & logistics centres" />
              <InfoLink icon={Wrench} text="Automotive & engineering workshops" />
              <InfoLink icon={Factory} text="Industrial plants & processing facilities" />

            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-[280px] sm:h-[360px] md:h-[420px] lg:h-[500px] rounded-2xl overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('/image.png')",
              }}
            />
          </div>

        </div>
      </div>
    </section>
  );
}

function InfoLink({ icon: Icon, text }) {
  return (
    <a
      href="#"
      className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted transition-colors"
    >
      <Icon className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
      <span className="text-sm sm:text-base text-muted-foreground hover:text-foreground">
        {text}
      </span>
    </a>
  );
}
