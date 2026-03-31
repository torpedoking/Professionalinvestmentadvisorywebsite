import { WORDPRESS_API_URL, USE_SAMPLE_POSTS } from '../config/wordpress';
import { blogPosts as samplePosts } from '../data/blogPosts';

export interface WordPressPost {
  id: number;
  slug: string;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  date: string;
  categories: number[];
  featured_media: number;
  acf?: {
    read_time?: string;
  };
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text: string;
    }>;
    'wp:term'?: Array<Array<{
      id: number;
      name: string;
    }>>;
  };
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  imageUrl: string;
}

// Fetch all blog posts
export async function fetchBlogPosts(): Promise<BlogPost[]> {
  // Use sample posts if WordPress is not configured
  if (USE_SAMPLE_POSTS) {
    return Promise.resolve(samplePosts);
  }

  try {
    const response = await fetch(
      `${WORDPRESS_API_URL}/posts?_embed&per_page=100&orderby=date&order=desc`,
      {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        },
      }
    );

    if (!response.ok) {
      console.warn('WordPress API returned error, falling back to sample posts');
      return samplePosts;
    }

    const posts: WordPressPost[] = await response.json();
    return posts.map(transformWordPressPost);
  } catch (error) {
    console.warn('Error fetching from WordPress, using sample posts:', error);
    return samplePosts;
  }
}

// Fetch a single blog post by slug
export async function fetchBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  // Use sample posts if WordPress is not configured
  if (USE_SAMPLE_POSTS) {
    const post = samplePosts.find(p => p.slug === slug);
    return Promise.resolve(post || null);
  }

  try {
    const response = await fetch(
      `${WORDPRESS_API_URL}/posts?slug=${slug}&_embed`,
      {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        },
      }
    );

    if (!response.ok) {
      console.warn('WordPress API returned error, checking sample posts');
      const post = samplePosts.find(p => p.slug === slug);
      return post || null;
    }

    const posts: WordPressPost[] = await response.json();
    
    if (posts.length === 0) {
      // Check sample posts as fallback
      const post = samplePosts.find(p => p.slug === slug);
      return post || null;
    }

    return transformWordPressPost(posts[0]);
  } catch (error) {
    console.warn('Error fetching from WordPress, checking sample posts:', error);
    const post = samplePosts.find(p => p.slug === slug);
    return post || null;
  }
}

// Transform WordPress post to our BlogPost format
function transformWordPressPost(post: WordPressPost): BlogPost {
  // Get featured image
  const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url || 
    'https://images.unsplash.com/photo-1723987251277-18fc0a1effd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080';

  // Get category name
  const categories = post._embedded?.['wp:term']?.[0] || [];
  const categoryName = categories.length > 0 ? categories[0].name : 'Uncategorized';

  // Calculate read time from content (rough estimate: 200 words per minute)
  const wordCount = post.content.rendered.split(/\s+/).length;
  const readTime = `${Math.max(1, Math.ceil(wordCount / 200))} min read`;

  // Clean excerpt (remove HTML tags)
  const cleanExcerpt = post.excerpt.rendered
    .replace(/<[^>]*>/g, '')
    .replace(/\[&hellip;\]/g, '...')
    .trim();

  return {
    id: post.id.toString(),
    title: post.title.rendered,
    slug: post.slug,
    excerpt: cleanExcerpt,
    content: post.content.rendered,
    author: 'Strativiz Advisory Team',
    date: post.date,
    category: categoryName,
    readTime: post.acf?.read_time || readTime,
    imageUrl: featuredImage,
  };
}