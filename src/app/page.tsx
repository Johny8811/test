import { getPeopleData } from '@/api/getPeopleData';

import { QuickFilters } from './components/QuickFilters/QuickFilters';
import { PeopleTable } from './components/PeopleTable/PeopleTable';

export default async function Home({ searchParams }: { searchParams: Promise<{ [key: string]: string | undefined }> }) {
  const params = await searchParams;
  const people = await getPeopleData(params.search?.toString());

  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <div className="p-4">
        <h1 className="text-3xl font-semibold">Alliance Book</h1>
      </div>

      <div className="flex border-2 rounded-lg border-neutral-300">
        <QuickFilters />

        <PeopleTable people={people.results} />
      </div>
    </div>
  );
}
