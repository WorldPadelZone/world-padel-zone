import HeroSection from "@/components/home/HeroSection";
import RankingsTicker from "@/components/home/RankingsTicker";
import NewsSection from "@/components/home/NewsSection";
import TournamentSection from "@/components/home/TournamentSection";
import EquipmentSection from "@/components/home/EquipmentSection";
import MarketplaceSection from "@/components/home/MarketplaceSection";
import RepairServiceSection from "@/components/home/RepairServiceSection";
import PadelToursSection from "@/components/home/PadelToursSection";
import ExoticCourtsSection from "@/components/home/ExoticCourtsSection";
import CommunitySection from "@/components/home/CommunitySection";
import StrategiesSection from "@/components/home/StrategiesSection";
import EquipmentReviewsSection from "@/components/home/EquipmentReviewsSection";
import TravelCornerSection from "@/components/home/TravelCornerSection";
import CourtFinderSection from "@/components/home/CourtFinderSection";
import CategoriesGrid from "@/components/home/CategoriesGrid";
import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>World Padel Zone - The Ultimate Digital Destination for Padel</title>
        <meta name="description" content="The ultimate digital destination for the global padel community featuring news, tournaments, equipment, marketplace, and more." />
        <meta property="og:title" content="World Padel Zone - The Ultimate Digital Destination for Padel" />
        <meta property="og:description" content="Your complete guide to the world of padel with latest news, tournaments, equipment, marketplace, and community." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://worldpadelzone.com" />
      </Helmet>

      <RankingsTicker />
      <main className="mt-4 mb-16 pb-8">
        <HeroSection />
        <CategoriesGrid />
        <NewsSection />
        <TournamentSection />
        <StrategiesSection />
        <EquipmentSection />
        <EquipmentReviewsSection />
        <MarketplaceSection />
        <RepairServiceSection />
        <TravelCornerSection />
        <PadelToursSection />
        <CourtFinderSection />
        <ExoticCourtsSection />
        <CommunitySection />
      </main>
    </>
  );
}
