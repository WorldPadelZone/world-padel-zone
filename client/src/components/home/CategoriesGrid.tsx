import { Link } from "wouter";

interface CategoryCard {
  id: string;
  title: string;
  imageUrl: string;
  link: string;
}

export default function CategoriesGrid() {
  const categories: CategoryCard[] = [
    {
      id: "rules",
      title: "Rules",
      imageUrl: "/images/world padel zone 03.jpg",
      link: "/rules"
    },
    {
      id: "level-up",
      title: "Level Up Your Game",
      imageUrl: "/images/world padel zone 11.jpg",
      link: "/strategies"
    },
    {
      id: "strategies",
      title: "Strategies and Pro Tips",
      imageUrl: "/images/world padel zone 01.jpg",
      link: "/pro-tips"
    },
    {
      id: "equipment",
      title: "Equipment Reviews",
      imageUrl: "/images/world padel zone 07.jpg",
      link: "/equipment-reviews"
    },
    {
      id: "travel",
      title: "Travel Corner",
      imageUrl: "/images/world padel zone 06.jpg",
      link: "/travel"
    },
    {
      id: "community",
      title: "Community",
      imageUrl: "/images/world padel zone 10.jpg",
      link: "/community"
    },
    {
      id: "marketplace",
      title: "Padel Marketplace",
      imageUrl: "/images/world padel zone 00.jpg",
      link: "/marketplace"
    },
    {
      id: "repairs",
      title: "Padel Repairs",
      imageUrl: "/images/world padel zone 09.jpg",
      link: "/repairs"
    },
    {
      id: "court-finder",
      title: "Padel Court Finder",
      imageUrl: "/images/world padel zone 05.jpg",
      link: "/court-finder"
    }
  ];

  return (
    <section className="py-8 px-4">
      <div className="container mx-auto">
        <h2 className="section-title text-center mb-8 text-2xl">Explore Padel Categories</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link key={category.id} href={category.link}>
              <a className="block relative rounded-xl overflow-hidden group h-full shadow-md">
                <div className="aspect-w-1 aspect-h-1">
                  <img 
                    src={category.imageUrl} 
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-center justify-center">
                  <span className="bg-primary/70 text-white font-montserrat font-semibold px-6 py-3 rounded-full text-center backdrop-blur-sm border border-white/20 shadow-lg">
                    {category.title}
                  </span>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}