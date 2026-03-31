# WordPress Integration Setup Guide

## Overview
Your Strativiz website now fetches blog content from WordPress via the REST API. This means you can write and manage blog posts in WordPress while keeping the professional React frontend.

## Step 1: Install WordPress on InMotion Hosting

1. **Log into your InMotion cPanel**
   - Go to your InMotion AMP (Account Management Panel)
   - Click on "cPanel"

2. **Install WordPress using Softaculous**
   - Find "Softaculous Apps Installer" in cPanel
   - Click on WordPress
   - Click "Install Now"
   - Choose installation directory:
     - Option A: Install in subdirectory (e.g., `yourdomain.com/wp/`)
     - Option B: Install in root (e.g., `yourdomain.com/`)
   - Complete the installation

3. **Note your WordPress URL**
   - If installed in subdirectory: `https://yourdomain.com/wp`
   - If installed in root: `https://yourdomain.com`

## Step 2: Configure WordPress

### Enable REST API (Usually enabled by default)
1. Log into WordPress Admin (`yourdomain.com/wp-admin`)
2. Go to Settings → Permalinks
3. Choose any option EXCEPT "Plain" (recommended: "Post name")
4. Click "Save Changes"

### Test the REST API
Visit this URL in your browser:
```
https://yourdomain.com/wp-json/wp/v2/posts
```
You should see JSON data (even if empty).

## Step 3: Update React App Configuration

1. **Edit the WordPress configuration file**
   - Open: `/src/app/config/wordpress.ts`
   - Replace `'https://yourdomain.com/wp-json/wp/v2'` with your actual URL:

   ```typescript
   // If WordPress is in root:
   export const WORDPRESS_API_URL = 'https://strativiz.com/wp-json/wp/v2';

   // If WordPress is in subdirectory:
   export const WORDPRESS_API_URL = 'https://strativiz.com/wp/wp-json/wp/v2';
   ```

2. **Save the file**

## Step 4: Create Blog Posts in WordPress

1. **Log into WordPress Admin**
   - Go to Posts → Add New

2. **Create your first post**
   - Title: Your article title
   - Content: Write your content using the WordPress editor
   - Category: Create categories like "Valuation", "M&A Strategy", "Due Diligence"
   - Featured Image: Upload an image (recommended size: 1920x1080px)
   - Click "Publish"

3. **Important Fields**
   - **Title**: Shows as the article headline
   - **Content**: The full article body
   - **Excerpt**: Short description (auto-generated if empty)
   - **Featured Image**: The main article image
   - **Category**: Used to tag articles

## Step 5: Deploy Your React App

### Option A: Build and Upload to InMotion
1. **Build the production version**
   ```bash
   npm run build
   ```
   This creates a `dist` folder with optimized files.

2. **Upload to InMotion**
   - Connect via FTP (use FileZilla or InMotion's File Manager)
   - Upload all files from the `dist` folder to `public_html`
   - Your site will be live at `yourdomain.com`

### Option B: Deploy to Vercel (Recommended - Easier)
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository
5. Click "Deploy"
6. Point your domain to Vercel (or use the free Vercel domain)

## Step 6: Handle CORS (if needed)

If you get CORS errors, add this to your WordPress theme's `functions.php`:

```php
add_action('rest_api_init', function() {
    remove_filter('rest_pre_serve_request', 'rest_send_cors_headers');
    add_filter('rest_pre_serve_request', function($value) {
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
        header('Access-Control-Allow-Credentials: true');
        return $value;
    });
}, 15);
```

## Workflow After Setup

### To Add New Blog Posts:
1. Log into WordPress Admin
2. Go to Posts → Add New
3. Write your article
4. Add featured image
5. Select category
6. Click "Publish"
7. Your React site will automatically fetch and display the new post!

### To Edit Posts:
1. Log into WordPress Admin
2. Go to Posts → All Posts
3. Click "Edit" on the post you want to change
4. Make your changes
5. Click "Update"

## Troubleshooting

### "Unable to load blog posts" error
- Check that WordPress is installed and accessible
- Verify the API URL in `/src/app/config/wordpress.ts` is correct
- Test the API directly: `https://yourdomain.com/wp-json/wp/v2/posts`
- Check browser console for CORS errors

### Posts not showing featured images
- Make sure you've uploaded a featured image in WordPress
- Go to Posts → Edit Post → Set Featured Image

### Categories showing as "Uncategorized"
- Create categories in WordPress: Posts → Categories
- Assign categories when creating/editing posts

## SEO Tips for WordPress

1. **Install Yoast SEO Plugin**
   - Helps optimize each post for search engines
   - Provides meta descriptions, titles, etc.

2. **Use Good Permalinks**
   - Settings → Permalinks → Choose "Post name"

3. **Optimize Images**
   - Use descriptive file names
   - Add alt text to all images
   - Compress images before uploading

## Need Help?

Contact InMotion support if you need help with:
- WordPress installation
- FTP access
- Domain configuration
- SSL certificates

For React app issues, check the browser console for error messages.
