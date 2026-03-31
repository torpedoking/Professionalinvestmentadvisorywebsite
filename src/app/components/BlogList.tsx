import { Link } from 'react-router';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Calendar, Clock, Tag, AlertCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { fetchBlogPosts, BlogPost } from '../services/wordpress';
import { USE_SAMPLE_POSTS } from '../config/wordpress';

export function BlogList() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadPosts() {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchBlogPosts();
        setPosts(data);
      } catch (err) {
        setError('Unable to load blog posts. Please check your WordPress configuration.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    loadPosts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="bg-[#0A1628] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl mb-6">Insights & Analysis</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Strategic perspectives on buy-side M&A, valuation, due diligence, and value creation
            from the Strativiz team.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* WordPress Configuration Notice */}
          {USE_SAMPLE_POSTS && posts.length > 0 && (
            <div className="mb-8 bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <AlertCircle className="text-blue-600 flex-shrink-0 mt-0.5" size={20} />
                <div className="text-sm text-blue-800">
                  <strong>Demo Mode:</strong> Showing sample blog posts. To use WordPress, set{' '}
                  <code className="bg-blue-100 px-2 py-0.5 rounded text-xs">USE_SAMPLE_POSTS = false</code>{' '}
                  in <code className="bg-blue-100 px-2 py-0.5 rounded text-xs">/src/app/config/wordpress.ts</code>
                </div>
              </div>
            </div>
          )}

          {loading && (
            <div className="text-center py-20">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#0A1628]"></div>
              <p className="mt-4 text-gray-600">Loading articles...</p>
            </div>
          )}

          {error && (
            <div className="max-w-2xl mx-auto bg-red-50 border border-red-200 rounded-lg p-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="text-red-600 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-red-900 mb-2">Configuration Required</h3>
                  <p className="text-red-700 mb-4">{error}</p>
                  <p className="text-sm text-red-600">
                    Please update the WordPress API URL in <code className="bg-red-100 px-2 py-1 rounded">/src/app/config/wordpress.ts</code>
                  </p>
                </div>
              </div>
            </div>
          )}

          {!loading && !error && posts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-600 text-lg">No blog posts found. Start creating content in WordPress!</p>
            </div>
          )}

          {!loading && !error && posts.length > 0 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {posts.map((post) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.slug}`}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200 group"
                >
                  <div className="relative h-64 overflow-hidden">
                    <ImageWithFallback
                      src={post.imageUrl}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#0A1628] text-white px-3 py-1 rounded text-sm">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-8">
                    <h2 className="text-2xl text-[#0A1628] mb-4 group-hover:text-[#1a2942] transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center gap-6 text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={16} />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}