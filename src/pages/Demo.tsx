import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

export default function DemoPage() {
  return (
    <>
      <Helmet>
        <title>Product Demo | FollowFuseApp</title>
        <meta name="description" content="Watch a demo of how FollowFuseApp helps you create perfect cover letters in minutes." />
      </Helmet>
      <div className="pt-20">
        <div className="container mx-auto px-4 py-24 md:py-32">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl text-center mb-16">
            See FollowFuseApp in Action
          </h1>
          <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Watch how our platform helps you create personalized, ATS-friendly cover letters in minutes.
          </p>
          
          {/* Demo video container */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-xl flex items-center justify-center">
              <div className="text-center p-8">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-gray-500">Demo video coming soon</p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Link to="/signup" className="btn btn-primary btn-lg">
              Try FollowFuseApp Free
            </Link>
          </div>
        </div>
      </div>
    </>
  )
} 