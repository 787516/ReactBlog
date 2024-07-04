import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Entertainment from './Pages/Entertainment';
import IT from './Pages/IT';
import Sports from './Pages/Sports';
import About from './Pages/About';
import Header from './components/Header';
import HomePage from './Pages/HomePage';
import Footer from './components/Footer';
import PostList from './components/PostList';

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <><Header/><PostList /></> },
    { path: "/entertainment", element: <><Header/><Entertainment /></> },
    { path: "/it", element: <><Header/><IT /></> },
    { path: "/sports", element: <><Header/><Sports /></> },
    { path: "/about", element: <><Header/><About /></> },
  ]);
  return (
    <>
        <RouterProvider router={router} />
        <Footer/>
    </>
  );
}

export default App;
