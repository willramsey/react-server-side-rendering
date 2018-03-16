import React from 'react';

const NotFound = ({ staticContext = {} }) => {
  staticContext.notFound = true;
  return <h1>Uh oh! Page not found.</h1>;
};

export default {
  component: NotFound
};