import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pb-12 md:pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Product</h3>
            <ul className="mt-4 space-y-3">
              <li><Link to="/features" className="text-gray-400 hover:text-white">Features</Link></li>
              <li><Link to="/pricing" className="text-gray-400 hover:text-white">Pricing</Link></li>
              <li><Link to="/templates" className="text-gray-400 hover:text-white">Templates</Link></li>
              <li><Link to="/demo" className="text-gray-400 hover:text-white">Product Demo</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Company</h3>
            <ul className="mt-4 space-y-3">
              <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-white">Careers</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-white">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact Us</Link></li>
              <li><a href="mailto:contact@followfuseapp.com" className="text-gray-400 hover:text-white">contact@followfuseapp.com</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Support</h3>
            <ul className="mt-4 space-y-3">
              <li><Link to="/help" className="text-gray-400 hover:text-white">Help Center</Link></li>
              <li><Link to="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-400 hover:text-white">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 flex justify-center">
          <Link 
            to="/contact" 
            className="px-8 py-3 bg-[#208CFC] text-white rounded-lg font-medium hover:bg-[#208CFC]/90 transition-all hover:scale-105 duration-200"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </footer>
  )
} 