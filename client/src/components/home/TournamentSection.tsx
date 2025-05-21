import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { getTournaments } from "@/lib/constants";
import { Tournament } from "@/types";

export default function TournamentSection() {
  const { data: tournaments = getTournaments(), isLoading } = useQuery({
    queryKey: ['/api/tournaments'],
  });

  const featuredTournament = tournaments.find(t => t.featured);
  const upcomingTournaments = tournaments.filter(t => !t.featured).slice(0, 3);

  return (
    <section id="tournaments" className="py-6 px-4 bg-primary text-white">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-montserrat font-bold text-xl">Upcoming Tournaments</h2>
        <Link href="/tournaments">
          <a className="text-accent font-semibold text-sm">View Calendar</a>
        </Link>
      </div>
      
      {isLoading ? (
        // Skeleton loading state
        <div className="space-y-4">
          <div className="bg-white/10 rounded-lg p-4 mb-5 animate-pulse">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-white/20 rounded-lg"></div>
              <div className="ml-3 flex-1">
                <div className="h-4 bg-white/20 rounded w-32"></div>
                <div className="h-3 bg-white/20 rounded w-24 mt-2"></div>
              </div>
            </div>
          </div>
          {Array(3).fill(0).map((_, i) => (
            <div key={i} className="bg-white/10 rounded-lg p-3 animate-pulse">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-white/20 rounded-lg"></div>
                <div className="ml-3 flex-1">
                  <div className="h-4 bg-white/20 rounded w-28"></div>
                  <div className="h-3 bg-white/20 rounded w-20 mt-1"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <>
          {featuredTournament && (
            <div className="bg-white/10 rounded-lg p-4 mb-5">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                  <span className="font-oswald font-bold text-lg">{featuredTournament.date.day}</span>
                  <span className="font-oswald text-xs ml-0.5">{featuredTournament.date.month}</span>
                </div>
                <div className="ml-3">
                  <h3 className="font-montserrat font-bold text-sm">{featuredTournament.name}</h3>
                  <p className="text-xs text-white/80">{featuredTournament.location}</p>
                </div>
                <div className="ml-auto">
                  <span className="bg-secondary px-2 py-0.5 rounded text-xs font-semibold">Featured</span>
                </div>
              </div>
              <div className="flex justify-end mt-2">
                <button className="text-xs font-semibold px-4 py-2 bg-white/20 rounded-full touch-target">
                  More Info
                </button>
              </div>
            </div>
          )}
          
          <div className="space-y-3">
            {upcomingTournaments.map((tournament) => (
              <div key={tournament.id} className="bg-white/10 rounded-lg p-3">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <span className="font-oswald font-bold text-sm">{tournament.date.day}</span>
                    <span className="font-oswald text-xs ml-0.5">{tournament.date.month}</span>
                  </div>
                  <div className="ml-3">
                    <h3 className="font-montserrat font-bold text-sm">{tournament.name}</h3>
                    <p className="text-xs text-white/80">{tournament.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-5 flex justify-center">
            <button className="bg-white text-primary font-montserrat font-semibold rounded-full py-2 px-8 touch-target text-center shadow-lg">
              Register Now
            </button>
          </div>
        </>
      )}
    </section>
  );
}
