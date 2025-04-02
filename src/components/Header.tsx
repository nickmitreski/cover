import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import Logo from './Logo'

interface HeaderProps {
  isScrolled: boolean
}

export default function Header({ isScrolled }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [featuresDropdownOpen, setFeaturesDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setFeaturesDropdownOpen(false)
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Logo />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-sm font-medium hover:text-[#208CFC] transition-colors">
              Home
            </Link>
            <div className="relative" ref={dropdownRef}>
              <button 
                className="flex items-center gap-1 text-sm font-medium hover:text-[#208CFC] transition-colors"
                onClick={() => setFeaturesDropdownOpen(!featuresDropdownOpen)}
              >
                Features <ChevronDown size={16} className={`transition-transform ${featuresDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {featuresDropdownOpen && (
                <div className="absolute left-0 top-full mt-2 w-64 bg-white rounded-md shadow-lg py-1 z-10 border border-gray-100">
                  <Link to="/features/AICopywriting" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50" onClick={() => setFeaturesDropdownOpen(false)}>
                    AI Copywriting
                  </Link>
                  <Link to="/features/ContentGenerator" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50" onClick={() => setFeaturesDropdownOpen(false)}>
                    AI Content Generator
                  </Link>
                  <Link to="/features/ContentPlan" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50" onClick={() => setFeaturesDropdownOpen(false)}>
                    Content Plan & Strategy
                  </Link>
                  <Link to="/features/NicheResearch" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50" onClick={() => setFeaturesDropdownOpen(false)}>
                    Niche Research
                  </Link>
                  <Link to="/features/HashtagResearch" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50" onClick={() => setFeaturesDropdownOpen(false)}>
                    Hashtag Research
                  </Link>
                  <Link to="/features/InstagramCoaching" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50" onClick={() => setFeaturesDropdownOpen(false)}>
                    1-on-1 Instagram Coaching
                  </Link>
                  <Link to="/features/CollaborationServices" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50" onClick={() => setFeaturesDropdownOpen(false)}>
                    Collaboration Services
                  </Link>
                  <Link to="/features/ProfileOptimization" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50" onClick={() => setFeaturesDropdownOpen(false)}>
                    Profile Optimization
                  </Link>
                </div>
              )}
            </div>
            <Link to="/pricing" className="text-sm font-medium hover:text-[#208CFC] transition-colors">
              Pricing
            </Link>
            <Link to="/templates" className="text-sm font-medium hover:text-[#208CFC] transition-colors">
              Templates
            </Link>
            <Link to="/contact" className="text-sm font-medium hover:text-[#208CFC] transition-colors">
              Contact Us
            </Link>
          </nav>
          
          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link to="/login" className="text-sm font-medium hover:text-[#208CFC] transition-colors">
              Log in
            </Link>
            <Link to="/signup" className="btn btn-primary btn-sm">
              Try Free
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg absolute w-full">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col gap-4">
              <Link to="/" className="text-sm font-medium py-2" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              <div>
                <button 
                  className="flex items-center justify-between w-full text-sm font-medium py-2"
                  onClick={() => setFeaturesDropdownOpen(!featuresDropdownOpen)}
                >
                  Features <ChevronDown size={16} className={`transition-transform ${featuresDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {featuresDropdownOpen &&
                  <div className="pl-4 mt-2 space-y-2 border-l-2 border-gray-100">
                    <Link to="/features/AICopywriting" className="block py-2 text-sm text-gray-700" onClick={() => setIsMenuOpen(false)}>
                      AI Copywriting
                    </Link>
                    <Link to="/features/ContentGenerator" className="block py-2 text-sm text-gray-700" onClick={() => setIsMenuOpen(false)}>
                      AI Content Generator
                    </Link>
                    <Link to="/features/ContentPlan" className="block py-2 text-sm text-gray-700" onClick={() => setIsMenuOpen(false)}>
                      Content Plan & Strategy
                    </Link>
                    <Link to="/features/NicheResearch" className="block py-2 text-sm text-gray-700" onClick={() => setIsMenuOpen(false)}>
                      Niche Research
                    </Link>
                    <Link to="/features/HashtagResearch" className="block py-2 text-sm text-gray-700" onClick={() => setIsMenuOpen(false)}>
                      Hashtag Research
                    </Link>
                    <Link to="/features/InstagramCoaching" className="block py-2 text-sm text-gray-700" onClick={() => setIsMenuOpen(false)}>
                      1-on-1 Instagram Coaching
                    </Link>
                    <Link to="/features/CollaborationServices" className="block py-2 text-sm text-gray-700" onClick={() => setIsMenuOpen(false)}>
                      Collaboration Services
                    </Link>
                    <Link to="/features/ProfileOptimization" className="block py-2 text-sm text-gray-700" onClick={() => setIsMenuOpen(false)}>
                      Profile Optimization
                    </Link>
                  </div>
                }
              </div>
              <Link to="/pricing" className="text-sm font-medium py-2" onClick={() => setIsMenuOpen(false)}>
                Pricing
              </Link>
              <Link to="/templates" className="text-sm font-medium py-2" onClick={() => setIsMenuOpen(false)}>
                Templates
              </Link>
              <Link to="/contact" className="text-sm font-medium py-2" onClick={() => setIsMenuOpen(false)}>
                Contact Us
              </Link>
              <div className="flex flex-col gap-2 mt-4">
                <Link to="/login" className="btn btn-outline w-full" onClick={() => setIsMenuOpen(false)}>
                  Log in
                </Link>
                <Link to="/signup" className="btn btn-primary w-full" onClick={() => setIsMenuOpen(false)}>
                  Try Free
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
} 