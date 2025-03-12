# Landing Page Project

A modern landing page built with Next.js and Tailwind CSS.

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework for building web applications
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework

## Project Structure

```
src/
├── app/                # Next.js App Router
│   ├── page.tsx        # Homepage
│   ├── layout.tsx      # Root layout
│   └── globals.css     # Global styles
├── components/         # React components
│   ├── ui/             # UI components like Button, Container, etc.
│   ├── sections/       # Page sections (Hero, Features, etc.)
│   ├── Navbar.tsx      # Navigation component
│   └── Footer.tsx      # Footer component
└── assets/             # Static assets
    ├── images/         # Image files
    └── icons/          # Icon files
```

## Getting Started

1. **Clone the repository**

```bash
git clone <repository-url>
cd landing-page
```

2. **Install dependencies**

```bash
npm install
```

3. **Run the development server**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Adding Assets

Place your assets in the `src/assets` directory:

- Images: `src/assets/images/`
- Icons: `src/assets/icons/`

Then import and use them in your components:

```jsx
import Image from "next/image";
import HeroImage from "@/assets/images/hero-image.png";

// Then in your component
<Image src={HeroImage} alt="Hero" />;
```

## Customization

### Colors

You can customize the colors by modifying the `tailwind.config.js` file. The default color scheme uses Tailwind's blue and gray palettes.

### Fonts

The project uses the Inter font from Google Fonts. You can change this in the `src/app/layout.tsx` file.

### Components

All UI components are located in the `src/components/ui` directory. You can modify these components to match your design needs.

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
