import { Link } from "wouter";
import { Lightbulb, ArrowRight } from "lucide-react";

export default function StrategiesSection() {
  const strategies = [
    {
      id: 1,
      title: "Mastering the Bandeja Shot",
      level: "Intermediate",
      author: "Carlos Padel Pro",
      imageUrl: "https://images.unsplash.com/photo-1588286840104-8457f630308d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=200",
    },
    {
      id: 2,
      title: "Defensive Techniques for Beginners",
      level: "Beginner",
      author: "Maria Garcia",
      imageUrl: "https://images.unsplash.com/photo-1545809074-59472b3f5ecc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=200",
    },
    {
      id: 3,
      title: "Advanced Positioning Strategy",
      level: "Advanced",
      author: "Fernando Martinez",
      imageUrl: "https://images.unsplash.com/photo-1620742820748-87c3d215d22c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=200",
    }
  ];

  return (
    <section id="strategies" className="py-6 px-4 bg-gray-50 dark:bg-gray-900/50">
      <div className="flex justify-between items-center mb-4">
        <h2 className="section-title">Level Up Your Game</h2>
        <Link href="/strategies">
          <a className="section-link">View All Tips</a>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {strategies.map((strategy) => (
          <div key={strategy.id} className="bg-white rounded-lg card-shadow dark:bg-gray-800">
            <div className="h-40 overflow-hidden rounded-t-lg">
              <img 
                src={strategy.imageUrl} 
                alt={strategy.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-4">
              <div className="flex items-center mb-2">
                <Lightbulb className="h-4 w-4 text-accent mr-1" />
                <span className={`text-xs font-semibold ${
                  strategy.level === 'Beginner' ? 'text-green-500' : 
                  strategy.level === 'Intermediate' ? 'text-blue-500' : 
                  'text-purple-500'
                }`}>
                  {strategy.level}
                </span>
              </div>
              <h3 className="font-montserrat font-bold text-base dark:text-white">{strategy.title}</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">by {strategy.author}</p>
              
              <Link href={`/strategy/${strategy.id}`}>
                <a className="mt-3 inline-flex items-center text-sm font-semibold text-primary dark:text-secondary">
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}