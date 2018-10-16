import React from 'react';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';
import Login from './pages/Login';

const routes = [
    {
        path: '',
        exact: true,
        main: () => <Login />
    },
    {
        path: '/about',
        exact: true,
        main: () => <AboutPage />
    },
    {
        path: '/home',
        exact: false,
        main: () => <HomePage />
    },
    {
        path: '',
        exact: false,
        main: () => <NotFoundPage />
    }
];

export default routes;