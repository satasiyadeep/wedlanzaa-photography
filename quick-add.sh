#!/bin/bash

echo "🚀 Quick Git Add for Wedlanzaa Website"
echo "========================================"

# Add source code files
echo "📁 Adding source code..."
git add src/ components/ pages/ models/ routes/ api/

# Add configuration files
echo "⚙️  Adding configuration files..."
git add *.js *.json *.md *.html *.css

# Add public assets
echo "🖼️  Adding public assets..."
git add client/public/

# Show status
echo ""
echo "📊 Git Status:"
git status --short

echo ""
echo "✅ Quick add completed!"
echo "💡 Use 'git commit -m \"your message\"' to commit"
echo "💡 Use 'git push origin main' to push" 