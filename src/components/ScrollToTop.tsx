import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * ScrollToTop component that scrolls the window to the top
 * whenever the pathname in the URL changes
 */
export default function ScrollToTop() {
  const { pathname } = useLocation()
  
  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0)
  }, [pathname])
  
  // This component doesn't render anything, it just performs the scrolling effect
  return null
} 