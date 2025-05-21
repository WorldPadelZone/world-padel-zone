import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { getRepairServices } from "@/lib/constants";
import { Check } from "lucide-react";

export default function RepairServiceSection() {
  const { data: services = getRepairServices(), isLoading } = useQuery({
    queryKey: ['/api/repair-services'],
  });

  return (
    <section id="repair" className="py-6 px-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="section-title">Repair Service</h2>
        <Link href="/repair">
          <a className="section-link">Learn More</a>
        </Link>
      </div>
      
      {isLoading ? (
        <div className="bg-white rounded-lg card-shadow p-4 dark:bg-gray-800 animate-pulse">
          <div className="flex justify-between items-start">
            <div className="space-y-2">
              <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-40"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-56"></div>
            </div>
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-16"></div>
          </div>
          
          <div className="space-y-3 mt-4">
            {Array(4).fill(0).map((_, i) => (
              <div key={i} className="flex items-center">
                <div className="h-5 w-5 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded ml-2 flex-grow"></div>
              </div>
            ))}
          </div>
          
          <div className="w-full h-10 bg-gray-200 dark:bg-gray-700 rounded-full mt-5"></div>
        </div>
      ) : (
        <div className="bg-white rounded-lg card-shadow p-4 dark:bg-gray-800">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-montserrat font-bold text-lg text-primary dark:text-white">
                {services.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                {services.description}
              </p>
            </div>
            <span className="font-oswald font-semibold text-primary text-xl dark:text-secondary">
              {services.pricingText}
            </span>
          </div>
          
          <div className="space-y-3 mt-4">
            {services.features.map((feature, index) => (
              <div key={index} className="flex items-center">
                <Check className="h-5 w-5 text-secondary" />
                <span className="text-sm ml-2 dark:text-white">{feature}</span>
              </div>
            ))}
          </div>
          
          <button className="w-full bg-accent text-white font-montserrat font-semibold rounded-full py-3 mt-5 touch-target text-center shadow-lg">
            Book Repair
          </button>
        </div>
      )}
      
      {/* Before/After Gallery */}
      <div className="mt-5">
        <h3 className="font-montserrat font-bold text-sm mb-3 dark:text-white">Before & After Gallery</h3>
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-lg overflow-hidden h-32 relative">
            <img 
              src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200" 
              alt="Before repair"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="bg-white/80 px-2 py-1 text-xs font-semibold text-primary absolute bottom-0 left-0 rounded-tr dark:bg-gray-900/80 dark:text-white">Before</div>
          </div>
          <div className="rounded-lg overflow-hidden h-32 relative">
            <img 
              src="https://pixabay.com/get/g04c67d30cb56ec7bbc3d59c4821a18ced7a8efcc13965934149ce774d71a37118c4f7bd9896435c78b2d2d2d205ec57bc70f1177636d26a791db01ee8716fc2e_1280.jpg" 
              alt="After repair"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="bg-white/80 px-2 py-1 text-xs font-semibold text-primary absolute bottom-0 left-0 rounded-tr dark:bg-gray-900/80 dark:text-white">After</div>
          </div>
        </div>
      </div>
    </section>
  );
}
