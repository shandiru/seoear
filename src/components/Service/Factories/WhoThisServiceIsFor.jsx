import React from "react";
import {
  Users,
  Factory,
  HardHat,
  Clock,
} from "lucide-react";

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

          {/* Card 1 */}
          <div className="bg-white flex flex-col gap-4 rounded-xl border border-gray-200 shadow-sm p-6 text-center hover:border-emerald-500 transition-colors">
            <Users className="w-8 h-8 text-emerald-500 mx-auto mb-2" />
            <p className="font-medium text-sm">
              Production Operatives
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white flex flex-col gap-4 rounded-xl border border-gray-200 shadow-sm p-6 text-center hover:border-emerald-500 transition-colors">
            <Factory className="w-8 h-8 text-emerald-500 mx-auto mb-2" />
            <p className="font-medium text-sm">
              Machine Operators
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white flex flex-col gap-4 rounded-xl border border-gray-200 shadow-sm p-6 text-center hover:border-emerald-500 transition-colors">
            <HardHat className="w-8 h-8 text-emerald-500 mx-auto mb-2" />
            <p className="font-medium text-sm">
              Maintenance Engineers
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white flex flex-col gap-4 rounded-xl border border-gray-200 shadow-sm p-6 text-center hover:border-emerald-500 transition-colors">
            <Clock className="w-8 h-8 text-emerald-500 mx-auto mb-2" />
            <p className="font-medium text-sm">
              Shift Workers
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-white flex flex-col gap-4 rounded-xl border border-gray-200 shadow-sm p-6 text-center hover:border-emerald-500 transition-colors">
            <Users className="w-8 h-8 text-emerald-500 mx-auto mb-2" />
            <p className="font-medium text-sm">
              Manufacturing Supervisors
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhoThisServiceIsFor;
