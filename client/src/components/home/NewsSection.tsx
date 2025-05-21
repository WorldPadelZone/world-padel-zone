import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { getNews } from "@/lib/constants";
import { NewsArticle } from "@/types";

export default function NewsSection() {
  const { data: newsArticles = getNews(), isLoading } = useQuery({
    queryKey: ['/api/news'],
  });

  return (
    <section id="news" className="py-6 px-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="section-title">Latest News</h2>
        <Link href="/news">
          <a className="section-link">View All</a>
        </Link>
      </div>
      
      <div className="flex overflow-x-auto pb-4 space-x-4 scrollbar-hide -mx-4 px-4">
        {isLoading ? (
          // Skeleton loading state
          Array(3).fill(0).map((_, i) => (
            <div key={i} className="flex-shrink-0 w-64 bg-white rounded-lg card-shadow dark:bg-gray-800">
              <div className="h-36 bg-gray-200 dark:bg-gray-700 rounded-t-lg animate-pulse"></div>
              <div className="p-3">
                <div className="w-16 h-3 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                <div className="w-56 h-4 bg-gray-200 dark:bg-gray-700 rounded mt-2 animate-pulse"></div>
                <div className="w-24 h-3 bg-gray-200 dark:bg-gray-700 rounded mt-2 animate-pulse"></div>
              </div>
            </div>
          ))
        ) : (
          newsArticles.map((article: NewsArticle) => (
            <div 
              key={article.id} 
              data-category={article.category} 
              className="flex-shrink-0 w-64 bg-white rounded-lg card-shadow dark:bg-gray-800"
            >
              <div className="h-36 overflow-hidden rounded-t-lg">
                <img 
                  src={article.imageUrl} 
                  alt={article.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-3">
                <span className={`text-xs font-semibold uppercase ${
                  article.category === 'tournament' ? 'text-accent' : 
                  article.category === 'equipment' ? 'text-secondary' : 
                  'text-primary'
                }`}>
                  {article.category}
                </span>
                <h3 className="font-montserrat font-bold text-sm mt-1 dark:text-white">{article.title}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{article.timeAgo}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
