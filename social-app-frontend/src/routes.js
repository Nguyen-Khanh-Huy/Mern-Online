import React from 'react';
import HomePage from './pages/HomePage';
import ChatPage from './pages/ChatPage';
import NotFoundPage from './pages/NotFoundPage';
import Login from './pages/Login';
import Profile from './pages/Profile';

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <Login />
    },
    {
        path: '/chat',
        exact: true,
        main: () => <ChatPage />
    },
    {
        path: '/home',
        exact: true,
        main: () => <HomePage />
    },
    {
        path: '/profile',
        exact: true,
        main: () => <Profile />
    },
    {
        path: '',
        exact: false,
        main: () => <NotFoundPage />
    }
];

export default routes;