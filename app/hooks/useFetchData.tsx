'use client';

import { useState, useEffect } from 'react';

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export function useFetchData<T = any>(url: string) {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setState(prev => ({ ...prev, loading: true, error: null }));
        
        const response = await fetch(url);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('Fetch response:', data);
        
        setState({
          data,
          loading: false,
          error: null,
        });
      } catch (error) {
        console.error('Fetch error:', error);
        setState({
          data: null,
          loading: false,
          error: error instanceof Error ? error.message : 'An unknown error occurred',
        });
      }
    };

    if (url) {
      fetchData();
    }
  }, [url]);

  return state;
}