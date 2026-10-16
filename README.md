# Nagpur Anime Club — COSCON 2026

The official promotional and ticketing website for Nagpur Anime Club's COSCON 2026 anime, cosplay, manga, gaming, music, and pop-culture convention in Central India.

The site is built as a responsive React single-page application with multi-page navigation, event information, ticket booking, interactive experiences, and venue guidance.

## Features

- Cinematic scroll-driven hero experience using the event video and frame assets
- Countdown to the COSCON 2026 opening time
- Event highlights and the seven main attractions
- Two-day event schedule and timetable
- Ticket booking flow with OTA and BookMyShow pass options
- E-pass generation and free-merch voucher information
- Cosplay championship details and registration guidance
- Interactive three-question otaku quiz
- Venue, travel, parking, and stay information for Sequel Toyota, Nagpur
- Sakura-petal background animation with a user-controlled toggle
- Responsive navigation, footer, social links, and scroll-to-top behavior

## Tech stack

- React 19
- React Router 7
- Vite 8
- lucide-react for interface icons
- canvas-confetti for celebratory interactions
- Oxlint for linting

## Requirements

- Node.js 18 or newer
- npm

## Getting started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Vite will print the local URL in the terminal, usually `http://localhost:5173`.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server with hot module replacement |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run Oxlint against the project |

## Site routes

| Path | Purpose |
| --- | --- |
| `/` | Home page, countdown, hero experience, and event overview |
| `/events` | Main attractions and event highlights |
| `/schedule` | Two-day schedule and timetable |
| `/tickets` | Pass options, booking, and free-merch redemption details |
| `/cosplay` | Cosplay championship information |
| `/quiz` | Interactive otaku trivia quiz |
| `/venue` | Venue and travel guide |
| `/about` | Nagpur Anime Club and community information |

Unknown routes redirect to `/`.

## Project structure

```text
src/
├── App.jsx                 # Global layout and route definitions
├── App.css                 # Application-wide component styles
├── index.css               # Global styles and typography
├── components/             # Shared navigation, sections, animations, and modals
└── pages/                  # Route-level page components

public/                     # Static images, icons, video, and animation frames
assets/                     # Source media used during development
```

The `public/` directory contains files referenced by root-relative URLs such as `/nac-logo.png`, `/main-edit.mp4`, and `/frames/frame_001.jpg`. Keep these paths unchanged when moving or replacing media.

## Production build

Build the site and preview the generated output:

```bash
npm run build
npm run preview
```

Because the app uses `BrowserRouter`, production hosting must serve `index.html` as a fallback for client-side routes such as `/schedule` and `/tickets`.

## Social channels

- Instagram: [@nagpuranimeclub](https://instagram.com/nagpuranimeclub)
- YouTube: [Nagpur Anime Club](https://youtube.com/@nagpuranimeclub)
- Facebook: [Nagpur Anime Club](https://facebook.com/nagpuranimeclub)
