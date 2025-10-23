#!/bin/bash

echo "🚀 Setting up Sanity CMS for Clear Choice Payment Solutions"
echo ""

# Check if .env.local exists
if [ ! -f .env.local ]; then
    echo "❌ .env.local file not found. Please create it with your Sanity credentials."
    exit 1
fi

# Check if Sanity CLI is installed
if ! command -v sanity &> /dev/null; then
    echo "📦 Installing Sanity CLI globally..."
    npm install -g @sanity/cli
fi

echo "📋 Setup Instructions:"
echo ""
echo "1. Create a new Sanity project at https://sanity.io/manage"
echo "2. Copy your Project ID and update .env.local:"
echo "   NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id"
echo ""
echo "3. Generate a read token:"
echo "   - Go to API settings in your Sanity project"
echo "   - Create a new token with 'Viewer' permissions"
echo "   - Update .env.local:"
echo "   SANITY_READ_TOKEN=your-token-here"
echo ""
echo "4. Run the development server:"
echo "   npm run dev"
echo ""
echo "5. Open the Sanity Studio:"
echo "   http://localhost:3000/studio"
echo ""
echo "🎯 What you'll be able to manage:"
echo "   • Services (with detailed pages)"
echo "   • Testimonials"
echo "   • Resources/Downloads"
echo "   • FAQs"
echo "   • Site Settings"
echo "   • Navigation"
echo ""
echo "📁 Your current CMS setup:"
echo "   ✅ Schemas created (7 content types)"
echo "   ✅ Studio configured at /studio"
echo "   ✅ Client libraries ready"
echo "   ✅ Preview mode setup"
echo "   ✅ Config file at /sanity/sanity.config.ts"
echo "   ✅ Schema index at /sanity/schemas/index.ts"
echo ""
echo "Next: Update your .env.local file and run 'npm run dev'!"
