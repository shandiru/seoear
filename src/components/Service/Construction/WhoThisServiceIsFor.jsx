import {
  HardHat,
  Wrench,
  Construction,
  TriangleAlert,
  Users,
} from "lucide-react";

const BRAND_GREEN = "#43AA8B";

const WhoThisServiceIsFor = () => {
  return (
    <section className="py-20 bg-[rgba(0,0,0,0.03)]">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-16">
          Who This Service Is For
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">

          {/* Card */}
          <div className="bg-white rounded-2xl shadow-md p-8 text-center">
            <HardHat className="w-8 h-8 mx-auto mb-4" style={{ color: BRAND_GREEN }} />
            <p className="font-medium">Site Operatives</p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-8 text-center">
            <Wrench className="w-8 h-8 mx-auto mb-4" style={{ color: BRAND_GREEN }} />
            <p className="font-medium">Groundworkers</p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-8 text-center">
            <Construction className="w-8 h-8 mx-auto mb-4" style={{ color: BRAND_GREEN }} />
            <p className="font-medium">Plant Operators</p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-8 text-center">
            <TriangleAlert className="w-8 h-8 mx-auto mb-4" style={{ color: BRAND_GREEN }} />
            <p className="font-medium">Demolition Teams</p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-8 text-center">
            <Users className="w-8 h-8 mx-auto mb-4" style={{ color: BRAND_GREEN }} />
            <p className="font-medium">Site Managers</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhoThisServiceIsFor;
