import React, { lazy, Suspense } from 'react';
import { createBrowserRouter, Outlet, NavLink } from 'react-router-dom';
import Layout from './components/Layout';
import ErrorPage from './pages/ErrorPage';

// lazy load page components
const MissionVision = lazy(() => import('./pages/MissionVision'));
const TopicsViewedInClass = lazy(() => import('./pages/TopicsViewedInClass'));
const OurTeam = lazy(() => import('./pages/OurTeam'));
const ContactUs = lazy(() => import('./pages/ContactUs'));
export default createBrowserRouter([
    {
      element: <Layout />,
      children: [
        { index: true, element:
          <Suspense fallback={<div>Loading...</div>}>
            <MissionVision />
          </Suspense>
        },
        {
          path: 'topics-viewed-in-class',
          element:
            <Suspense fallback={<div>Loading topics...</div>}>
              <TopicsViewedInClass />
            </Suspense>
        },
        {
          path: 'our-team',
          element:
            <Suspense fallback={<div>Loading team...</div>}>
              <OurTeam />
            </Suspense>
        },
        {
          path: 'contact-us',
          element:
            <Suspense fallback={<div>Loading contact form...</div>}>
              <ContactUs />
            </Suspense>
        },
        { path: '*', element: <ErrorPage /> }, // catch-all
      ],
    },
  ]);