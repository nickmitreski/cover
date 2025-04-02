// Utility function to get unDraw illustration URL
export const getIllustrationUrl = (
  name: string,
  primaryColor = '208CFC' // Your site's primary color
) => {
  return `https://undraw.co/illustrations/${name}?color=${primaryColor}`;
};

// Common illustration names we'll use across the site
export const illustrations = {
  aiWriting: 'artificial-intelligence',
  contentPlanning: 'content-structure',
  analytics: 'data-trends',
  scheduling: 'schedule',
  research: 'search',
  collaboration: 'team-collaboration',
  profile: 'profile-details',
  hashtags: 'social-share',
  coaching: 'personal-training',
}; 