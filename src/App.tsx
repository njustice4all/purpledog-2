import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import PageCategory from './components/PageCategory';
import PageItem from './components/PageItem';
import NotFound from './components/NotFound';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/:category" element={<PageCategory />} />
        <Route path="/item/:id" element={<PageItem />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
