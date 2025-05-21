import { Home, Newspaper, Shield, ShoppingBag, Users } from "lucide-react";
import { Link, useLocation } from "wouter";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { useEffect, useState } from "react";

export default function BottomNav() {
  const [location] = useLocation();
  const [activeTab, setActiveTab] = useState("home");
  const scrollPosition = useScrollPosition();
  
  // Update active tab based on scroll position when on homepage
  useEffect(() => {
    if (location !== "/") {
      return;
    }
    
    const sectionOffsets: Record<string, number> = {
      "home": 0,
      "news": document.getElementById('news')?.offsetTop || 0,
      "tournaments": document.getElementById('tournaments')?.offsetTop || 0,
      "marketplace": document.getElementById('marketplace')?.offsetTop || 0,
      "community": document.getElementById('community')?.offsetTop || 0
    };
    
    const currentPosition = scrollPosition + 100; // Add offset to account for header
    let current = "home";
    
    // Find the section closest to the top of the viewport
    Object.entries(sectionOffsets).forEach(([section, offset]) => {
      if (offset <= currentPosition) {
        current = section;
      }
    });
    
    setActiveTab(current);
  }, [scrollPosition, location]);
  
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 dark:bg-gray-900 dark:border-gray-800">
      <div className="flex justify-around">
        <Link href="/">
          <a className={`flex flex-col items-center py-2 px-4 ${activeTab === 'home' ? 'bottom-tab-active' : 'text-gray-500 dark:text-gray-400'}`}>
            <Home className="h-6 w-6" />
            <span className="text-xs mt-1">Home</span>
          </a>
        </Link>
        <Link href="/#news">
          <a className={`flex flex-col items-center py-2 px-4 ${activeTab === 'news' ? 'bottom-tab-active' : 'text-gray-500 dark:text-gray-400'}`}>
            <Newspaper className="h-6 w-6" />
            <span className="text-xs mt-1">News</span>
          </a>
        </Link>
        <Link href="/#tournaments">
          <a className={`flex flex-col items-center py-2 px-4 ${activeTab === 'tournaments' ? 'bottom-tab-active' : 'text-gray-500 dark:text-gray-400'}`}>
            <Shield className="h-6 w-6" />
            <span className="text-xs mt-1">Tournaments</span>
          </a>
        </Link>
        <Link href="/#marketplace">
          <a className={`flex flex-col items-center py-2 px-4 ${activeTab === 'marketplace' ? 'bottom-tab-active' : 'text-gray-500 dark:text-gray-400'}`}>
            <ShoppingBag className="h-6 w-6" />
            <span className="text-xs mt-1">Shop</span>
          </a>
        </Link>
        <Link href="/#community">
          <a className={`flex flex-col items-center py-2 px-4 ${activeTab === 'community' ? 'bottom-tab-active' : 'text-gray-500 dark:text-gray-400'}`}>
            <Users className="h-6 w-6" />
            <span className="text-xs mt-1">Community</span>
          </a>
        </Link>
      </div>
    </nav>
  );
}
