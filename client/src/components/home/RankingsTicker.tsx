import { useQuery } from "@tanstack/react-query";
import { getRankings } from "@/lib/constants";
import { type Ranking } from "@/types";

export default function RankingsTicker() {
  const { data: rankings = getRankings(), isLoading } = useQuery({
    queryKey: ['/api/rankings'],
  });
  
  // Duplicate rankings to ensure continuous animation
  const rankingsArray = Array.isArray(rankings) ? rankings as Ranking[] : [];
  const duplicatedRankings = [...rankingsArray, ...rankingsArray];

  return (
    <div className="bg-white shadow-sm border-b dark:bg-gray-800 dark:text-white dark:border-gray-700">
      <div className="container mx-auto px-4 py-1">
        <div className="flex items-center">
          <h2 className="font-montserrat font-bold text-sm text-primary dark:text-secondary mr-4">WPT RANKINGS</h2>
          <div className="relative overflow-hidden flex-1">
            {isLoading ? (
              <div className="flex py-2">
                <div className="animate-pulse flex items-center space-x-2 w-full">
                  <div className="h-5 w-5 bg-gray-200 rounded-sm dark:bg-gray-700"></div>
                  <div className="space-y-1 flex-1">
                    <div className="h-2 bg-gray-200 rounded dark:bg-gray-700 w-24"></div>
                    <div className="h-2 bg-gray-200 rounded dark:bg-gray-700 w-16"></div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="rankings-ticker inline-flex items-center py-1">
                {duplicatedRankings.map((ranking, index) => (
                  <div key={index} className="flex items-center px-3 ml-4">
                    <span className="font-oswald font-semibold text-primary text-base mr-1 dark:text-secondary">
                      #{ranking.position}
                    </span>
                    <div className="flex flex-col">
                      <span className="font-semibold text-xs">{ranking.team}</span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">{ranking.category}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
