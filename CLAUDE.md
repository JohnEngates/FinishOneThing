# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
**Finish One Thing Today** is a minimalist static website that displays daily inspirational quotes. It's built with vanilla JavaScript, HTML, and CSS with no framework dependencies.

## Development Commands

### Running Locally
Since this is a static site with no build process, use any simple HTTP server:

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (if http-server is installed globally)
http-server -p 8000

# PHP
php -S localhost:8000
```

Then visit `http://localhost:8000`

### Testing Changes
- No automated tests exist - test manually in browser
- Check mobile responsiveness using browser dev tools
- Verify quote cycling works by clicking "NEW QUOTE" button

## Architecture

### File Structure
- `index.html` - Single HTML page containing all markup
- `styles.css` - All styling including responsive design and animations
- `script.js` - Quote management and DOM manipulation logic
- `_redirects` - Cloudflare Pages redirect configuration (www to non-www)

### Key Code Patterns

**Quote Management (script.js)**
- Quotes stored in an array of objects with `text` and `author` properties
- Random quote selection without immediate repetition
- Updates both quote text and author elements

**Styling Approach (styles.css)**
- Mobile-first responsive design
- CSS custom properties for theming
- Gradient background with animation
- Flexbox for layout

### Deployment
- Hosted on Cloudflare Pages
- Automatic deployment from main branch
- Domain: finishonethingtoday.com (redirects from www subdomain)

### Important Considerations
- Keep the site lightweight - no frameworks or unnecessary dependencies
- Maintain accessibility - use semantic HTML and proper contrast ratios
- Preserve the minimalist aesthetic when making changes
- Ensure all quotes are properly formatted with both text and author