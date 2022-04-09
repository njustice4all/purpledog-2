import { useState, useEffect } from 'react';
import HackerNews from '../@http/HackerNews';

import { ResponseItem } from '../interfaces';

export default function useGetItem(id: string | undefined) {
  const [item, setItem] = useState<ResponseItem>();

  useEffect(() => {
    HackerNews.getItem(id).then(([error, results]) => {
      if (!error) {
        setItem(results);
      }
    });
  }, [id]);

  return item;
}
