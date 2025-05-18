import { useEffect, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { useDebounce } from './useDebounce';

export const useSearch = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const params = new URLSearchParams(searchParams);
  const initSearchTerm = params.get('search');

  const [searchTerm, setSearchTerm] = useState(initSearchTerm || '');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    const params = new URLSearchParams(searchParams);

    if (debouncedSearchTerm) {
      params.set('search', debouncedSearchTerm);
    } else {
      params.delete('search');
    }

    replace(`${pathname}?${params.toString()}`);
  }, [debouncedSearchTerm, pathname, replace, searchParams]);

  return {
    searchTerm,
    setSearchTerm,
  };
};
