import React from 'react';
import { Link, useParams } from 'react-router-dom';

import useGetCategories from '../hooks/useGetCategories';

export default function PageCategory() {
  const { category } = useParams();
  const results = useGetCategories(category);

  return (
    <>
      <h1>Category: {category}</h1>
      <ul>
        {results.map((result, idx) => (
          <li key={idx}>
            <Link to={`/item/${result}`}>{result}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
