import { useParams, Link, Navigate } from 'react-router';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Calendar, Clock, Tag, ArrowLeft, AlertCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { fetchBlogPostBySlug, BlogPost as BlogPostType } from '../services/wordpress';

export function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadPost() {
      if (!slug) return;

      try {
        setLoading(true);
        setError(null);
        const data = await fetchBlogPostBySlug(slug);
        setPost(data);
      } catch (err) {
        setError('Unable to load blog post. Please check your WordPress configuration.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    loadPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white pt-20 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#0A1628]"></div>
          <p className="mt-4 text-gray-600">Loading article...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="text-red-600 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="text-red-900 mb-2">Error Loading Article</h3>
                <p className="text-red-700 mb-4">{error}</p>
                <Link
                  to="/blog"
                  className="text-red-600 hover:text-red-800 underline"
                >
                  ← Back to Blog
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Back Link */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-[#0A1628] transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Blog
          </Link>
        </div>
      </div>

      {/* Article Header */}
      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Badge */}
          <div className="mb-6">
            <span className="bg-[#0A1628] text-white px-4 py-2 rounded text-sm">
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl text-[#0A1628] mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Meta Information */}
          <div className="flex items-center gap-6 text-gray-600 mb-8 pb-8 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <Calendar size={18} />
              <span>
                {new Date(post.date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={18} />
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative h-96 rounded-lg overflow-hidden mb-12 shadow-xl">
            <ImageWithFallback
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Content - WordPress HTML */}
          <div 
            className="prose prose-lg max-w-none
              prose-headings:text-[#0A1628] 
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
              prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6 prose-p:text-lg
              prose-ul:space-y-3 prose-ul:mb-6 prose-ul:ml-6
              prose-ol:space-y-3 prose-ol:mb-6 prose-ol:ml-6
              prose-li:text-gray-700 prose-li:leading-relaxed
              prose-strong:text-[#0A1628]
              prose-a:text-[#0A1628] prose-a:no-underline hover:prose-a:underline
              prose-img:rounded-lg prose-img:shadow-lg"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Author */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-600">Written by {post.author}</p>
          </div>

          {/* CTA */}
          <div className="mt-12 bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl text-[#0A1628] mb-4">
              Interested in learning more?
            </h3>
            <p className="text-gray-700 mb-6">
              Contact Strativiz to discuss how we can support your acquisition objectives.
            </p>
            <Link
              to="/#contact"
              className="inline-block bg-[#0A1628] text-white px-6 py-3 rounded hover:bg-[#1a2942] transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}