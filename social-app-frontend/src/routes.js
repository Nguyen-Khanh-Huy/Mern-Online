import React from 'react';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import AboutPage from './pages/AboutPage';

const routes = [
  {
    path: '/',
    exact: true,
    main: () => <HomePage />
  },
  {
    path: '/about',
    exact: false,
    main: () => <AboutPage />
  },
  {
    path: '',
    exact: false,
    main: () => <NotFoundPage />
  }
];

export default routes;
