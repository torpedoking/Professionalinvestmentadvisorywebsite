import { createBrowserRouter } from 'react-router';
import { Layout } from './components/Layout';
import { HomePage } from './components/HomePage';
import { BlogList } from './components/BlogList';
import { BlogPost } from './components/BlogPost';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: 'blog',
        Component: BlogList,
      },
      {
        path: 'blog/:slug',
        Component: BlogPost,
      },
    ],
  },
]);
