import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  Calendar, 
  Clock, 
  ChevronLeft, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Mail, 
  Bookmark, 
  User,
  Tag,
  ListChecks,
  Quote,
  CheckCircle2,
  MessageCircle
} from 'lucide-react';

// This would normally come from an API or database
// For this demo, we're importing from the same data as the blog list
import { blogPosts } from '../pages/Blog';

export default function BlogPostPage() {
  const { id } = useParams();
  
  // Find the post with the matching ID - fix for the linter error
  const post = blogPosts.find(post => post.id === parseInt(id || '0'));
  
  // If post not found
  if (!post) {
    return (
      <div className="container mx-auto px-4 py-32 text-center">
        <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
        <p className="mb-8">The blog post you're looking for doesn't exist.</p>
        <Link 
          to="/blog" 
          className="inline-flex items-center text-blue-600 hover:underline"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to Blog
        </Link>
      </div>
    );
  }
  
  // Related posts - just show other posts from the same category, limit to 3
  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  return (
    <>
      <Helmet>
        <title>{post.title} | CoverSite Blog</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>
      
      <div className="bg-gray-50 pt-24">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Breadcrumb */}
          <div className="mb-8">
            <div className="flex items-center text-sm text-gray-500">
              <Link to="/" className="hover:text-blue-600">Home</Link>
              <span className="mx-2">/</span>
              <Link to="/blog" className="hover:text-blue-600">Blog</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-700">{post.title}</span>
            </div>
          </div>
          
          {/* Post header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium inline-flex items-center">
                <Tag className="h-3.5 w-3.5 mr-1.5" />
                {post.category}
              </span>
              <span className="flex items-center text-gray-500 text-sm">
                <Clock className="h-4 w-4 mr-1" />
                5 min read
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-6">{post.title}</h1>
            
            <div className="flex items-center mb-8">
              <div className="bg-gray-200 h-10 w-10 rounded-full mr-3 flex items-center justify-center text-gray-500">
                <User className="h-6 w-6" />
              </div>
              <div>
                <div className="font-medium">{post.author}</div>
                <div className="text-sm text-gray-500 flex items-center">
                  <Calendar className="h-3.5 w-3.5 mr-1" />
                  {post.date}
                </div>
              </div>
            </div>
          </div>
          
          {/* Featured image */}
          <div className="mb-10">
            <img 
              src={post.image}
              alt={post.title}
              className="w-full h-auto rounded-xl shadow-md"
            />
          </div>
          
          {/* Social sharing */}
          <div className="flex justify-between items-center mb-10 py-4 border-t border-b border-gray-200">
            <div className="text-sm font-medium flex items-center">
              <MessageCircle className="h-4 w-4 mr-2 text-gray-500" />
              Share this article:
            </div>
            <div className="flex gap-2">
              <button className="p-2 text-gray-500 hover:text-blue-600 hover:bg-gray-100 rounded-full">
                <Facebook className="h-5 w-5" />
              </button>
              <button className="p-2 text-gray-500 hover:text-blue-400 hover:bg-gray-100 rounded-full">
                <Twitter className="h-5 w-5" />
              </button>
              <button className="p-2 text-gray-500 hover:text-blue-700 hover:bg-gray-100 rounded-full">
                <Linkedin className="h-5 w-5" />
              </button>
              <button className="p-2 text-gray-500 hover:text-red-500 hover:bg-gray-100 rounded-full">
                <Mail className="h-5 w-5" />
              </button>
              <button className="p-2 text-gray-500 hover:text-yellow-500 hover:bg-gray-100 rounded-full">
                <Bookmark className="h-5 w-5" />
              </button>
            </div>
          </div>
          
          {/* Post content */}
          <div className="prose prose-lg max-w-none mb-16">
            <p>
              {post.excerpt}
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus accumsan libero sit amet nisi posuere dignissim. Praesent dictum tortor at magna tempor, quis fermentum odio facilisis. Suspendisse potenti. Cras bibendum lacus magna, at tincidunt augue elementum quis. Nullam facilisis eros eget nulla pulvinar, non posuere est iaculis.
            </p>
            <h2 className="flex items-center gap-2">
              <User className="h-6 w-6 text-blue-600" />
              Why this matters for social media managers
            </h2>
            <p>
              Sed in tristique ipsum. Vivamus ut sem id libero venenatis auctor. Praesent sed arcu eget nibh tincidunt commodo at eget lacus. Curabitur porttitor, nisi id efficitur tempus, lacus odio eleifend mi, at semper ipsum ex vitae diam. Aliquam erat volutpat.
            </p>
            <ul>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                <span>Improved engagement rates across platforms</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                <span>Higher conversion rates and ROI</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                <span>Better audience targeting capabilities</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                <span>Streamlined content creation and scheduling</span>
              </li>
            </ul>
            <p>
              Donec fermentum lacus vel risus auctor, sit amet cursus nulla pulvinar. Nulla quis risus hendrerit, laoreet leo vitae, placerat eros. Cras in lectus eu dolor pellentesque efficitur id in purus. Nullam sodales sapien nec eros molestie vulputate. 
            </p>
            <h2 className="flex items-center gap-2">
              <ListChecks className="h-6 w-6 text-blue-600" />
              How to implement these strategies
            </h2>
            <p>
              Nullam quis dui vel justo lacinia semper. Proin urna justo, consectetur non sollicitudin ac, tempor in leo. Maecenas rhoncus tincidunt fringilla. Integer in arcu justo. Duis semper neque eu risus lacinia laoreet. Nulla facilisi. Fusce et sollicitudin ipsum. Donec congue nibh a posuere pulvinar.
            </p>
            <blockquote className="relative pl-10 italic">
              <Quote className="absolute left-0 top-0 h-6 w-6 text-blue-400" />
              "The most successful social media strategies are those that prioritise consistency, authenticity, and genuine connection with your audience."
            </blockquote>
            <p>
              Vivamus urna nulla, aliquet non pulvinar vel, commodo at odio. Sed feugiat accumsan tempus. Nullam luctus, odio ac tincidunt sodales, neque quam efficitur arcu, ac venenatis dolor metus ut elit. Suspendisse potenti. Donec quis urna quis ante placerat suscipit. Aliquam id lobortis arcu.
            </p>
          </div>
          
          {/* Tags */}
          <div className="mb-12">
            <div className="font-medium mb-3 flex items-center">
              <Tag className="h-4 w-4 mr-2 text-blue-600" />
              Related topics:
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="bg-gray-100 text-gray-800 px-3 py-1.5 rounded-full text-sm">Social Media</span>
              <span className="bg-gray-100 text-gray-800 px-3 py-1.5 rounded-full text-sm">Content Strategy</span>
              <span className="bg-gray-100 text-gray-800 px-3 py-1.5 rounded-full text-sm">{post.category}</span>
              <span className="bg-gray-100 text-gray-800 px-3 py-1.5 rounded-full text-sm">Marketing</span>
            </div>
          </div>
          
          {/* Author bio */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 mb-16">
            <div className="flex items-start gap-6">
              <div className="bg-gray-200 h-16 w-16 rounded-full flex items-center justify-center text-gray-500">
                <User className="h-10 w-10" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">About {post.author}</h3>
                <p className="text-gray-600 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget felis vitae urna convallis ultrices. Mauris pulvinar urna non enim finibus, eu molestie leo fermentum.
                </p>
                <div className="flex gap-2">
                  <a href="#" className="text-blue-600 hover:underline text-sm font-medium inline-flex items-center">
                    <Twitter className="h-3.5 w-3.5 mr-1" />
                    Twitter
                  </a>
                  <span className="text-gray-300">|</span>
                  <a href="#" className="text-blue-600 hover:underline text-sm font-medium inline-flex items-center">
                    <Linkedin className="h-3.5 w-3.5 mr-1" />
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Related posts */}
          {relatedPosts.length > 0 && (
            <div className="mb-20">
              <h2 className="text-2xl font-bold mb-8 flex items-center">
                <Tag className="h-5 w-5 mr-2 text-blue-600" />
                You might also like
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedPosts.map(relatedPost => (
                  <div key={relatedPost.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                    <img 
                      src={relatedPost.image} 
                      alt={relatedPost.title} 
                      className="w-full h-36 object-cover"
                    />
                    <div className="p-5">
                      <div className="flex items-center text-xs text-gray-500 mb-2">
                        <span className="bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full text-xs font-medium inline-flex items-center">
                          <Tag className="h-3 w-3 mr-1" />
                          {relatedPost.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold mb-2 hover:text-blue-600 transition-colors line-clamp-2">
                        <Link to={`/blog/${relatedPost.id}`}>{relatedPost.title}</Link>
                      </h3>
                      <div className="flex items-center text-xs text-gray-500">
                        <Calendar className="h-3 w-3 mr-1" />
                        <span>{relatedPost.date}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Newsletter - smaller version */}
          <div className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl p-6 text-white shadow-md mb-16">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="md:w-1/2">
                <h3 className="text-xl font-bold mb-2 flex items-center">
                  <Mail className="h-5 w-5 mr-2" />
                  Enjoyed this article?
                </h3>
                <p className="text-sm text-blue-100">Get more insights delivered straight to your inbox.</p>
              </div>
              <div className="md:w-1/2">
                <div className="flex max-w-md">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="px-4 py-2 rounded-l-lg border-0 text-gray-800 flex-grow focus:outline-none text-sm"
                  />
                  <button className="bg-white text-blue-600 hover:bg-gray-100 px-4 py-2 rounded-r-lg font-medium transition-colors text-sm whitespace-nowrap">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Back to blog */}
          <div className="text-center pb-16">
            <Link 
              to="/blog" 
              className="inline-flex items-center text-blue-600 hover:underline font-medium"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to all articles
            </Link>
          </div>
        </div>
      </div>
    </>
  );
} 