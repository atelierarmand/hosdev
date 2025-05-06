# HosDev - Hospitality Development Blog

A modern blog and project showcase for hospitality technology, built with [Astro](https://astro.build).

![HosDev Screenshot](public/screenshot.png)

## Features

- **Fast, static site** built with Astro
- **MDX support** for enhanced content
- **Content collections** for organized content management
- **Project showcase** with linked blog posts
- **Responsive design** that works on all devices
- **Dark/light mode** support
- **Search functionality** with keyboard shortcuts
- **Zero client-side JavaScript** by default (Islands architecture)

## Getting Started

### Prerequisites

- Node.js (v18+)
- npm (v8+)

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

Visit `http://localhost:4321` (or the port shown in your terminal) to see the site.

## Documentation

- [Instructions](INSTRUCTIONS.md) - Detailed developer guide
- [Quick Reference](QUICK-REFERENCE.md) - Common commands and templates

## Project Structure

```
/
├── public/             # Static assets
├── src/
│   ├── content/        # Content collections
│   │   ├── blog/       # Blog posts
│   │   ├── projects/   # Project definitions
│   │   └── config.ts   # Collection schemas
│   ├── layouts/        # Layout components
│   ├── pages/          # Pages and routes
│   └── styles/         # Global styles
└── astro.config.mjs    # Astro configuration
```

## Content Management

### Adding Blog Posts

Create a new `.md` or `.mdx` file in `src/content/blog/` with the required frontmatter:

```md
---
title: "Post Title"
description: "Brief description"
pubDate: 2025-05-01
project: hotel-management  # Optional
---

Content goes here...
```

### Adding Projects

Create a new JSON file in `src/content/projects/`:

```json
{
  "name": "Project Name",
  "slug": "project-slug",
  "description": "Project description.",
  "status": "online"
}
```

## License

[MIT License](LICENSE)

## Acknowledgments

- Built with [Astro](https://astro.build)
- Design inspired by minimalist blogs like [Daring Fireball](https://daringfireball.net) and [MGX.me](https://mgx.me)