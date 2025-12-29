import React from "react";
import {
  Users,
  Factory,
  HardHat,
  Clock,
} from "lucide-react";

const BRAND_GREEN = "#43AA8B";

const WhoThisServiceIsFor = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">

        {/* Title */}
        <h2 className="text-3xl font-bold mb-12 text-center">
          Who This Service Is For
        </h2>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">

          {/* Card */}
          {[
            { icon: Users, label: "Production Operatives" },
            { icon: Factory, label: "Machine Operators" },
            { icon: HardHat, label: "Maintenance Engineers" },
            { icon: Clock, label: "Shift Workers" },
            { icon: Users, label: "Manufacturing Supervisors" },
          ].map(({ icon: Icon, label }, index) => (
            <div
              key={index}
              className="bg-white flex flex-col gap-4 rounded-xl border border-gray-200 shadow-sm p-6 text-center transition-colors"
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderColor = BRAND_GREEN)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor = "#E5E7EB")
              }
            >
              <Icon
                className="w-8 h-8 mx-auto mb-2"
                style={{ color: BRAND_GREEN }}
              />
              <p className="font-medium text-sm">
                {label}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default WhoThisServiceIsFor;
