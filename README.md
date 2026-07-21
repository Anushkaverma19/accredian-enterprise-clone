# Accredian Enterprise Clone

A responsive partial clone of the Accredian Enterprise landing page built with Next.js (App Router) and Tailwind CSS.

## Live Demo

Vercel:
(Add your deployed link here)

## GitHub Repository

(Add your GitHub repository link here)

---

## Tech Stack

- Next.js 16 (App Router)
- React
- TypeScript
- Tailwind CSS
- MongoDB Atlas
- Mongoose

---

## Features

- Responsive Landing Page
- Hero Section
- Benefits Section
- Programs Section
- Process Section
- Testimonials
- FAQ Section
- Navigation Bar
- Footer
- Lead Capture Form
- API Integration
- MongoDB Storage

---

## Folder Structure

```
app/
 ├── api/
 │    └── lead/
 ├── components/
 ├── data/
 ├── lib/
 ├── models/
 ├── globals.css
 ├── layout.tsx
 └── page.tsx

public/
```

---

## Setup

Clone the repository

```bash
git clone <repository-url>
```

Install dependencies

```bash
npm install
```

Create a `.env.local` file

```env
MONGODB_URI=your_mongodb_connection_string
```

Run development server

```bash
npm run dev
```

Build production version

```bash
npm run build
```

---

## API

POST

```
/api/lead
```

Request

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "company": "ABC Pvt Ltd",
  "phone": "9876543210"
}
```

---

## Approach

The project was built using reusable React components with the Next.js App Router. The landing page is divided into modular sections to improve maintainability and readability. Tailwind CSS was used for responsive layouts and consistent styling. A lead capture form was implemented with a Next.js API Route that stores submissions in MongoDB Atlas.

---

## AI Usage

AI tools used:
- ChatGPT

AI assisted with:
- Component planning
- UI structure
- API route implementation
- MongoDB integration
- Debugging build and TypeScript issues
- Responsive layout improvements

Manual work completed:
- Component organization
- Styling refinements
- Responsive adjustments
- Testing and debugging
- API integration setup
- MongoDB configuration
- Project structure

---

## Future Improvements

- Admin dashboard for leads
- Form validation using Zod
- Email notification after submission
- CMS integration
- Animations
- Better accessibility
- Unit and integration tests

---

## Author

Anushka Verma