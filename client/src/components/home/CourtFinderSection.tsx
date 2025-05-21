import { Link } from "wouter";
import { MapPin, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function CourtFinderSection() {
  const popularLocations = [
    "Barcelona", "Madrid", "Dubai", "Stockholm", "Paris", "London"
  ];

  return (
    <section id="court-finder" className="py-6 px-4 bg-primary text-white">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-montserrat font-bold text-xl">Padel Court Finder</h2>
        <Link href="/court-finder">
          <a className="text-accent font-semibold text-sm">View Map</a>
        </Link>
      </div>
      
      <div className="bg-white/10 rounded-lg p-4 mb-4">
        <p className="text-sm mb-3">Find padel courts anywhere in the world - over 3,500 courts listed</p>
        
        <div className="relative">
          <Input 
            type="text" 
            placeholder="Enter city or location..." 
            className="pr-12 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 touch-target"
          />
          <Button 
            className="absolute right-0 top-0 h-full px-3 bg-accent hover:bg-accent/90 text-white border-none"
          >
            <Search className="h-5 w-5" />
          </Button>
        </div>
        
        <div className="mt-4">
          <p className="text-xs text-white/70 mb-2">Popular locations:</p>
          <div className="flex flex-wrap gap-2">
            {popularLocations.map((location) => (
              <Link key={location} href={`/court-finder?location=${location}`}>
                <a className="flex items-center bg-white/5 hover:bg-white/10 rounded-full px-3 py-1 text-xs">
                  <MapPin className="h-3 w-3 mr-1" />
                  {location}
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
      
      <div className="text-center mt-4">
        <p className="text-sm mb-2">Own a padel court or club?</p>
        <Button className="bg-accent hover:bg-accent/90 text-white font-montserrat font-semibold rounded-full px-6">
          List Your Court
        </Button>
      </div>
    </section>
  );
}