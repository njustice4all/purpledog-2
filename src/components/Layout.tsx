import React from 'react';
import { Link, Outlet } from 'react-router-dom';

import { categories } from '../utils/constants';

export default function Layout() {
  return (
    <>
      <nav>
        <Link to="/">HOME</Link>
        <ul>
          {categories.map((category, idx) => (
            <li key={idx}>
              <Link to={`/${category}`}>{category}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <hr />
      <Outlet />
    </>
  );
}
