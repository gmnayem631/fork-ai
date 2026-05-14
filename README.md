# ForkAI

An AI-powered recipe discovery and meal planning platform built with Next.js, TypeScript, and Google Gemini AI.

## Live Demo

- **Live:** https://fork-ai-seven.vercel.app
- **GitHub:** https://github.com/gmnayem631/fork-ai

## Demo Credentials

| Role  | Email            | Password |
| ----- | ---------------- | -------- |
| User  | user@forkai.com  | user123  |
| Admin | admin@forkai.com | admin123 |

## AI Features

### 1. AI Kitchen - "What Can I Cook?"

Users enter ingredients they have in their fridge and Google Gemini generates a complete custom recipe including ingredients, step-by-step instructions, cook time, difficulty, and chef tips.

### 2. AI Meal Planner

Users select their dietary preference (Vegan, Keto, etc.) and health goal (Weight Loss, Muscle Gain, etc.) and Gemini generates a full personalized 7-day meal plan with breakfast, lunch, and dinner for each day including calorie estimates.

## Tech Stack

### Frontend

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Shadcn/UI
- React Hook Form + Zod
- TanStack Query
- Zustand
- Recharts

### Backend

- Next.js API Routes (serverless)
- NextAuth.js (Google OAuth + Credentials)
- In-memory storage
- Zod validation

### AI

- Google Gemini 2.5 Flash API

## Features

- Role-based dashboards (User & Admin)
- Authentication (email/password + Google OAuth)
- Recipe listing with search, filter, sort, pagination
- AI recipe generator from ingredients
- AI weekly meal planner
- Roles-speciific Dashboard with charts
- Dark mode support

## Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/fork-ai.git
cd fork-ai
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env.local` file in the root:

```env
GEMINI_API_KEY=your_gemini_api_key
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── (auth)/         # Login & Register pages
│   ├── (main)/         # Public pages (recipes, about, blog, etc.)
│   ├── api/            # API routes (auth, recipes, AI)
│   └── dashboard/      # User & Admin dashboards
├── components/
│   ├── shared/         # Navbar, Footer, Providers
│   ├── home/           # Landing page sections
│   ├── recipe/         # Recipe components
│   └── dashboard/      # Dashboard components
├── data/               # Seed data
├── hooks/              # Custom hooks
├── lib/                # Auth, Gemini, utilities
├── store/              # Zustand store
└── types/              # TypeScript types
```
