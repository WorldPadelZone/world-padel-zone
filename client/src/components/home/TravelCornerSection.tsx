import { Link } from "wouter";
import { Plane, Star } from "lucide-react";

export default function TravelCornerSection() {
  const travelDestinations = [
    {
      id: 1,
      name: "Barcelona Padel Paradise",
      country: "Spain",
      description: "Experience the birthplace of padel with world-class courts and training",
      rating: 4.9,
      imageUrl: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=200"
    },
    {
      id: 2,
      name: "Dubai Padel Experience",
      country: "UAE",
      description: "Luxury padel facilities with breathtaking skyline views",
      rating: 4.8,
      imageUrl: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=200"
    },
    {
      id: 3,
      name: "Mexican Padel Retreat",
      country: "Mexico",
      description: "Combine beach vacation with premium padel facilities",
      rating: 4.7,
      imageUrl: "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=200"
    }
  ];

  return (
    <section id="travel" className="py-6 px-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="section-title">Travel Corner</h2>
        <Link href="/travel">
          <a className="section-link">View All Destinations</a>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {travelDestinations.map((destination) => (
          <div key={destination.id} className="bg-white rounded-lg card-shadow overflow-hidden dark:bg-gray-800">
            <div className="relative h-40">
              <img 
                src={destination.imageUrl} 
                alt={destination.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-3 left-3 bg-white/80 dark:bg-gray-900/80 rounded-full px-2 py-1 flex items-center">
                <Plane className="h-3 w-3 text-accent mr-1" />
                <span className="text-xs font-semibold">{destination.country}</span>
              </div>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start">
                <h3 className="font-montserrat font-bold text-base dark:text-white">{destination.name}</h3>
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-accent fill-current" />
                  <span className="text-xs font-semibold ml-1">{destination.rating}</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-2 line-clamp-2 dark:text-gray-300">{destination.description}</p>
              
              <Link href={`/travel/${destination.id}`}>
                <a className="mt-3 text-sm font-semibold text-accent inline-block">
                  Explore Destination
                </a>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}