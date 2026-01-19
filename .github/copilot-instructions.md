# Copilot Instructions for Ehsan Design Portfolio

## Project Overview
This is a React + Vite portfolio website for a senior product designer (Ehsan). It showcases design work with a custom routing system, dynamic project data, and interactive UI components.

**Tech Stack:** React 19, React Router v7, Vite, CSS (no CSS-in-JS)

## Architecture & Key Patterns

### Routing Structure
- **Root:** `src/App.jsx` - Sets up `BrowserRouter` with all routes and Menu component
- **Pages:** `src/pages/` - Each page is a route (Home, Expertise, WorkList, WorkTemplate, TorchPage, About, CV, Contact)
- **Dynamic Routes:** `/work/:id` maps to `WorkTemplate.jsx` which loads project data by ID
- **Navigation:** Uses `useNavigate()` from react-router-dom for programmatic routing; pass category params via query strings

### Project Data Management
- **Data Files:** `src/data/worksData.js` (array of project objects) and `src/data/project1Data.js` (separate detailed data for Project 1)
- **WorkTemplate Logic:** Checks if `projectId === 1` → loads `project1Data`, otherwise finds matching entry in `worksData` array
- **Project Structure:** Each project has `id`, `backgroundColor`, `title`, `timeline`, `team`, `role`, `heroImage`, `sections` (array of content blocks), `summary` (metadata), and category
- **Content Flexibility:** Section bodies can be strings or arrays of objects with `{type: 'paragraph'|'list', content/items}`

### Component Hierarchy
- **Menu:** Navigation/menu component (in root App)
- **Navbar:** Category filter buttons (All, UX/UI, Visual, Code, Industrial) - used in WorkTemplate and WorkList
- **WorkCard:** Reusable card component for displaying project thumbnails (props: size, image, title, year, category)
- **TextModule, Tabs, Tabs4:** Specialized content rendering components for project details
- **RelatedProjects:** Displays adjacent projects on WorkTemplate pages

### State Management Pattern
- React hooks (`useState`, `useEffect`, `useParams`, `useNavigate`) - no external state library
- Local component state for hover effects, timers, and UI states
- URL params for persistent state (category filters, project ID)

## Styling & Layout Conventions

- **CSS Modules:** Each page/feature has dedicated CSS file in `src/styles/` (e.g., `home.css`, `portfolio.css`, `tabs.css`)
- **Classes:** Use kebab-case for CSS class names; mirror component names
- **Flexbox:** Primary layout method; check existing CSS files for gaps, alignment patterns
- **No Tailwind/Bootstrap:** Pure CSS only - maintain consistency with existing approach
- **Color Scheme:** Projects use `backgroundColor` prop for page backgrounds (stored in data)
- **Responsive:** Mobile-first; media queries already in place (check portfolio.css for examples)

## Critical Developer Workflows

### Development
```bash
npm run dev        # Start Vite dev server with HMR
npm run build      # Production build to dist/
npm run preview    # Preview production build locally
npm run lint       # ESLint check (eslint.config.js)
```

### Common Tasks
- **Add New Project:** Add entry to `src/data/worksData.js` with required fields (id, title, sections, etc.)
- **Complex Project Data:** For detailed projects, create separate file in `src/data/` and conditionally load in `WorkTemplate.jsx`
- **Update Navigation:** Modify routes in `src/App.jsx` and add corresponding page in `src/pages/`
- **New Components:** Place reusable components in `src/components/`, pages in `src/pages/`

## Important Implementation Details

### Conditional Rendering in WorkTemplate
- **Special Case:** Project 1 uses separate data file for maintainability - explicitly check `projectId === 1` before accessing worksData
- **Error Handling:** WorkTemplate shows "Project not found" message if project doesn't exist
- **Body Content:** Use `renderBody()` helper to handle both string and array content types

### Menu & Navbar Interaction
- **Menu:** Fixed navigation component, always rendered in App
- **Navbar:** Category filter with two modes:
  - In WorkTemplate: uses `onCategoryChange` callback to navigate to WorkList with category param
  - In WorkList: receives category param and filters display locally
- **Active State:** Selected category styling via `selectedCategory` prop

### Timing & Animations
- Home page has 7-second timer before "Click to start" button appears (useEffect cleanup important)
- Hover effects use CSS transitions (0.3s ease is standard)
- Images use webp format in public/images/ directory structure

## ESLint & Code Quality
- Config in `eslint.config.js` (uses flat config)
- Plugins: `react-refresh`, `react-hooks`
- Run `npm run lint` before submitting changes
- Focus on React best practices: hooks dependencies, key props in lists, cleanup in useEffect

## When Modifying Existing Code
1. Check both data sources (worksData.js AND project1Data.js) when working with projects
2. Maintain CSS file separation per feature (don't consolidate into single file)
3. Preserve URL-based routing for deep linking and state persistence
4. Use webp images where possible for portfolio items
5. Test category filter transitions between WorkList and WorkTemplate views
