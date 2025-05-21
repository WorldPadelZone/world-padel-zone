import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { getEquipment } from "@/lib/constants";
import { Product } from "@/types";
import { Plus } from "lucide-react";

export default function EquipmentSection() {
  const { data: products = getEquipment(), isLoading } = useQuery({
    queryKey: ['/api/equipment'],
  });

  return (
    <section id="equipment" className="py-6 px-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="section-title">Equipment Showcase</h2>
        <Link href="/equipment">
          <a className="section-link">View All</a>
        </Link>
      </div>
      
      <div className="flex overflow-x-auto space-x-4 pb-4 -mx-4 px-4 scrollbar-hide">
        {isLoading ? (
          // Skeleton loading state
          Array(3).fill(0).map((_, i) => (
            <div key={i} className="flex-shrink-0 w-44 bg-white rounded-lg card-shadow dark:bg-gray-800 animate-pulse">
              <div className="relative h-44 bg-gray-200 dark:bg-gray-700 rounded-t-lg"></div>
              <div className="p-3">
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-28"></div>
                <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded mt-1 w-20"></div>
                <div className="flex justify-between items-center mt-2">
                  <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-12"></div>
                  <div className="h-8 w-8 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                </div>
              </div>
            </div>
          ))
        ) : (
          products.map((product: Product) => (
            <div key={product.id} className="flex-shrink-0 w-44 bg-white rounded-lg card-shadow dark:bg-gray-800">
              <div className="relative h-44 overflow-hidden rounded-t-lg">
                <img 
                  src={product.imageUrl} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                {product.tag && (
                  <span className={`absolute top-2 right-2 text-white text-xs font-semibold px-2 py-0.5 rounded ${
                    product.tag === 'New' ? 'bg-accent' : 'bg-secondary'
                  }`}>{product.tag}</span>
                )}
              </div>
              <div className="p-3">
                <h3 className="font-montserrat font-bold text-sm dark:text-white">{product.name}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{product.brand}</p>
                <div className="flex justify-between items-center mt-2">
                  <div>
                    <span className="font-oswald font-semibold text-primary text-lg dark:text-secondary">€{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-xs line-through text-gray-500 ml-1">€{product.originalPrice}</span>
                    )}
                  </div>
                  <button className="touch-target flex items-center justify-center w-8 h-8 bg-secondary rounded-full">
                    <Plus className="h-4 w-4 text-white" />
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
