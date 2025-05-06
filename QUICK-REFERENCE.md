# HosDev - Quick Reference Guide

## Important Commands

### Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Git Commands

```bash
# Check status
git status

# Create and switch to new branch
git checkout -b feature/name

# Add all changes
git add .

# Commit changes
git commit -m "Your message"

# Push to GitHub
git push origin branch-name

# Pull latest changes
git pull origin main
```

## File Locations

- **Blog posts**: `src/content/blog/*.md`
- **Projects**: `src/content/projects/*.json`
- **Pages**: `src/pages/`
- **Layouts**: `src/layouts/`
- **Global styles**: `src/styles/global.css`

## Content Templates

### Blog Post Template

```md
---
title: "Post Title" 
description: "Brief description of your post"
pubDate: 2025-05-01
updatedDate: 2025-05-10  # Optional
project: project-slug    # Optional: Link to a project
---

# Main Heading

Your content here...

## Subheading

More content...
```

### Project Template

```json
{
  "name": "Project Name",
  "slug": "project-slug",
  "description": "Brief project description.",
  "status": "online"
}
```

## URLs & Routes

- **Home**: `/`
- **Blog post**: `/{slug}`
- **Project page**: `/{project-slug}`
- **All posts**: `/posts`
- **About page**: `/about`

## Search

- Press `⌘K` (Mac) or `Ctrl+K` (Windows) to open search
- Search by title or description

## Development Tips

- The site supports both light and dark modes, test both
- Check mobile responsiveness with browser dev tools
- When creating new collection entries, ensure they match the schema in `src/content/config.ts`

## Design Tokens

```css
/* Key color variables */
--color-bg: #4a525a;        /* Background (dark mode) */
--background-color: #fafafa; /* Background (light mode) */
--text-color: #e5e7eb;      /* Text (dark mode) */
--link-color: #e5e7eb;      /* Link (dark mode) */
--sub-color: #a2a2a2;       /* Muted text */

/* Layout variables */
--max-width: 602px;        /* Max content width */
--space-sm: 1rem;          /* Small spacing */
--space-md: 2rem;          /* Medium spacing */
--space-lg: 3rem;          /* Large spacing */
--space-xl: 4rem;          /* Extra large spacing */
```