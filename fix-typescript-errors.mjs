import fs from 'fs';
import path from 'path';

// Files with reported errors
const files = [
  'src/components/BlogPostPage.tsx',
  'src/components/sections/Benefits.tsx',
  'src/components/sections/CTA.tsx',
  'src/components/sections/FeatureHighlights.tsx',
  'src/components/sections/Features.tsx',
  'src/components/sections/Hero.tsx',
  'src/components/sections/Pricing.tsx',
  'src/components/sections/ProductShowcase.tsx',
  'src/components/sections/Testimonials.tsx',
  'src/pages/AIAssist.tsx',
  'src/pages/Automation.tsx',
  'src/pages/Blog.tsx',
  'src/pages/Content.tsx',
  'src/pages/Copywriting.tsx',
  'src/pages/Demo.tsx',
  'src/pages/Ecommerce.tsx',
  'src/pages/FAQ.tsx',
  'src/pages/Features.tsx',
  'src/pages/Login.tsx',
  'src/pages/Pricing.tsx',
  'src/pages/Privacy.tsx',
  'src/pages/Scheduling.tsx',
  'src/pages/Signup.tsx',
  'src/pages/Templates.tsx',
  'src/pages/Terms.tsx',
  'src/pages/features/InstagramCoaching.tsx',
  'src/pages/features/HashtagResearch.tsx',
  'src/pages/features/ContentPlan.tsx',
  'src/pages/PrivacyPolicy.tsx',
  'src/pages/TermsOfService.tsx',
];

// Process each file
files.forEach(filePath => {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Fix import lines
    let updatedContent = content;
    
    // Remove standalone React import
    updatedContent = updatedContent.replace(/import React from ['"]react['"];?\n/g, '');
    
    // Fix React with other imports
    updatedContent = updatedContent.replace(/import React, /g, 'import ');
    
    fs.writeFileSync(filePath, updatedContent);
    console.log(`Fixed: ${filePath}`);
  } catch (err) {
    console.error(`Error processing ${filePath}:`, err);
  }
});

// Special fixes for specific files
try {
  // Fix BlogPostPage.tsx
  const blogPostPath = 'src/components/BlogPostPage.tsx';
  let content = fs.readFileSync(blogPostPath, 'utf8');
  content = content.replace(/import \{ Calendar, User, Tag, Clock/g, 'import { Calendar, Clock');
  fs.writeFileSync(blogPostPath, content);
  console.log(`Applied special fix to: ${blogPostPath}`);

  // Fix Benefits.tsx
  const benefitsPath = 'src/components/sections/Benefits.tsx';
  content = fs.readFileSync(benefitsPath, 'utf8');
  content = content.replace(/import \{ Check, Zap \} from ['"]lucide-react['"]/, '');
  fs.writeFileSync(benefitsPath, content);
  console.log(`Applied special fix to: ${benefitsPath}`);
  
  // Fix Pricing.tsx (component)
  const pricingComponentPath = 'src/components/sections/Pricing.tsx';
  content = fs.readFileSync(pricingComponentPath, 'utf8');
  // Either comment out or export the PricingCard function
  content = content.replace(/function PricingCard/g, 'export function PricingCard');
  fs.writeFileSync(pricingComponentPath, content);
  console.log(`Applied special fix to: ${pricingComponentPath}`);
  
  // Fix Blog.tsx type issues
  const blogPath = 'src/pages/Blog.tsx';
  content = fs.readFileSync(blogPath, 'utf8');
  content = content.replace(/const BlogCard = \(\{ post \}\)/g, 'const BlogCard = ({ post }: { post: any })');
  content = content.replace(/const FeaturedPostCard = \(\{ post \}\)/g, 'const FeaturedPostCard = ({ post }: { post: any })');
  fs.writeFileSync(blogPath, content);
  console.log(`Applied special fix to: ${blogPath}`);
  
} catch (err) {
  console.error('Error applying special fixes:', err);
}

console.log('TypeScript error fixes completed!'); 