import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Header from "@/components/layout/Header";
import BottomNav from "@/components/layout/BottomNav";
import { useState } from "react";
import MainMenu from "@/components/layout/MainMenu";
import SearchBar from "@/components/layout/SearchBar";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      {/* Add other routes below as needed */}
      {/* <Route path="/news" component={NewsPage} /> */}
      {/* <Route path="/tournaments" component={TournamentsPage} /> */}
      {/* <Route path="/equipment" component={EquipmentPage} /> */}
      {/* <Route path="/marketplace" component={MarketplacePage} /> */}
      {/* <Route path="/repair" component={RepairPage} /> */}
      {/* <Route path="/tours" component={ToursPage} /> */}
      {/* <Route path="/courts" component={CourtsPage} /> */}
      {/* <Route path="/community" component={CommunityPage} /> */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);
  const toggleSearch = () => setSearchOpen(prev => !prev);
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Header toggleMenu={toggleMenu} toggleSearch={toggleSearch} />
        <MainMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
        <SearchBar isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
        <Toaster />
        <Router />
        <BottomNav />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
