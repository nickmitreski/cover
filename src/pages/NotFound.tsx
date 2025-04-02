import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div className="container mx-auto px-4 py-24 md:py-32 text-center">
      <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-6">
        404 - Page Not Found
      </h1>
      <p className="text-muted max-w-2xl mx-auto mb-8">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link to="/" className="btn btn-primary">
        Back to Home
      </Link>
    </div>
  )
} 