import { Link } from "wouter";

export default function HeroSection() {
  return (
    <section className="relative pt-5 pb-4 px-4">
      {/* Hero Image */}
      <div className="relative rounded-xl overflow-hidden h-48 md:h-64 lg:h-80">
        <img 
          src="/images/world padel zone 01.jpg"
          alt="Professional padel player in action"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent flex flex-col justify-end p-5">
          <h1 className="text-white font-montserrat font-bold text-2xl leading-tight">
            The Ultimate Padel Experience
          </h1>
          <p className="text-white text-sm mt-1 mb-3">
            Your complete guide to the world of padel
          </p>
          <Link href="/#community">
            <a className="bg-accent text-white font-montserrat font-semibold rounded-full py-2 px-6 touch-target w-48 text-center shadow-lg inline-block">
              Join Community
            </a>
          </Link>
        </div>
      </div>

      {/* Quick access sections */}
      <div className="mt-5 grid grid-cols-2 gap-3">
        <Link href="/#news">
          <a className="bg-white rounded-lg overflow-hidden card-shadow dark:bg-gray-800">
            <div className="h-24 overflow-hidden">
              <img 
                src="/images/world padel zone 08.jpg" 
                alt="Latest padel news"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-3">
              <h3 className="font-montserrat font-bold text-sm text-primary dark:text-white">Latest News</h3>
            </div>
          </a>
        </Link>
        
        <Link href="/#tournaments">
          <a className="bg-white rounded-lg overflow-hidden card-shadow dark:bg-gray-800">
            <div className="h-24 overflow-hidden">
              <img 
                src="/images/world padel zone 11.jpg" 
                alt="Upcoming padel tournaments"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-3">
              <h3 className="font-montserrat font-bold text-sm text-primary dark:text-white">Tournaments</h3>
            </div>
          </a>
        </Link>
        
        <Link href="/#marketplace">
          <a className="bg-white rounded-lg overflow-hidden card-shadow dark:bg-gray-800">
            <div className="h-24 overflow-hidden">
              <img 
                src="/images/world padel zone 00.jpg" 
                alt="Padel marketplace"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-3">
              <h3 className="font-montserrat font-bold text-sm text-primary dark:text-white">Marketplace</h3>
            </div>
          </a>
        </Link>
        
        <Link href="/#repair">
          <a className="bg-white rounded-lg overflow-hidden card-shadow dark:bg-gray-800">
            <div className="h-24 overflow-hidden">
              <img 
                src="/images/world padel zone 09.jpg" 
                alt="Padel racket repair service"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-3">
              <h3 className="font-montserrat font-bold text-sm text-primary dark:text-white">Repair Service</h3>
            </div>
          </a>
        </Link>
      </div>
    </section>
  );
}
