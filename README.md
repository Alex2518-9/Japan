# JapanWorld

**JapanWorld** is a visual guide to Japan, bringing together an introduction to the country's history, geography, culture, traditions, and language in one place. Browse the sections from the home page or use the navigation to explore each topic.

## Explore

| Section | What you'll find |
| --- | --- |
| History (`/history`) | A timeline of key events and periods in Japan's past |
| Geography (`/geography`) | An introduction to Japan's landscape and prefectures |
| Culture (`/culture`) | Cultural heritage, beliefs, and traditions |
| Language (`/language`) | An overview of hiragana, katakana, and kanji |

## Built With

- [Next.js](https://nextjs.org/) 16 with the App Router
- [React](https://react.dev/) 19 and [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) 4
- [Phosphor Icons](https://phosphoricons.com/)

## Run Locally

You'll need [Node.js](https://nodejs.org/) installed. Clone the repository, install its dependencies, and start the development server:

```bash
git clone <repository-url>
cd Japan
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The development server refreshes as you make changes.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build locally |
| `npm run lint` | Run ESLint across the project |

To check a production build locally:

```bash
npm run build
npm run start
```

## Project Structure

```text
src/app/
├── components/   # Shared layout and topic sections
├── culture/      # Culture page route
├── geography/    # Geography page route
├── history/      # History page route
├── language/     # Language page route
├── data.ts       # Shared timeline and language-card data
├── globals.css   # Global styles
├── layout.tsx    # Root layout and navigation
└── page.tsx      # Home page
public/           # Images and other static assets
```

## Deployment

This is a standard Next.js app and can be deployed to [Vercel](https://vercel.com/) or another platform that supports Next.js. See the [Next.js deployment guide](https://nextjs.org/docs/app/building-your-application/deploying) for platform-specific instructions.
