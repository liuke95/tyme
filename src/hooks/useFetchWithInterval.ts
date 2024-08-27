import { formSchema } from '@/components/Filters';
import { ITEM_PER_PAGE } from '@/constants/constant';
import { Item } from '@/types/types';
import { objectToQueryParams } from '@/ultis/ultis';
import { useEffect, useState } from 'react';
import { z } from 'zod';

const useFetchWithInterval = (
  currPage: number,
  filter: z.infer<typeof formSchema>,
  interval: number
) => {
  const [data, setData] = useState<Item[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const queryString = objectToQueryParams(filter);
        const start = (currPage - 1) * ITEM_PER_PAGE;
        const end = currPage * ITEM_PER_PAGE;
        const url = `http://localhost:3000/items?_start=${start}&_end=${end}&${queryString}`;

        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        if (currPage === 1) {
          setData(result);
        } else {
          setData((prevData) => [...prevData, ...result]);
        }
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('An unknown error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    const intervalId = setInterval(() => {
      fetchData();
    }, interval);

    return () => {
      clearInterval(intervalId);
    };
  }, [currPage, filter, interval]);

  return { data, loading, error };
};

export default useFetchWithInterval;
