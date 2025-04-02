import { createApi } from 'unsplash-js';

// Initialize the Unsplash API client
export const unsplash = createApi({
  accessKey: import.meta.env.VITE_UNSPLASH_ACCESS_KEY || '',
});

// Utility function to get an optimized image URL
export const getOptimizedImageUrl = (
  photoId: string,
  width: number,
  height: number,
  quality = 80
) => {
  return `https://images.unsplash.com/photo-${photoId}?auto=format&fit=crop&w=${width}&h=${height}&q=${quality}`;
};

// Utility function to search for photos
export const searchPhotos = async (query: string, page = 1, perPage = 10) => {
  try {
    const result = await unsplash.search.getPhotos({
      query,
      page,
      perPage,
    });
    
    if (result.errors) {
      console.error('Error occurred while fetching photos:', result.errors);
      return [];
    }
    
    return result.response?.results || [];
  } catch (error) {
    console.error('Failed to fetch photos:', error);
    return [];
  }
};

// Utility function to get a random photo
export const getRandomPhoto = async (query: string) => {
  try {
    const result = await unsplash.photos.getRandom({
      query,
      count: 1,
    });
    
    if (result.errors) {
      console.error('Error occurred while fetching random photo:', result.errors);
      return null;
    }
    
    return Array.isArray(result.response) ? result.response[0] : result.response;
  } catch (error) {
    console.error('Failed to fetch random photo:', error);
    return null;
  }
};

// Function to properly attribute Unsplash photos
export const getPhotoAttribution = (photo: any) => {
  if (!photo) return '';
  
  return {
    name: photo.user.name,
    username: photo.user.username,
    link: photo.links.html,
  };
}; 