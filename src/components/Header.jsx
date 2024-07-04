import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const linkClassNames = (isActive) =>
    isActive
      ? "py-2 px-3 text-white bg-indigo-700 rounded md:bg-transparent md:text-indigo-700 md:p-0 dark:text-white md:dark:text-indigo-500"
      : "block py-2 px-3 text-zinc-900 rounded hover:bg-zinc-100 md:hover:bg-transparent md:border-0 md:hover:text-indigo-700 md:p-0 dark:text-white md:dark:hover:text-indigo-500 dark:hover:bg-zinc-700 dark:hover:text-white md:dark:hover:bg-transparent";

  return (
    <nav className="bg-white border-zinc-200 dark:bg-zinc-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className='hover:text-indigo-700'>
          <NavLink to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <svg className="w-8 h-8 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7h1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h11.5M7 14h6m-6 3h6m0-10h.5m-.5 3h.5M7 7h3v3H7V7Z" />
            </svg>
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              News
            </span>
          </NavLink>
        </div>
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-zinc-500 rounded-lg md:hidden hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-zinc-200 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:focus:ring-zinc-600"
            aria-controls="navbar-default"
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div className={`w-full md:block md:w-auto ${isMenuOpen ? '' : 'hidden'}`} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-zinc-100 rounded-lg bg-zinc-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-zinc-800 md:dark:bg-zinc-900 dark:border-zinc-700 ">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => linkClassNames(isActive)}
                aria-current="page"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/entertainment"
                className={({ isActive }) => linkClassNames(isActive)}
              >
                Entertainment
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/it"
                className={({ isActive }) => linkClassNames(isActive)}
              >
                IT
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/sports"
                className={({ isActive }) => linkClassNames(isActive)}
              >
                Sports
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => linkClassNames(isActive)}
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
