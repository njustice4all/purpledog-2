import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { categories } from '../utils/constants';
import { ReponseCategory } from '../interfaces';
import HackerNews from '../@http/HackerNews';

export default function useGetCategories(category: string | undefined) {
  const navigate = useNavigate();
  const [results, setResults] = useState<ReponseCategory>([]);

  const isCorrectCategory = categories.some((c) => c === category);

  useEffect(() => {
    if (!isCorrectCategory) {
      return navigate('/');
    }
  }, [navigate, category, isCorrectCategory]);

  useEffect(() => {
    if (isCorrectCategory) {
      HackerNews.getCategories(category).then(([error, results]) => {
        if (!error) {
          setResults(results.sort((a, b) => b - a));
        }
      });
    }
  }, [category, isCorrectCategory]);

  return results;
}
