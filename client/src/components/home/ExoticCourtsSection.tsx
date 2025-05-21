import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { getExoticCourts } from "@/lib/constants";
import { ExoticCourt } from "@/types";

export default function ExoticCourtsSection() {
  const { data: courts = getExoticCourts(), isLoading } = useQuery({
    queryKey: ['/api/exotic-courts'],
  });

  return (
    <section id="courts" className="py-6 px-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="section-title">Exotic Courts</h2>
        <Link href="/courts">
          <a className="section-link">View All</a>
        </Link>
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        {isLoading ? (
          // Skeleton loading
          Array(4).fill(0).map((_, i) => (
            <div key={i} className="bg-white rounded-lg card-shadow overflow-hidden dark:bg-gray-800 animate-pulse">
              <div className="w-full h-32 bg-gray-200 dark:bg-gray-700"></div>
              <div className="p-3">
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-24"></div>
                <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-16 mt-1"></div>
              </div>
            </div>
          ))
        ) : (
          courts.map((court: ExoticCourt) => (
            <div key={court.id} className="bg-white rounded-lg card-shadow overflow-hidden dark:bg-gray-800">
              <img 
                src={court.imageUrl} 
                alt={court.name}
                className="w-full h-32 object-cover"
                loading="lazy"
              />
              <div className="p-3">
                <h3 className="font-montserrat font-bold text-sm dark:text-white">{court.name}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{court.location}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
