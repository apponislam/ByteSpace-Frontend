# ByteSpace - Modern E-Learning & Course Platform

<div align="center">
  <img src="public/logo.svg" alt="ByteSpace Logo" width="64" height="64" />
  <h3>Level Up Your Skills With ByteSpace</h3>
  <p>A modern, high-performance e-learning platform and digital course marketplace built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4.</p>
</div>

---

## Overview

**ByteSpace** is an educational technology web application delivering a digital learning experience. It combines brand identity (blueprint grid styling, vibrant lime accents `#D4FB20`, and brand blue `#003BE2`) with performant App Router architecture, responsive UI components, and client-side form validation.

---

## Key Features

### 1. Landing Page

- **Adaptive Navigation Bar**: Sticky header featuring dynamic scroll detection, blur backdrop, smooth height transitions, and a mobile drawer.
- **Hero Area**: High-impact banner with 3D decorative shapes, fast course search, and student engagement metrics.
- **Course Showcase**: Interactive cards featuring lesson counters, duration, student ratings, level tags, overlapping student avatars, and pricing.
- **Interactive Growth Section**: Visually rich cards highlighting student success and skill roadmaps.
- **Student Testimonials**: Community review showcase highlighting learner feedback and course ratings.

### 2. Course Catalog & Discovery (`/courses`)

- **Course Hero Banner**: Blueprint grid banner with live search and category select.
- **Multi-Level Filtering Toolbar**:
    - Filter by difficulty level (_Beginner_, _Intermediate_, _Advanced_).
    - Filter by category pills (_Featured_, _Music_, _Drawing & Painting_, _Marketing_, _Animation_, _Social Media_, _UI/UX Design_, _Creative Marketing_, _Cooking_).
    - Sorting options (_Most relevant_, _Highest rated_, _Newest_, _Price: Low to High_).
- **Responsive 12-Card Grid**: Clean, balanced 3-column layout showcasing courses with instructor credits and enrollment counters.
- **Dynamic Pagination**: Page-switching controls with previous/next triggers and active page indicators.

### 3. Dedicated Authentication Suite (`/login` & `/register`)

- **Strict Two-Page Architecture**: Distraction-free `/login` and `/register` routes.
- **Figma-Accurate 3D Visual Cluster**: Integrated blueprint grid, overlapping course cards, floating geometric 3D shapes (`icon1.svg`, `icon2.svg`, `icon3.svg`), and _Happy Students_ badge.
- **Form Handling & Validation**: Built with `react-hook-form` and `zod` schemas providing real-time feedback and type-safe error handling.
- **Social Login Options**: One-tap sign-in entry points for Google and Facebook.
- **SEO Ready**: Dedicated Next.js `metadata` for titles and descriptions.

---

## Tech Stack

| Category               | Technology                                                                |
| ---------------------- | ------------------------------------------------------------------------- |
| **Framework**          | [Next.js 16](https://nextjs.org/) (App Router, Server Components)         |
| **Library**            | [React 19](https://react.dev/)                                            |
| **Language**           | [TypeScript 5](https://www.typescriptlang.org/)                           |
| **Styling**            | [Tailwind CSS v4](https://tailwindcss.com/)                               |
| **Forms & Validation** | [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/) |
| **Icons**              | [Lucide React](https://lucide.dev/)                                       |
| **Typography**         | Clash Display & Satoshi / Inter                                           |

---

## Project Structure

```text
bytespace-frontend/
├── app/
│   ├── (auth)/                  # Isolated authentication layout & pages
│   │   ├── layout.tsx           # Blueprint background layout
│   │   ├── login/               # Sign In route (/login)
│   │   │   └── page.tsx
│   │   └── register/            # Sign Up route (/register)
│   │       └── page.tsx
│   ├── (root)/                  # Main application layout & pages
│   │   ├── layout.tsx           # Common layout with Header and Footer
│   │   ├── page.tsx             # Home landing page
│   │   └── courses/             # Course catalog route (/courses)
│   │       └── page.tsx
│   ├── globals.css              # Tailwind v4 directives & theme variables
│   └── layout.tsx               # Root document layout
├── components/
│   ├── auth/                    # Auth-specific UI components
│   │   ├── AuthVisual.tsx       # 3D cards and shapes illustration
│   │   ├── LoginForm.tsx        # React Hook Form + Zod Login form
│   │   └── RegisterForm.tsx     # React Hook Form + Zod Register form
│   ├── courses/                 # Courses catalog components
│   │   ├── CourseHero.tsx       # Search and category hero
│   │   └── CourseList.tsx       # Filters, pills, 12-card grid & pagination
│   ├── home/                    # Landing page sections
│   │   ├── HeroArea.tsx         # Hero section
│   │   ├── GrowthSection.tsx    # Growth & achievements section
│   │   └── TestimonialSection.tsx
│   ├── CourseCard.tsx           # Universal reusable course card
│   ├── Header.tsx               # Main sticky navigation
│   └── Footer.tsx               # Footer component
├── data/
│   └── course.ts                # Strongly-typed course data and schema
└── public/
    ├── auth/                    # 3D shapes and card vector graphics
    ├── home/                    # Landing page decorative assets
    └── logo.svg                 # ByteSpace brand icon
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18.18 or higher recommended)
- `npm`, `pnpm`, or `yarn`

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/apponislam/ByteSpace-Frontend.git
    cd ByteSpace-Frontend
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Start the local development server:**

    ```bash
    npm run dev
    ```

4. **Open the application:**
   Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

---

## Scripts

- `npm run dev` - Launches the Next.js development server with hot-reloading.
- `npm run build` - Creates an optimized production build.
- `npm run start` - Runs the production server after building.
- `npm run lint` - Runs ESLint code style and syntax checks.
- `npx tsc --noEmit` - Validates TypeScript types across the entire project.

---

## License

This project is licensed under the MIT License.
