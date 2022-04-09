import React from 'react';
import { useParams } from 'react-router-dom';
import useGetItem from '../hooks/useGetItem';

export default function PageItem() {
  const { id } = useParams();
  const item = useGetItem(id);

  if (!item) return <>EMPTY</>;

  const results = Object.keys(item).map((key) => ({ key, value: item[key] }));

  return (
    <>
      <h1>Item: {id}</h1>
      <main>
        {results.map(({ key, value }) => (
          <div key={key} style={{ display: 'flex' }}>
            <b style={{ marginRight: '1rem' }}>{key}</b>
            <div>{JSON.stringify(value)}</div>
          </div>
        ))}
      </main>
    </>
  );
}
