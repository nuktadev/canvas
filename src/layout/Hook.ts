import { useEffect, useState } from "react";

export const useDebounced = ({
  searchQuery,
  delay,
}: {
  searchQuery: string;
  delay: number;
}) => {
  const [debounced, setDebounced] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounced(searchQuery);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [searchQuery, delay]);

  return debounced;
};
