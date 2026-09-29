# ByteSpace - Modern E-Learning & Course Platform

<div align="center">
  <img src="public/logo.svg" alt="ByteSpace Logo" width="64" height="64" />
  <h3>Level Up Your Skills With ByteSpace</h3>
  <p>A modern, high-performance e-learning platform and digital course marketplace built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4.</p>

  <br />

  [**🌐 View Live Demo**](https://bytespace-frontend-indol.vercel.app) • [**GitHub Repository**](https://github.com/apponislam/ByteSpace-Frontend)
</div>

---

## 🚀 Live Demo

Check out the live application hosted on Vercel:
👉 **[https://bytespace-frontend-indol.vercel.app](https://bytespace-frontend-indol.vercel.app)**

---

## Overview

**ByteSpace** is a comprehensive educational technology web application delivering a premium digital learning and creator experience. It combines a distinctive brand identity (blueprint grid styling, vibrant lime accents `#D4FB20`, and brand blue `#003BE2`) with performant App Router architecture, responsive UI components, client-side form validation, course catalog exploration, detailed course pages, creator profiles, and legal policy documentation.

---

## Key Features & Pages

### 1. Landing Page (`/`)

- **Adaptive Header Navigation**: Sticky header with scroll detection, backdrop blur, active link indicators, and responsive mobile slide-out drawer.
- **Hero Area**: High-impact banner featuring custom 3D decorative shapes, fast keyword course search, and student engagement metrics.
- **Top Courses Showcase**: Reusable course cards featuring lesson counters, video duration, student ratings, difficulty tags, overlapping student avatars, and pricing.
- **Interactive Growth & Unlock Sections**: Visually rich sections highlighting student achievements, platform statistics, and community creator recruitment.
- **Student Testimonials**: Community review showcase highlighting learner feedback, star ratings, and student stories.

### 2. Course Catalog & Discovery (`/courses`)

- **Course Hero Banner**: Custom blueprint grid hero with interactive keyword search and category selection dropdown.
- **Interactive Filtering Toolbar**:
  - Difficulty level filter dropdown (*All*, *Beginner*, *Intermediate*, *Advanced*).
  - Collapsible category pill bar (*Featured*, *Music*, *Drawing & Painting*, *Marketing*, *Animation*, *Social Media*, *UI/UX Design*, *Creative Marketing*, *Cooking*).
  - Sorting selector (*Most relevant*, *Highest rated*, *Newest*, *Price: Low to High*).
- **Responsive 12-Card Grid**: Balanced 3-column responsive grid displaying courses with author credits, star ratings, and price tags.
- **Pagination Controls**: Page navigation with previous/next triggers and active page indicators.

### 3. Course Details Page (`/courses/[id]`)

- **Course Overview**: In-depth course page with video preview hero, objective breakdown, skill tags, and curriculum tabs.
- **Interactive Curriculum Accordion**: Expandable module breakdown listing individual lessons with duration markers.
- **Instructor Sidebar Card**: Profile widget linking to the instructor's dedicated creator profile page.
- **Sticky Course Pricing Box**: Desktop sticky widget for instant course enrollment and checkout triggers.

### 4. Creator Directory & Profiles (`/creators` & `/creators/[slug]`)

- **Creators Directory (`/creators`)**:
  - Hero banner with creator search bar and skill discipline filter pills.
  - Creator card grid displaying avatar, bio snippet, total courses published, followers count, and star rating.
  - Built-in pagination and search filtering.
- **Creator Profile View (`/creators/[slug]`)**:
  - Full creator biography, secondary background story, and social links.
  - Metrics breakdown (total students, total courses, rating score).
  - Published course portfolio grid.

### 5. Creator Application (`/creators/apply`)

- **Creator Onboarding Portal**: Dedicated application page for prospective instructors.
- **Interactive Application Form**: Experience selection, portfolio URL inputs, bio description, and social channel submissions.

### 6. Authentication Suite (`/login` & `/register`)

- **Distraction-Free Auth Architecture**: Dedicated layout isolated from header/footer.
- **Figma-Accurate 3D Illustration**: Integrated blueprint grid, overlapping course cards, floating geometric 3D shapes (`icon1.svg`, `icon2.svg`, `icon3.svg`), and *Happy Students* badge.
- **Form Validation**: Powered by `react-hook-form` and `zod` schemas providing real-time feedback and type-safe error messages.
- **Social Sign-In**: Quick access options for Google and Facebook login.

### 7. Legal & Compliance (`/privacy` & `/terms`)

- **Privacy Policy (`/privacy`)**: Structured document outlining data collection, cookie policy, user rights, and contact information.
- **Terms of Service (`/terms`)**: Platform terms covering account registration, intellectual property, payments, refund policies, and user conduct.

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
ByteSpace-Frontend/
├── app/
│   ├── (auth)/                  # Isolated auth layout & pages
│   │   ├── layout.tsx           # Auth blueprint background layout
│   │   ├── login/               # Sign In route (/login)
│   │   │   └── page.tsx
│   │   └── register/            # Sign Up route (/register)
│   │       └── page.tsx
│   ├── (root)/                  # Main application layout & pages
│   │   ├── layout.tsx           # Common layout with Header and Footer
│   │   ├── page.tsx             # Home landing page
│   │   ├── courses/             # Course routes
│   │   │   ├── page.tsx         # Catalog page (/courses)
│   │   │   └── [id]/            # Course details page (/courses/[id])
│   │   │       └── page.tsx
│   │   ├── creators/            # Creator routes
│   │   │   ├── page.tsx         # Creators directory (/creators)
│   │   │   ├── apply/           # Creator application (/creators/apply)
│   │   │   │   └── page.tsx
│   │   │   └── [slug]/          # Creator profile page (/creators/[slug])
│   │   │       └── page.tsx
│   │   ├── privacy/             # Privacy Policy (/privacy)
│   │   │   └── page.tsx
│   │   └── terms/               # Terms of Service (/terms)
│   │       └── page.tsx
│   ├── globals.css              # Tailwind v4 directives & custom utilities
│   └── layout.tsx               # Root document layout
├── components/
│   ├── auth/                    # Auth-specific UI components
│   │   ├── AuthVisual.tsx       # 3D illustration cards and icons
│   │   ├── LoginForm.tsx        # React Hook Form + Zod Login form
│   │   └── RegisterForm.tsx     # React Hook Form + Zod Register form
│   ├── courses/                 # Courses components
│   │   ├── CourseHero.tsx       # Search and category dropdown hero
│   │   ├── CourseList.tsx       # Filters, pills, course grid & pagination
│   │   └── CourseDetails/       # Course detail page components
│   │       ├── CourseDetailsHero.tsx
│   │       ├── CourseDetailsView.tsx
│   │       ├── CourseSidebar.tsx
│   │       └── CurriculumAccordion.tsx
│   ├── creators/                # Creator components
│   │   ├── CreatorListView.tsx  # Creator directory & pagination
│   │   ├── CreatorDetailsView.tsx # Creator profile view
│   │   └── CreatorApplyView.tsx # Creator application form view
│   ├── home/                    # Landing page sections
│   │   ├── HeroArea.tsx         # Hero section with search & 3D shapes
│   │   ├── GrowthSection.tsx    # Growth & achievements section
│   │   ├── UnlockSection.tsx    # Creator CTA banner section
│   │   └── TestimonialSection.tsx # Student reviews section
│   ├── legal/                   # Legal page components
│   │   ├── PrivacyView.tsx      # Privacy Policy view
│   │   └── TermsView.tsx        # Terms of Service view
│   ├── CourseCard.tsx           # Universal reusable course card
│   ├── Header.tsx               # Main sticky navigation
│   └── Footer.tsx               # Footer component
├── data/
│   ├── course.ts                # Strongly-typed course dataset and schemas
│   └── creator.ts               # Creator dataset and helper getters
└── public/
    ├── auth/                    # 3D shapes and vector graphics
    ├── creators/                # Creator avatar images
    ├── home/                    # Hero decorative assets
    └── logo.svg                 # ByteSpace brand logo
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
- `npx tsc --noEmit` - Validates TypeScript types across the entire project codebase.

---

## License

This project is licensed under the [MIT License](LICENSE).
