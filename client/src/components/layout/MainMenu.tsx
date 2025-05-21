import { useEffect } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Link } from "wouter";
import { X, BookOpen, Wrench, MapPin, Users, ShoppingBag, Hammer, Map, Trophy, Newspaper, Shield } from "lucide-react";

interface MainMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MainMenu({ isOpen, onClose }: MainMenuProps) {
  // Close menu when Escape key is pressed
  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscKey);
    return () => window.removeEventListener("keydown", handleEscKey);
  }, [isOpen, onClose]);

  // Prevent body scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="left" className="pt-10 w-[85vw] sm:max-w-md bg-white dark:bg-gray-900">
        <SheetHeader className="absolute top-0 right-0 p-4">
          <button onClick={onClose} className="touch-target p-2">
            <X className="h-6 w-6" />
          </button>
        </SheetHeader>
        <SheetTitle className="text-primary dark:text-white text-xl mb-8">
          <Link href="/" onClick={onClose}>
            WORLD PADEL ZONE
          </Link>
        </SheetTitle>
        
        <nav className="space-y-6">
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase text-gray-500 dark:text-gray-400">Main</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" onClick={onClose}>
                  <a className="flex items-center text-lg font-semibold">
                    <span className="mr-3 text-primary dark:text-secondary">
                      <Trophy className="h-5 w-5" />
                    </span>
                    Home
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/#news" onClick={onClose}>
                  <a className="flex items-center text-lg font-semibold">
                    <span className="mr-3 text-primary dark:text-secondary">
                      <Newspaper className="h-5 w-5" />
                    </span>
                    News
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/#tournaments" onClick={onClose}>
                  <a className="flex items-center text-lg font-semibold">
                    <span className="mr-3 text-primary dark:text-secondary">
                      <Shield className="h-5 w-5" />
                    </span>
                    Tournaments
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/strategies" onClick={onClose}>
                  <a className="flex items-center text-lg font-semibold">
                    <span className="mr-3 text-primary dark:text-secondary">
                      <BookOpen className="h-5 w-5" />
                    </span>
                    Strategies & Tips
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase text-gray-500 dark:text-gray-400">Equipment</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/#equipment" onClick={onClose}>
                  <a className="flex items-center text-lg font-semibold">
                    <span className="mr-3 text-primary dark:text-secondary">
                      <Wrench className="h-5 w-5" />
                    </span>
                    Equipment
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/equipment-reviews" onClick={onClose}>
                  <a className="flex items-center text-lg font-semibold">
                    <span className="mr-3 text-primary dark:text-secondary">
                      <Wrench className="h-5 w-5" />
                    </span>
                    Equipment Reviews
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase text-gray-500 dark:text-gray-400">Shop</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/#marketplace" onClick={onClose}>
                  <a className="flex items-center text-lg font-semibold">
                    <span className="mr-3 text-primary dark:text-secondary">
                      <ShoppingBag className="h-5 w-5" />
                    </span>
                    Marketplace
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/#repair" onClick={onClose}>
                  <a className="flex items-center text-lg font-semibold">
                    <span className="mr-3 text-primary dark:text-secondary">
                      <Hammer className="h-5 w-5" />
                    </span>
                    Repair Service
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase text-gray-500 dark:text-gray-400">Explore</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/#tours" onClick={onClose}>
                  <a className="flex items-center text-lg font-semibold">
                    <span className="mr-3 text-primary dark:text-secondary">
                      <MapPin className="h-5 w-5" />
                    </span>
                    Padel Tours
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/travel" onClick={onClose}>
                  <a className="flex items-center text-lg font-semibold">
                    <span className="mr-3 text-primary dark:text-secondary">
                      <MapPin className="h-5 w-5" />
                    </span>
                    Travel Corner
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/#courts" onClick={onClose}>
                  <a className="flex items-center text-lg font-semibold">
                    <span className="mr-3 text-primary dark:text-secondary">
                      <Map className="h-5 w-5" />
                    </span>
                    Exotic Courts
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/court-finder" onClick={onClose}>
                  <a className="flex items-center text-lg font-semibold">
                    <span className="mr-3 text-primary dark:text-secondary">
                      <Map className="h-5 w-5" />
                    </span>
                    Court Finder
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/#community" onClick={onClose}>
                  <a className="flex items-center text-lg font-semibold">
                    <span className="mr-3 text-primary dark:text-secondary">
                      <Users className="h-5 w-5" />
                    </span>
                    Community
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        
        <div className="absolute bottom-8 left-6 right-6">
          <button className="w-full bg-primary text-white font-montserrat font-semibold rounded-full py-3 shadow-lg touch-target">
            Sign In / Register
          </button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
