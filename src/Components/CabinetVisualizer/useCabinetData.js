import { useState, useEffect } from 'react';
import cabinetData from '../../data/cabinets.json';

export const useCabinetData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      // Directly use the imported JSON data
      setData(cabinetData);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
      console.error("Failed to load cabinet data:", err);
    }
  }, []);

  return { data, loading, error };
};
