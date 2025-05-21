import { Link } from "wouter";
import { Star, BarChart } from "lucide-react";

export default function EquipmentReviewsSection() {
  const reviews = [
    {
      id: 1,
      product: "Babolat Technical Viper",
      rating: 4.8,
      reviewer: "Miguel Rodriguez",
      imageUrl: "https://pixabay.com/get/g444c3c7000beb492c60cbcadaeeca2241cae73217e5583d7f02806a9ff0a99e3dc34ee9342dd3e23fa1369a66671521f2a131adc845aef34789ff9fd51d8c6ec_1280.jpg",
      summary: "Perfect balance of power and control for advanced players"
    },
    {
      id: 2,
      product: "Head Delta Pro",
      rating: 4.6,
      reviewer: "Anna Martinez",
      imageUrl: "https://pixabay.com/get/g2601cdad1e50c5f4856ce64a53231d255cba9c0a71083b1c7198b6b137611d000c55bfa950e397e4338123424a19ba99c82dc03c1632f5c7a65dda1ed49715d2_1280.jpg",
      summary: "Great control and maneuverability for intermediate players"
    },
    {
      id: 3,
      product: "Adidas Metalbone",
      rating: 4.7,
      reviewer: "Carlos Sanchez",
      imageUrl: "https://pixabay.com/get/g49a770ec3a15b6c0f1efea3c63d27c0db039ab1160d68212a26d4420ab976f05a9e8a8c7dff41b20f4bdd87881290b715c3b6b8dcc0ad32d7cd51fd24838ca41_1280.jpg",
      summary: "Excellent power and durability for competitive players"
    }
  ];

  return (
    <section id="equipment-reviews" className="py-6 px-4 bg-gray-50 dark:bg-gray-900/50">
      <div className="flex justify-between items-center mb-4">
        <h2 className="section-title">Equipment Reviews</h2>
        <Link href="/equipment-reviews">
          <a className="section-link">View All Reviews</a>
        </Link>
      </div>

      <div className="space-y-4">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white rounded-lg card-shadow flex overflow-hidden dark:bg-gray-800">
            <div className="w-1/3 max-w-[120px]">
              <img 
                src={review.imageUrl} 
                alt={review.product}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-3 flex-1">
              <div className="flex justify-between items-start">
                <h3 className="font-montserrat font-bold text-sm dark:text-white">{review.product}</h3>
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-accent fill-current" />
                  <span className="text-xs font-semibold ml-1">{review.rating}</span>
                </div>
              </div>
              
              <p className="text-xs text-gray-500 dark:text-gray-400">Reviewed by {review.reviewer}</p>
              
              <p className="text-sm mt-1 line-clamp-2 dark:text-gray-300">{review.summary}</p>
              
              <div className="mt-2">
                <Link href={`/equipment-reviews/${review.id}`}>
                  <a className="inline-flex items-center text-xs font-semibold text-primary dark:text-secondary">
                    <BarChart className="h-3 w-3 mr-1" />
                    See Performance Metrics
                  </a>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-4 text-center">
        <Link href="/equipment-reviews/comparison">
          <a className="bg-primary text-white font-montserrat font-semibold rounded-full py-2 px-6 inline-block touch-target shadow-md dark:bg-primary/80">
            Compare Products
          </a>
        </Link>
      </div>
    </section>
  );
}