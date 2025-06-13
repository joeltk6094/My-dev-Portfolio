# Installation Guide for Joel's Portfolio

This guide will walk you through the process of setting up Joel's portfolio project on your local machine.

## Prerequisites

Before you begin, make sure you have the following installed:

- Node.js (version 14.x or higher)
- npm (version 6.x or higher) or yarn (version 1.x or higher)
- Git

## Step 1: Clone the Repository

First, clone the repository to your local machine:

\`\`\`bash
git clone https://github.com/yourusername/joel-portfolio.git
cd joel-portfolio
\`\`\`

## Step 2: Install Dependencies

The project uses React 17 as a peer dependency. Install all dependencies using npm:

\`\`\`bash
npm install
\`\`\`

Or if you prefer yarn:

\`\`\`bash
yarn install
\`\`\`

## Step 3: Set Up Environment Variables (if needed)

Create a `.env.local` file in the root directory of the project:

\`\`\`bash
touch .env.local
\`\`\`

Add any required environment variables to this file. For basic setup, you don't need to add anything.

## Step 4: Run the Development Server

Start the development server:

\`\`\`bash
npm run dev
\`\`\`

Or with yarn:

\`\`\`bash
yarn dev
\`\`\`

The application should now be running at [http://localhost:3000](http://localhost:3000).

## Step 5: Build for Production (Optional)

If you want to build the project for production:

\`\`\`bash
npm run build
\`\`\`

Or with yarn:

\`\`\`bash
yarn build
\`\`\`

To start the production server:

\`\`\`bash
npm start
\`\`\`

Or with yarn:

\`\`\`bash
yarn start
\`\`\`

## Troubleshooting

### Common Issues

1. **Dependency Conflicts**: If you encounter dependency conflicts, try clearing your npm cache:

\`\`\`bash
npm cache clean --force
\`\`\`

2. **Port Already in Use**: If port 3000 is already in use, you can specify a different port:

\`\`\`bash
npm run dev -- -p 3001
\`\`\`

3. **React Version Issues**: This project specifically uses React 17 as a peer dependency. If you're experiencing issues, make sure you don't have conflicting React versions:

\`\`\`bash
npm ls react
\`\`\`

### Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React 17 Documentation](https://17.reactjs.org/docs/getting-started.html)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## Project Structure

\`\`\`
joel-portfolio/
├── app/                  # Next.js App Router pages
├── components/           # React components
├── lib/                  # Utility functions
├── public/               # Static assets
├── styles/               # Global styles
├── .env.local            # Environment variables (create this)
├── next.config.mjs       # Next.js configuration
├── package.json          # Project dependencies
├── tailwind.config.ts    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
