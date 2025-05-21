import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { getPadelTours } from "@/lib/constants";
import { PadelTour } from "@/types";
import { Calendar, MapPin } from "lucide-react";

export default function PadelToursSection() {
  const { data: tours = getPadelTours(), isLoading } = useQuery({
    queryKey: ['/api/padel-tours'],
  });

  const featuredTour = tours.find(tour => tour.featured);
  const otherTours = tours.filter(tour => !tour.featured);

  return (
    <section id="tours" className="py-6 px-4 bg-secondary/10 dark:bg-gray-900/50">
      <div className="flex justify-between items-center mb-4">
        <h2 className="section-title">Padel Tours</h2>
        <Link href="/tours">
          <a className="section-link">View All</a>
        </Link>
      </div>
      
      {isLoading ? (
        <div className="space-y-4">
          <div className="bg-white rounded-lg card-shadow p-4 relative dark:bg-gray-800 animate-pulse">
            <div className="w-full h-36 bg-gray-200 dark:bg-gray-700 rounded-lg mb-3"></div>
            <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-40"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-56 mt-1"></div>
            
            <div className="flex items-center mt-3">
              <div className="h-6 w-20 bg-gray-200 dark:bg-gray-700 rounded"></div>
              <div className="flex items-center ml-3">
                <div className="h-4 w-4 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                <div className="h-3 w-12 bg-gray-200 dark:bg-gray-700 rounded ml-1"></div>
              </div>
            </div>
            
            <div className="flex justify-between items-center mt-4">
              <div className="h-6 w-20 bg-gray-200 dark:bg-gray-700 rounded"></div>
              <div className="h-10 w-24 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
            </div>
          </div>
        </div>
      ) : (
        <>
          {featuredTour && (
            <div className="bg-white rounded-lg card-shadow p-4 relative dark:bg-gray-800">
              <img 
                src={featuredTour.imageUrl} 
                alt={featuredTour.name}
                className="w-full h-36 object-cover rounded-lg mb-3"
                loading="lazy"
              />
              <div className="absolute top-6 right-6 bg-accent text-white text-xs font-semibold px-2 py-1 rounded">Featured</div>
              
              <h3 className="font-montserrat font-bold text-lg text-primary dark:text-white">{featuredTour.name}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{featuredTour.description}</p>
              
              <div className="flex items-center mt-3">
                <div className={`${
                  featuredTour.level === 'Beginner' ? 'bg-secondary/20 text-secondary' : 
                  featuredTour.level === 'Intermediate' ? 'bg-secondary/10 text-secondary' :
                  'bg-primary/10 text-primary dark:text-white'
                } px-2 py-1 rounded text-xs font-semibold dark:bg-opacity-20`}>
                  {featuredTour.level}
                </div>
                <div className="flex items-center ml-3">
                  <Calendar className="h-4 w-4 text-primary dark:text-white" />
                  <span className="text-xs ml-1 text-primary dark:text-white">{featuredTour.duration}</span>
                </div>
                <div className="flex items-center ml-3">
                  <MapPin className="h-4 w-4 text-primary dark:text-white" />
                  <span className="text-xs ml-1 text-primary dark:text-white">{featuredTour.location}</span>
                </div>
              </div>
              
              <div className="flex justify-between items-center mt-4">
                <div>
                  <span className="font-oswald font-semibold text-primary text-xl dark:text-secondary">{featuredTour.price}</span>
                  <span className="text-xs text-gray-500">per person</span>
                </div>
                <button className="bg-primary text-white font-montserrat font-semibold rounded-full py-2 px-6 touch-target text-center shadow-lg">
                  Book Now
                </button>
              </div>
            </div>
          )}
          
          <div className="flex overflow-x-auto space-x-4 mt-4 pb-4 -mx-4 px-4 scrollbar-hide">
            {otherTours.map((tour: PadelTour) => (
              <div key={tour.id} className="flex-shrink-0 w-64 bg-white rounded-lg card-shadow dark:bg-gray-800">
                <div className="relative h-32 overflow-hidden rounded-t-lg">
                  <img 
                    src={tour.imageUrl} 
                    alt={tour.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-3">
                  <h3 className="font-montserrat font-bold text-sm dark:text-white">{tour.name}</h3>
                  <div className="flex items-center mt-1">
                    <div className={`${
                      tour.level === 'Beginner' ? 'bg-secondary/20 text-secondary' : 
                      tour.level === 'Intermediate' ? 'bg-secondary/10 text-secondary' :
                      'bg-primary/10 text-primary dark:text-white'
                    } px-2 py-0.5 rounded text-xs font-semibold dark:bg-opacity-20`}>
                      {tour.level}
                    </div>
                    <span className="text-xs text-gray-500 ml-2">{tour.duration}</span>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <span className="font-oswald font-semibold text-primary text-base dark:text-secondary">{tour.price}</span>
                    <button className="text-xs text-primary font-semibold px-3 py-1 border border-primary rounded-full dark:text-white dark:border-white">
                      Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  );
}
