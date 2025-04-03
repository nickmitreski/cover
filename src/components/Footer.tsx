import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="flex flex-col gap-4">
            <Link to="/" className="text-xl">
              <img 
                src="/images/followfuseapp.png" 
                alt="FollowFuseApp"
                className="h-8 brightness-0 invert" 
              />
            </Link>
          </div>
          
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300">Legal</h3>
            <nav className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <Link to="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
                <Link to="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </div>
              <div className="flex flex-col gap-2">
                <Link to="/cookies" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Cookie Policy
                </Link>
                <Link to="/refund" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Cancellation and Refund Policy
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
} 