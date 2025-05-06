# Using MDX in HosDev

MDX is a powerful format that combines Markdown with JSX (React components). This guide explains how to use MDX features in your blog posts.

## Basic Usage

MDX files have the extension `.mdx` and work similarly to normal Markdown (`.md`) files, but with added component capabilities.

```mdx
---
title: "Using MDX Features"
description: "Learn how to use MDX in your blog posts"
pubDate: 2025-05-01
---

# Hello MDX!

This is a **regular markdown** with *styling*.

{/* This is a comment that won't be rendered */}

<div className="custom-component">
  This is JSX within Markdown
</div>
```

## Adding Components

### Inline Components

You can use components directly in your MDX:

```mdx
import InfoBox from '../components/InfoBox.astro';

# My Post

Here's some important information:

<InfoBox type="warning">
  This feature is experimental!
</InfoBox>

And back to regular markdown.
```

### Dynamic Content

You can use JavaScript expressions:

```mdx
# Dynamic Content

{['apple', 'banana', 'orange'].map(fruit => (
  <li key={fruit}>{fruit}</li>
))}
```

## Frontmatter Access

You can access frontmatter values in your MDX:

```mdx
---
title: "My Post Title"
publishDate: 2025-05-01
---

export const formattedDate = new Date(frontmatter.publishDate).toLocaleDateString();

# {frontmatter.title}

Published on: {formattedDate}
```

## Styling MDX Content

### Global Styles

MDX content inherits styles from the parent layout. In HosDev, styles for common elements are defined in `src/styles/global.css`.

### Inline Styles

You can use inline styles in your MDX:

```mdx
<div style={{ color: 'blue', fontWeight: 'bold' }}>
  This text is blue and bold
</div>
```

### CSS Modules

For more complex styling, import CSS modules:

```mdx
import styles from './styles.module.css';

<div className={styles.specialBox}>
  Content with applied styles
</div>
```

## Code Blocks

MDX supports syntax highlighting in code blocks:

````mdx
```javascript
// This code will be syntax highlighted
function greet(name) {
  return `Hello, ${name}!`;
}
```
````

## Tables

MDX supports standard Markdown tables:

```mdx
| Name  | Age | Role          |
|-------|-----|---------------|
| Alice | 28  | Developer     |
| Bob   | 32  | Designer      |
| Carol | 45  | Project Lead  |
```

## Limitations and Best Practices

1. **Keep it simple** - While you can use complex JSX, simpler content is easier to maintain
2. **Performance** - Large, complex components may impact build and rendering speed
3. **Accessibility** - Ensure any custom components maintain proper accessibility
4. **Testing** - Test your MDX content to ensure it renders correctly

## Example Post

```mdx
---
title: "Getting Started with Astro and MDX"
description: "Learn how to build a blog with Astro and MDX"
pubDate: 2025-05-01
---

import Callout from '../components/Callout.astro';

# {frontmatter.title}

<Callout type="info">
  This article was published on {new Date(frontmatter.pubDate).toLocaleDateString()}
</Callout>

## Introduction

Astro is a modern static site generator that allows you to use your favorite UI components.

Here's a simple code example:

```js
// Simple greeting function
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet('Astro'));
```

## Features

<div className="feature-list">
  {['Zero JS by default', 'Component Islands', 'Fast builds'].map(feature => (
    <div key={feature} className="feature-item">{feature}</div>
  ))}
</div>
```

---

For more detailed information, refer to the [official MDX documentation](https://mdxjs.com/) and [Astro's MDX integration guide](https://docs.astro.build/en/guides/integrations-guide/mdx/).