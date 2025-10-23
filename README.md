# Clear Choice Payment Solutions

## Overview
This project is a Next.js application for Clear Choice Payment Solutions, a payment processing business. It is built using TypeScript, Tailwind CSS, and React, providing a modern and responsive web experience.

## Project Structure
```
clear-choice-site
├── app
│   ├── layout.tsx          # Layout component for the application
│   ├── page.tsx            # Main entry point for the landing page
│   ├── contact
│   │   └── page.tsx        # Contact page with a contact form
│   ├── components
│   │   ├── Hero.tsx        # Hero section component
│   │   ├── ContactForm.tsx  # Contact form component integrated with Netlify
│   │   └── Navigation.tsx   # Navigation component
│   ├── styles
│   │   └── globals.css      # Global CSS styles
│   └── lib
│       └── metadata.ts      # SEO metadata configurations
├── public                   # Directory for static assets
├── tailwind.config.ts       # Tailwind CSS configuration
├── postcss.config.cjs       # PostCSS configuration
├── tsconfig.json            # TypeScript configuration
├── next.config.mjs          # Next.js configuration
├── package.json             # Project dependencies and scripts
└── README.md                # Project documentation
```

## Key Features
- **Responsive Design**: Optimized for both mobile and desktop views.
- **SEO Optimized**: Proper metadata and semantic HTML for better search engine visibility.
- **Netlify Integration**: Contact form submissions handled via Netlify.

## Getting Started
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd clear-choice-site
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Run the development server:
   ```
   npm run dev
   ```
5. Open your browser and visit `http://localhost:3000` to see the application in action.

## Deployment
This project is configured for static export, making it suitable for deployment on platforms like Netlify. Ensure that images are optimized for static hosting and that trailing slashes are enabled for better compatibility.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.