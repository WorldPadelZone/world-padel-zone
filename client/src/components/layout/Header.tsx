import { useTheme } from "@/components/ThemeProvider";
import { Moon, Sun, Menu, Search } from "lucide-react";
import { Link } from "wouter";
import { useIsMobile } from "@/hooks/use-mobile";

interface HeaderProps {
  toggleMenu: () => void;
  toggleSearch: () => void;
}

export default function Header({ toggleMenu, toggleSearch }: HeaderProps) {
  const { theme, toggleTheme } = useTheme();
  const isMobile = useIsMobile();
  
  return (
    <header className="sticky top-0 w-full bg-white z-50 border-b border-gray-200 dark:bg-gray-900 dark:border-gray-800 shadow-sm">
      <div className="container mx-auto">
        <div className="flex justify-between items-center px-4 h-16">
          <div className="flex items-center">
            {isMobile ? (
              <button 
                className="touch-target flex items-center justify-center p-2 mr-2" 
                aria-label="Menu"
                onClick={toggleMenu}
              >
                <Menu className="h-6 w-6" />
              </button>
            ) : null}
            
            <Link href="/">
              <a className="flex items-center">
                <span className="text-primary font-montserrat font-bold text-xl dark:text-white">WORLD PADEL ZONE</span>
              </a>
            </Link>
          </div>
          
          {!isMobile && (
            <nav className="hidden md:flex space-x-6 ml-10">
              <Link href="/strategies">
                <a className="text-sm font-semibold hover:text-secondary dark:text-white dark:hover:text-secondary">Strategies & Tips</a>
              </Link>
              <Link href="/equipment">
                <a className="text-sm font-semibold hover:text-secondary dark:text-white dark:hover:text-secondary">Equipment Reviews</a>
              </Link>
              <Link href="/travel">
                <a className="text-sm font-semibold hover:text-secondary dark:text-white dark:hover:text-secondary">Travel Corner</a>
              </Link>
              <Link href="/community">
                <a className="text-sm font-semibold hover:text-secondary dark:text-white dark:hover:text-secondary">Community</a>
              </Link>
              <Link href="/marketplace">
                <a className="text-sm font-semibold hover:text-secondary dark:text-white dark:hover:text-secondary">Marketplace</a>
              </Link>
              <Link href="/repairs">
                <a className="text-sm font-semibold hover:text-secondary dark:text-white dark:hover:text-secondary">Repairs</a>
              </Link>
              <Link href="/court-finder">
                <a className="text-sm font-semibold hover:text-secondary dark:text-white dark:hover:text-secondary">Court Finder</a>
              </Link>
            </nav>
          )}
          
          <div className="flex items-center">
            <button 
              className="touch-target flex items-center justify-center p-2 mr-1" 
              aria-label="Search"
              onClick={toggleSearch}
            >
              <Search className="h-6 w-6" />
            </button>
            <button 
              className="touch-target flex items-center justify-center p-2" 
              aria-label="Toggle dark mode"
              onClick={toggleTheme}
            >
              {theme === 'dark' ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
