# Studio Charles Portfolio

A modern portfolio website for Reuben Charles - Sydney-based social media content creator and video editor.

## Features

- Responsive design with mobile-first approach
- TikTok and YouTube video showcases
- Project onboarding wizard with instant quotes
- Contact form integration
- SEO optimized with proper meta tags
- Accessibility compliant (WCAG AA)

## Tech Stack

- React 19 with TypeScript
- Vite for build tooling
- React Router for navigation
- Tailwind CSS for styling
- Formspree for contact forms

## Development

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Environment Variables

Copy `.env.example` to `.env` and fill in your values:

```bash
cp .env.example .env
```

Required variables:
- `VITE_FORMSPREE_ID` - Your Formspree form ID for contact submissions
- `VITE_GEMINI_API_KEY` - (Optional) Gemini API key for AI features
- `VITE_GA_ID` - (Optional) Google Analytics tracking ID

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Visit `http://localhost:3000`

### Build for Production

```bash
npm run build
```

### Deploy to GitHub Pages

```bash
npm run build
npx gh-pages -d dist
```

## Important Security Notes

**CRITICAL:** The AI chat feature currently exposes API keys in client-side code. This is a security vulnerability. For production use:

1. Create a backend API (Express, Next.js API routes, or serverless functions)
2. Move all Gemini AI calls to the backend
3. Never expose API keys in React components or client bundles

Temporary solution: The AI chat feature is disabled by default until a proper backend is implemented.

## Project Structure

```
/
├── components/       # React components
├── pages/           # Page components
├── services/        # API service layer
├── index.html       # Entry HTML with meta tags
├── App.tsx          # Main app with routing
└── index.tsx        # App entry point
```

## Deployment

This site is configured for GitHub Pages deployment at `/STUDIOCHARLES/`.

To deploy:
1. Ensure all environment variables are set
2. Run `npm run build`
3. Run `npx gh-pages -d dist`
4. Wait 1-2 minutes for GitHub Pages to update

## Contributing

This is a personal portfolio project. For bugs or suggestions, please open an issue.

## License

All rights reserved - Reuben Charles / Studio Charles
