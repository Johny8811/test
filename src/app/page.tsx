import { QuickFilters } from './components/QuickFilters/QuickFilters';
import { PeopleTable } from './components/PeopleTable/PeopleTable';
import { getPeopleWithImages } from './api/getPeopleWithImages';

export default async function Home({ searchParams }: { searchParams: Promise<{ [key: string]: string | undefined }> }) {
  const params = await searchParams;
  const peopleWithImages = await getPeopleWithImages(params);

  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <div className="p-4">
        <h1 className="text-3xl font-semibold">Alliance Book</h1>
      </div>

      <div className="flex flex-col lg:flex-row border-2 rounded-lg border-neutral-300">
        <QuickFilters />

        <PeopleTable people={peopleWithImages} />
      </div>
    </div>
  );
}
