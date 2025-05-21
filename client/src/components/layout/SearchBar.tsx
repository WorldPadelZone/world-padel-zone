import { useEffect, useState } from "react";
import { Sheet, SheetContent, SheetHeader } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { SearchIcon, X } from "lucide-react";

interface SearchBarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchBar({ isOpen, onClose }: SearchBarProps) {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Focus input when search bar opens
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        const searchInput = document.getElementById("search-input");
        if (searchInput) searchInput.focus();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Close search bar when Escape key is pressed
  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscKey);
    return () => window.removeEventListener("keydown", handleEscKey);
  }, [isOpen, onClose]);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search functionality here
    console.log("Searching for:", searchQuery);
    
    // Close search after submitting
    // onClose();
  };
  
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="top" className="pt-16 h-[50vh] bg-white dark:bg-gray-900">
        <SheetHeader className="absolute top-0 right-0 p-4">
          <button onClick={onClose} className="touch-target p-2">
            <X className="h-6 w-6" />
          </button>
        </SheetHeader>
        
        <div className="container max-w-md mx-auto px-4">
          <h2 className="text-lg font-bold mb-4 dark:text-white">Search World Padel Zone</h2>
          
          <form onSubmit={handleSearch} className="relative">
            <Input
              id="search-input"
              type="search"
              placeholder="Search for news, players, equipment..."
              className="w-full pl-10 pr-4 py-3 touch-target text-base dark:bg-gray-800"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <SearchIcon className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          </form>
          
          {searchQuery && (
            <div className="mt-6">
              <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">SEARCH SUGGESTIONS</h3>
              <ul className="space-y-3">
                <li className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded">
                  <button className="w-full text-left" onClick={() => setSearchQuery("padel tournaments")}>
                    padel tournaments
                  </button>
                </li>
                <li className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded">
                  <button className="w-full text-left" onClick={() => setSearchQuery("best padel rackets")}>
                    best padel rackets
                  </button>
                </li>
                <li className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded">
                  <button className="w-full text-left" onClick={() => setSearchQuery("padel techniques")}>
                    padel techniques
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
