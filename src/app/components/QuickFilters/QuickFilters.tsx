export const QuickFilters = () => {
  return (
    <div className="flex flex-col gap-4 p-4 w-[200] border-r-1 border-neutral-300">
      <div>
        <h2 className="text-lg font-semibold mb-2">Genred</h2>
        <ul className="list-none flex flex-col gap-1 pl-2">
          <li className="flex gap-2">
            <input type="checkbox" id="male" name="male" />
            <label htmlFor="male">Male</label>
          </li>
          <li className="flex gap-2">
            <input type="checkbox" id="female" name="female" />
            <label htmlFor="female">Female</label>
          </li>
          <li className="flex gap-2">
            <input type="checkbox" id="unknown" name="unknown" />
            <label htmlFor="unknown">Unknown</label>
          </li>
        </ul>
      </div>
      <div>
        <h2 className="text-lg font-semibold mb-2">Films</h2>
        <ul className="list-none flex flex-col gap-1 pl-2">
          <li className="flex gap-2">
            <input type="checkbox" id="new_hope" name="New Hope" />
            <label htmlFor="new_hope">A New Hope</label>
          </li>
          <li className="flex gap-2">
            <input type="checkbox" id="empire_strikes_back" name="Empire Strikes Back" />
            <label htmlFor="empire_strikes_back">The Empire Strikes Back</label>
          </li>
        </ul>
      </div>
    </div>
  );
};
