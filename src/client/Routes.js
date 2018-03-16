import React from 'react';
import App from './App';
import Home from './pages/Home';
import UsersList from './pages/UsersList';
import NotFound from './pages/NotFound';
import AdminsList from './pages/AdminsList';

export default [
  {
    ...App,
    routes: [
      {
        ...Home,
        path: '/',
        exact: true
      },
      {
        ...AdminsList,
        path: '/admins'
      },
      {
        ...UsersList,
        path: '/users'
      },
      {
        ...NotFound,
        path: ''
      }
    ]
  }
];

