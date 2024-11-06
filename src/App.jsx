import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RedditForum from './components/Forum';
import DetailPost from './components/Detail';

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RedditForum />,
    },
    {
      path: '/detail',
      element: <DetailPost />,
    },
  ]);
  return <RouterProvider router={router} />;
}
