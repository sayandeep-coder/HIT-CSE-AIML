#!/bin/bash

echo "Building and deploying the website to GitHub Pages..."

# Build the project
npm run build

# Deploy to GitHub Pages
npm run deploy

echo "Deployment complete! Your website should be available at https://sayandeep-coder.github.io/HIT-CSE-AIML/"