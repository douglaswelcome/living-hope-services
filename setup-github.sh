#!/bin/bash

echo "🚀 GitHub Repository Setup Script"
echo "=================================="
echo ""
echo "This script will help you connect your local repository to GitHub."
echo ""

# Get GitHub username
read -p "Enter your GitHub username: " github_username

if [ -z "$github_username" ]; then
    echo "❌ GitHub username is required. Please run the script again."
    exit 1
fi

echo ""
echo "📋 Next Steps:"
echo "1. Go to https://github.com/new"
echo "2. Create a new repository named: living-hope-services"
echo "3. Make it Public or Private (your choice)"
echo "4. DO NOT initialize with README, .gitignore, or license"
echo "5. Click 'Create repository'"
echo ""
echo "Once you've created the repository, press Enter to continue..."
read -p ""

echo ""
echo "🔗 Adding remote repository..."
git remote add origin https://github.com/$github_username/living-hope-services.git

echo ""
echo "📤 Pushing to GitHub..."
git branch -M main
git push -u origin main

echo ""
echo "✅ Success! Your repository is now connected to GitHub."
echo "🌐 View your repository at: https://github.com/$github_username/living-hope-services"
echo ""
echo "🎉 Your project is now live on GitHub with all the work we've done!" 