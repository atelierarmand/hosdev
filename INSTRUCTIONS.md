# HosDev - Developer Instructions

This document provides comprehensive instructions for developing, maintaining, and extending the HosDev website. It covers local development, git workflow, content management, and common tasks.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Local Development](#local-development)
3. [Git Workflow](#git-workflow)
4. [Content Management](#content-management)
   - [Adding Blog Posts](#adding-blog-posts)
   - [Adding Projects](#adding-projects)
   - [Creating Pages](#creating-pages)
5. [Site Structure](#site-structure)
6. [Styling Guidelines](#styling-guidelines)
7. [Deployment](#deployment)
8. [Troubleshooting](#troubleshooting)

## Project Overview

HosDev is a blog and project showcase site built with [Astro](https://astro.build), focusing on the intersection of hospitality and technology. The site features:

- Blog with MDX support
- Project showcases
- Clean, minimalist design
- Light/dark mode support
- Search functionality

## Local Development

### Prerequisites

- Node.js (v18+)
- npm (v8+)
- Git

### Setup

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

4. The site will be available at http://localhost:4321 (or another port if 4321 is in use)

### Working with the Development Environment

- **File changes**: Astro features hot module reloading, so most changes appear instantly without a browser refresh
- **Content changes**: When modifying the content collections, you may need to restart the server

## Git Workflow

### Branches

- `main`: Production-ready code
- Use feature branches for new features or significant changes

### Committing Changes

1. Create a branch for your changes:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes and commit with descriptive messages:
   ```bash
   git add .
   git commit -m "Add feature: detailed description"
   ```

3. Push your branch to GitHub:
   ```bash
   git push origin feature/your-feature-name
   ```

4. Create a Pull Request on GitHub to merge your changes to `main`

## Content Management

The site uses Astro's content collections system to manage content:

- `src/content/blog/`: Blog posts as Markdown or MDX files
- `src/content/projects/`: Project definitions as JSON files

### Adding Blog Posts

1. Create a new `.md` or `.mdx` file in `src/content/blog/` with the following frontmatter:

```md
---
title: "Your Post Title"
description: "Brief description of your post"
pubDate: 2025-05-01
updatedDate: 2025-05-10  # Optional
project: hotel-management  # Optional: Associate with a project
---

# Your Post Content

Content goes here in Markdown format.
```

2. File naming convention: use kebab-case for the filename, which will become the URL slug (e.g., `my-new-post.md` becomes `/my-new-post`)

### Adding Projects

1. Create a new JSON file in `src/content/projects/` with the following structure:

```json
{
  "name": "Project Name",
  "slug": "project-slug",
  "description": "Brief description of the project.",
  "status": "online"
}
```

2. Update the project schema in `src/content/config.ts` if adding a new project type:

```typescript
const projectSchema = z.enum([
  'hotel-management',
  'digital-concierge',
  'menucraft',
  'bookwise',
  'your-new-project-slug'  // Add your new project slug here
]);
```

### Creating Pages

#### Static Pages

1. For simple pages, create a `.md` file in `src/pages/`:

```md
---
layout: ../layouts/PageLayout.astro
title: Page Title
description: Page Description
---

# Page Content Here
```

2. For more complex pages, create an `.astro` file in `src/pages/`:

```astro
---
import MainLayout from '../layouts/MainLayout.astro';
---

<MainLayout title="Page Title">
  <main>
    <h1>Page Title</h1>
    <p>Content goes here...</p>
  </main>
</MainLayout>
```

## Site Structure

```
/
├── public/               # Static assets
├── src/
│   ├── content/          # Content collections
│   │   ├── blog/         # Blog posts
│   │   ├── projects/     # Project definitions
│   │   └── config.ts     # Collection schema definitions
│   ├── layouts/          # Layout components
│   │   ├── MainLayout.astro        # Main site layout
│   │   ├── BlogPostLayout.astro    # Blog post layout
│   │   ├── PageLayout.astro        # Generic page layout
│   │   └── PostContentLayout.astro # Enhanced post layout with project linking
│   ├── pages/            # Pages and routes
│   │   ├── index.astro                # Homepage
│   │   ├── [slug].astro              # Dynamic blog post route
│   │   ├── [project].astro           # Dynamic project page route
│   │   ├── about.md                  # About page
│   │   ├── blog/                     # Blog routes
│   │   │   ├── index.astro           # Redirects to /posts
│   │   │   └── [slug].astro          # Redirects to /[slug]
│   │   └── posts/                    # Posts listing
│   │       └── index.astro           # Blog post index
│   └── styles/           # Global styles
│       └── global.css    # Global CSS
├── astro.config.mjs      # Astro configuration
├── package.json          # Project dependencies
└── tsconfig.json         # TypeScript configuration
```

## Styling Guidelines

The site uses a custom CSS approach with:

- CSS variables for theming
- Dark/light mode support
- Mobile-responsive design

### CSS Variables

Key variables are defined in `src/styles/global.css`:

```css
:root {
  /* Colors */
  --color-bg: #4a525a;
  --color-text: #fff;
  /* ... more color variables ... */
  
  /* Typography */
  --font-main: system-ui, sans-serif;
  --font-secondary: system-ui, sans-serif;
  /* ... more typography variables ... */
  
  /* Layout */
  --max-width: 602px;
  --width: 602px;
  /* ... more layout variables ... */
}
```

### Adding Custom Styles

1. For page-specific styles, use Astro's scoped styles:

```astro
<style>
  .your-class {
    color: var(--color-text);
  }
</style>
```

2. For global styles, add to `src/styles/global.css`

## Deployment

The site uses GitHub for version control and can be deployed using various methods.

### Manual Deployment

1. Build the site:
   ```bash
   npm run build
   ```

2. The output will be in the `dist/` directory which can be deployed to any static hosting service

## Troubleshooting

### Common Issues

1. **Content not updating**:
   - Restart the dev server
   - Check the collection schemas in `src/content/config.ts`

2. **Astro build errors**:
   - Verify your content frontmatter matches the schema
   - Check for syntax errors in Markdown/MDX files

3. **Styling issues**:
   - Inspect CSS variables in the browser dev tools
   - Check media queries for responsive issues

### Getting Help

If you encounter issues not covered here:

1. Check [Astro documentation](https://docs.astro.build)
2. Examine the console for errors
3. Create a GitHub issue with detailed reproduction steps

---

This instruction file should be kept up-to-date as the project evolves. Last updated: May 2025.