import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { 
  getRankings, 
  getNews, 
  getTournaments, 
  getEquipment, 
  getMarketplaceItems, 
  getRepairServices, 
  getPadelTours, 
  getExoticCourts 
} from "../client/src/lib/constants";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes for World Padel Zone
  
  // Rankings API
  app.get("/api/rankings", (req, res) => {
    const rankings = getRankings();
    res.json(rankings);
  });

  // News API
  app.get("/api/news", (req, res) => {
    const news = getNews();
    res.json(news);
  });

  // Tournaments API
  app.get("/api/tournaments", (req, res) => {
    const tournaments = getTournaments();
    res.json(tournaments);
  });

  // Equipment API
  app.get("/api/equipment", (req, res) => {
    const equipment = getEquipment();
    res.json(equipment);
  });

  // Marketplace API
  app.get("/api/marketplace", (req, res) => {
    const marketplaceItems = getMarketplaceItems();
    res.json(marketplaceItems);
  });

  // Repair Services API
  app.get("/api/repair-services", (req, res) => {
    const repairServices = getRepairServices();
    res.json(repairServices);
  });

  // Padel Tours API
  app.get("/api/padel-tours", (req, res) => {
    const padelTours = getPadelTours();
    res.json(padelTours);
  });

  // Exotic Courts API
  app.get("/api/exotic-courts", (req, res) => {
    const exoticCourts = getExoticCourts();
    res.json(exoticCourts);
  });

  // Community sign-up API
  app.post("/api/community/signup", (req, res) => {
    const { name, email } = req.body;
    
    // Validate request body
    if (!name || !email) {
      return res.status(400).json({ message: "Name and email are required" });
    }
    
    // In a real implementation, we would store the user in a database
    // For now, just return success
    res.status(201).json({ message: "Sign up successful" });
  });

  const httpServer = createServer(app);
  return httpServer;
}
