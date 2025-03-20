import './globals.css';
import React from 'react';

// TODO: Create the not found page, a page that will be displayed
// when a user tries to access a page that doesn't exist
// Feel free to use this as inspiration: https://flowbite.com/blocks/marketing/404/

const NotFound: React.FC = () => {
  return (
    <div className="ineed.io-not-found-page">
      <h1 className="marg my-64 text-center text-3xl font-bold text-primary">Not found</h1>
    </div>
  );
};

export default NotFound;
