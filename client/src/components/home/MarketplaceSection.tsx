import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { getMarketplaceItems } from "@/lib/constants";
import { MarketplaceItem } from "@/types";
import { Star } from "lucide-react";
import { useState } from "react";

export default function MarketplaceSection() {
  const [activeFilter, setActiveFilter] = useState("All Items");
  const { data: items = getMarketplaceItems(), isLoading } = useQuery({
    queryKey: ['/api/marketplace'],
  });

  const filters = ["All Items", "Rackets", "Clothing", "Shoes", "Accessories"];

  return (
    <section id="marketplace" className="py-6 px-4 bg-gray-100 dark:bg-gray-900/50">
      <div className="flex justify-between items-center mb-4">
        <h2 className="section-title">Marketplace</h2>
        <Link href="/marketplace">
          <a className="section-link">View All</a>
        </Link>
      </div>
      
      <div className="mb-4 flex items-center space-x-2 overflow-x-auto -mx-4 px-4 pb-2 scrollbar-hide">
        {filters.map((filter) => (
          <button 
            key={filter}
            className={`touch-target text-sm font-semibold px-4 py-2 rounded-full whitespace-nowrap ${
              activeFilter === filter 
                ? 'bg-primary text-white' 
                : 'bg-white text-primary shadow dark:bg-gray-800'
            }`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
      
      <div className="space-y-4">
        {isLoading ? (
          // Skeleton loading state
          Array(2).fill(0).map((_, i) => (
            <div key={i} className="bg-white rounded-lg card-shadow flex dark:bg-gray-800 animate-pulse">
              <div className="w-24 h-24 flex-shrink-0 bg-gray-200 dark:bg-gray-700 rounded-l-lg"></div>
              <div className="p-3 flex-grow">
                <div className="flex justify-between">
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-28"></div>
                  <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-12"></div>
                </div>
                <div className="flex items-center mt-1">
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-20"></div>
                </div>
                <div className="flex items-center mt-2">
                  <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-24"></div>
                </div>
              </div>
            </div>
          ))
        ) : (
          items.map((item: MarketplaceItem) => (
            <div key={item.id} className="bg-white rounded-lg card-shadow flex dark:bg-gray-800">
              <div className="w-24 h-24 flex-shrink-0">
                <img 
                  src={item.imageUrl} 
                  alt={item.name}
                  className="w-full h-full object-cover rounded-l-lg"
                  loading="lazy"
                />
              </div>
              <div className="p-3 flex-grow">
                <div className="flex justify-between">
                  <h3 className="font-montserrat font-bold text-sm dark:text-white">{item.name}</h3>
                  <span className="font-oswald font-semibold text-primary text-lg dark:text-secondary">€{item.price}</span>
                </div>
                <div className="flex items-center mt-1">
                  <span className="text-xs bg-gray-200 px-2 py-0.5 rounded dark:bg-white/20">{item.condition}</span>
                  <span className="text-xs text-gray-500 ml-2">{item.location}</span>
                </div>
                <div className="flex items-center mt-2 text-xs">
                  <div className="flex items-center text-accent">
                    {Array(5).fill(0).map((_, i) => (
                      <Star 
                        key={i} 
                        className="h-3 w-3" 
                        fill={i < item.rating ? "currentColor" : "none"} 
                      />
                    ))}
                  </div>
                  <span className="ml-1 text-gray-500">from {item.seller}</span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      
      <div className="mt-5 flex justify-center">
        <button className="bg-accent text-white font-montserrat font-semibold rounded-full py-2 px-8 touch-target text-center shadow-lg">
          Sell Your Gear
        </button>
      </div>
    </section>
  );
}
