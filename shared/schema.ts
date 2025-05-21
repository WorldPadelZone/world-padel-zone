import { pgTable, text, serial, integer, boolean, timestamp, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// User schema
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  email: text("email").notNull(),
  name: text("name"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
  email: true,
  name: true,
});

// Rankings schema
export const rankings = pgTable("rankings", {
  id: serial("id").primaryKey(),
  position: integer("position").notNull(),
  team: text("team").notNull(),
  category: text("category").notNull(),
});

export const insertRankingSchema = createInsertSchema(rankings).pick({
  position: true,
  team: true,
  category: true,
});

// News schema
export const news = pgTable("news", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  content: text("content").notNull(),
  category: text("category").notNull(),
  imageUrl: text("image_url").notNull(),
  publishedAt: timestamp("published_at").defaultNow().notNull(),
});

export const insertNewsSchema = createInsertSchema(news).pick({
  title: true,
  content: true,
  category: true,
  imageUrl: true,
});

// Tournaments schema
export const tournaments = pgTable("tournaments", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  location: text("location").notNull(),
  day: varchar("day", { length: 2 }).notNull(),
  month: varchar("month", { length: 3 }).notNull(),
  featured: boolean("featured").default(false),
});

export const insertTournamentSchema = createInsertSchema(tournaments).pick({
  name: true,
  location: true,
  day: true,
  month: true,
  featured: true,
});

// Products schema
export const products = pgTable("products", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  brand: text("brand").notNull(),
  price: integer("price").notNull(),
  originalPrice: integer("original_price"),
  imageUrl: text("image_url").notNull(),
  tag: text("tag"),
});

export const insertProductSchema = createInsertSchema(products).pick({
  name: true,
  brand: true,
  price: true,
  originalPrice: true,
  imageUrl: true,
  tag: true,
});

// Marketplace items schema
export const marketplaceItems = pgTable("marketplace_items", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  price: integer("price").notNull(),
  condition: text("condition").notNull(),
  location: text("location").notNull(),
  rating: integer("rating").notNull(),
  seller: text("seller").notNull(),
  imageUrl: text("image_url").notNull(),
  category: text("category").notNull(),
});

export const insertMarketplaceItemSchema = createInsertSchema(marketplaceItems).pick({
  name: true,
  price: true,
  condition: true,
  location: true,
  rating: true,
  seller: true,
  imageUrl: true,
  category: true,
});

// Padel Tours schema
export const padelTours = pgTable("padel_tours", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description"),
  location: text("location").notNull(),
  duration: text("duration").notNull(),
  level: text("level").notNull(),
  price: text("price").notNull(),
  imageUrl: text("image_url").notNull(),
  featured: boolean("featured").default(false),
});

export const insertPadelTourSchema = createInsertSchema(padelTours).pick({
  name: true,
  description: true,
  location: true,
  duration: true,
  level: true,
  price: true,
  imageUrl: true,
  featured: true,
});

// Exotic Courts schema
export const exoticCourts = pgTable("exotic_courts", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  location: text("location").notNull(),
  imageUrl: text("image_url").notNull(),
});

export const insertExoticCourtSchema = createInsertSchema(exoticCourts).pick({
  name: true,
  location: true,
  imageUrl: true,
});

// Community Members schema
export const communityMembers = pgTable("community_members", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  joinedAt: timestamp("joined_at").defaultNow().notNull(),
});

export const insertCommunityMemberSchema = createInsertSchema(communityMembers).pick({
  name: true,
  email: true,
});

// Type exports
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertRanking = z.infer<typeof insertRankingSchema>;
export type Ranking = typeof rankings.$inferSelect;

export type InsertNews = z.infer<typeof insertNewsSchema>;
export type News = typeof news.$inferSelect;

export type InsertTournament = z.infer<typeof insertTournamentSchema>;
export type Tournament = typeof tournaments.$inferSelect;

export type InsertProduct = z.infer<typeof insertProductSchema>;
export type Product = typeof products.$inferSelect;

export type InsertMarketplaceItem = z.infer<typeof insertMarketplaceItemSchema>;
export type MarketplaceItem = typeof marketplaceItems.$inferSelect;

export type InsertPadelTour = z.infer<typeof insertPadelTourSchema>;
export type PadelTour = typeof padelTours.$inferSelect;

export type InsertExoticCourt = z.infer<typeof insertExoticCourtSchema>;
export type ExoticCourt = typeof exoticCourts.$inferSelect;

export type InsertCommunityMember = z.infer<typeof insertCommunityMemberSchema>;
export type CommunityMember = typeof communityMembers.$inferSelect;
