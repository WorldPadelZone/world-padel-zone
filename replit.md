# World Padel Zone - Digital Platform for Padel Community

## Overview

World Padel Zone is a full-stack web application that serves as the ultimate digital destination for the global padel community. The platform provides news, tournament information, equipment showcases, marketplace listings, repair services, padel tours, court information, and community features.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a modern full-stack architecture:

1. **Frontend**: React-based SPA with TypeScript, using a component-based architecture
2. **Backend**: Express.js server with Node.js
3. **Database**: PostgreSQL with Drizzle ORM for type-safe database access
4. **State Management**: React Query for server state management
5. **Styling**: Tailwind CSS with a custom theme and Shadcn UI components
6. **API Layer**: REST API for communication between frontend and backend

The application uses a monorepo structure with clear separation between client, server, and shared code, enabling type sharing across the stack.

## Key Components

### Frontend

1. **UI Framework**: A comprehensive UI component library built with Radix UI primitives and styled with Tailwind CSS (shadcn/ui approach). Components include:
   - Layout components (Header, Footer, Navigation)
   - UI primitives (Button, Card, Input, etc.)
   - Domain-specific components (News cards, Tournament displays, etc.)

2. **Routing**: Uses Wouter for client-side routing with a simple, lightweight approach

3. **Theme System**: Implements a dark/light theme toggle with CSS variables for consistent theming

4. **Mobile-First Design**: Responsive layouts with special consideration for mobile navigation (bottom tabs)

### Backend

1. **API Routes**: REST endpoints organized by domain (news, rankings, tournaments, etc.)

2. **Data Access Layer**: Abstraction for database operations using Drizzle ORM

3. **Storage Interface**: Modular storage implementation that can be swapped based on environment

4. **Request Logging**: Built-in logging for API requests to assist with debugging

### Database

1. **Schema**: Defined using Drizzle ORM with typed tables for users, rankings, and news

2. **Validation**: Schema validation using Zod combined with Drizzle for type-safe operations

## Data Flow

1. **Client-Server Communication**:
   - React Query manages API requests, caching, and state
   - REST endpoints serve data from the database
   - TypeScript ensures type safety between client and server

2. **Data Persistence**:
   - Server interacts with PostgreSQL database through Drizzle ORM
   - Database schema is defined in shared code to ensure consistency
   - API validation using Zod ensures data integrity

3. **Authentication Flow** (to be implemented):
   - Users can register and login
   - JWT or session-based authentication will handle user sessions
   - Protected routes will require authentication

## External Dependencies

### Frontend Libraries
- **@radix-ui**: Unstyled, accessible UI components
- **@tanstack/react-query**: Data fetching and state management
- **shadcn/ui**: Component patterns and styling approach
- **Tailwind CSS**: Utility-first CSS framework
- **wouter**: Lightweight router for React
- **Lucide Icons**: Icon library

### Backend Libraries
- **Express.js**: Web server framework
- **Drizzle ORM**: Type-safe SQL toolkit
- **Zod**: Schema validation

### Database
- **PostgreSQL**: Relational database for persistent storage
- **Drizzle Kit**: Database migration tool

## Deployment Strategy

The application is configured for deployment on Replit:

1. **Development**: `npm run dev` launches both frontend and backend in development mode
2. **Build Process**: Vite builds the frontend and esbuild bundles the server
3. **Production**: `npm run start` serves the built application
4. **Environment Variables**: Configuration via environment variables including DATABASE_URL
5. **Database**: Uses PostgreSQL module from Replit

The deployment leverages Replit's autoscale capabilities, with proper build and run commands specified in the .replit configuration file.

## Future Enhancements

1. **Authentication System**: Implement user registration, login, and profile management
2. **Real-time Features**: Add WebSocket support for live scores and notifications
3. **Payment Processing**: Integrate payment gateway for marketplace transactions
4. **Advanced Search**: Implement full-text search for content discovery
5. **Social Features**: Add commenting, liking, and sharing capabilities