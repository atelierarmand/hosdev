# HosDev - Hospitality Development Platform

A modern development platform for hospitality management built with Astro.

## Features

- Modern, responsive design
- Fast, static site generation with Astro
- Content management with Astro's content collections
- Blog functionality with Markdown support
- Feature showcase pages
- Search functionality

## Getting Started

### Prerequisites

- Node.js (v18 or later recommended)
- npm (v8 or later recommended)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/atelierarmand/hosdev.git
cd hosdev
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The site will be available at http://localhost:4321

### Building for Production

To build the site for production:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
/
├── public/             # Static assets
├── src/
│   ├── components/     # Reusable UI components
│   ├── content/        # Content collections
│   │   ├── blog/       # Blog posts
│   │   ├── features/   # Feature definitions
│   │   └── config.ts   # Collection configuration
│   ├── layouts/        # Page layouts
│   ├── pages/          # Page components
│   └── styles/         # Global styles
└── package.json        # Project dependencies and scripts
```

## Content Management

### Blog Posts

Blog posts are stored as Markdown files in `src/content/blog/`. Each file includes frontmatter with metadata.

### Features

Feature definitions are stored as JSON files in `src/content/features/`.

## Technologies Used

- [Astro](https://astro.build/)
- [TypeScript](https://www.typescriptlang.org/)
- [MDX](https://mdxjs.com/) for content

## License

This project is licensed under the MIT License.