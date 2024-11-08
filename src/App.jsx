import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RedditForum from './components/Forum';
import Detail from './components/Detail';

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RedditForum />,
    },
    {
      path: '/detail',
      element: <Detail />,
    },
  ]);
  return <RouterProvider router={router} />;
}
