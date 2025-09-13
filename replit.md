# Security Assisters - Cybersecurity Education Platform

## Overview

Security Assisters is a cybersecurity awareness website designed to teach people of all ages and language backgrounds how to stay safe online. The platform provides educational content on essential cybersecurity topics including digital identity, phishing, malware, OTP security, and more. The application features a modern, responsive design with multilingual support (English and Hindi) and both light/dark theme options.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript, using Vite as the build tool
- **UI Components**: Shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with CSS variables for theming support
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: React Context for theme and language preferences, TanStack React Query for server state
- **Internationalization**: Custom translation system supporting English and Hindi languages

### Backend Architecture
- **Server**: Express.js with TypeScript running in ESM mode
- **Development**: Hot module replacement via Vite integration in development mode
- **API**: RESTful API structure with `/api` prefix for all endpoints
- **Storage Interface**: Abstracted storage layer with in-memory implementation (MemStorage class)
- **Error Handling**: Centralized error handling middleware with structured error responses

### Database Design
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema**: User management system with username/password authentication
- **Migration**: Schema definitions in shared directory for type safety across client and server
- **Connection**: Configured for Neon Database serverless PostgreSQL

### Styling and Theming
- **Design System**: Professional blue/white/green color scheme with CSS custom properties
- **Theme Support**: Light and dark mode with automatic persistence
- **Typography**: Inter font family with font weight variations
- **Responsive Design**: Mobile-first approach using Tailwind breakpoints
- **Component Variants**: Class Variance Authority for consistent component styling

### Development Tools
- **Build System**: Vite with React plugin and TypeScript support
- **Code Quality**: TypeScript strict mode with comprehensive type checking
- **Development Experience**: Replit-specific plugins for runtime error overlay and development banner
- **Asset Management**: Path aliases for clean imports (@/, @shared/, @assets/)

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, TypeScript
- **Build Tools**: Vite, ESBuild for production builds
- **UI Framework**: Radix UI primitives for accessible components

### Database and ORM
- **Database**: Neon Database (serverless PostgreSQL)
- **ORM**: Drizzle ORM with Drizzle Kit for migrations
- **Validation**: Zod for schema validation and type inference

### UI and Styling
- **CSS Framework**: Tailwind CSS with PostCSS
- **Component Library**: Shadcn/ui components
- **Icons**: Lucide React for consistent iconography
- **Animations**: CSS transitions and Tailwind animation utilities

### State Management and Data Fetching
- **Server State**: TanStack React Query for caching and synchronization
- **Form Handling**: React Hook Form with Hookform Resolvers
- **Client State**: React Context for global state (theme, language)

### Development and Tooling
- **Runtime**: Node.js with tsx for TypeScript execution
- **Package Manager**: npm with lock file for dependency consistency
- **Code Formatting**: TypeScript configuration with strict type checking
- **Development Server**: Express with Vite middleware integration

### Additional Libraries
- **Date Handling**: date-fns for date formatting and manipulation
- **Utility Functions**: clsx and tailwind-merge for conditional styling
- **Session Management**: connect-pg-simple for PostgreSQL session storage
- **Carousel Components**: Embla Carousel for interactive content presentation