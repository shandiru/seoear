import {
  Warehouse,
  Truck,
  Users,
  Shield,
} from "lucide-react";

const WhoThisServiceIsForWarehousing = () => {
  return (
    <section className="py-16 bg-[rgba(0,0,0,0.03)]">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <h2 className="text-3xl font-bold mb-12 text-center">
          Who This Service Is For
        </h2>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">

          {/* Card 1 */}
          <div className="bg-white flex flex-col gap-6 rounded-xl border border-gray-200 shadow-sm p-6 text-center">
            <Warehouse
              className="w-8 h-8 mx-auto mb-3"
              style={{ color: "#43AA8B" }}
            />
            <p className="font-medium text-sm">
              Warehouse Operatives
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white flex flex-col gap-6 rounded-xl border border-gray-200 shadow-sm p-6 text-center">
            <Truck
              className="w-8 h-8 mx-auto mb-3"
              style={{ color: "#43AA8B" }}
            />
            <p className="font-medium text-sm">
              Forklift &amp; HGV Drivers
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white flex flex-col gap-6 rounded-xl border border-gray-200 shadow-sm p-6 text-center">
            <Users
              className="w-8 h-8 mx-auto mb-3"
              style={{ color: "#43AA8B" }}
            />
            <p className="font-medium text-sm">
              Dispatch &amp; Loading Teams
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white flex flex-col gap-6 rounded-xl border border-gray-200 shadow-sm p-6 text-center">
            <Shield
              className="w-8 h-8 mx-auto mb-3"
              style={{ color: "#43AA8B" }}
            />
            <p className="font-medium text-sm">
              Supervisors &amp; Managers
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhoThisServiceIsForWarehousing;
