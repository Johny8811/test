import Image from 'next/image';

export const PeopleTable = () => {
  return (
    <div className="p-4 w-full flex flex-col gap-4">
      <input
        className="w-full border-1 rounded-lg border-neutral-300 p-2 px-4 focus:outline-blue-500"
        type="text"
        placeholder="Search"
      />

      <table className="w-full">
        <thead>
          <tr>
            <th className="py-2" />
            <th className="py-2">Name</th>
            <th className="py-2">Birth yea r</th>
            <th className="py-2">Height</th>
            <th className="py-2">Genre</th>
            <th className="py-2">Homeworld</th>
            <th className="py-2">Mass</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-neutral-300">
          <tr
            tabIndex={0}
            className="focus:outline focus:outline-blue-500 hover:outline hover:outline-blue-500 rounded-lg cursor-pointer"
          >
            <td className="text-center flex justify-center items-center py-2">
              <Image
                // TODO: zoom image on space tap
                tabIndex={0}
                className="rounded-full"
                aria-hidden
                src="https://vieraboschkova.github.io/swapi-gallery/static/assets/img/people/1.jpg"
                alt="Machine"
                width={64}
                height={64}
              />
            </td>
            <td className="text-center py-2">Luke Skywalker</td>
            <td className="text-center py-2">19BBY</td>
            <td className="text-center py-2">172</td>
            <td className="text-center py-2">Male</td>
            <td className="text-center py-2">Tatooine</td>
            <td className="text-center py-2">77</td>
          </tr>
        </tbody>
      </table>

      <div className="flex justify-end gap-4">
        <button>{'<'}</button>

        <div className="flex gap-3">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
        </div>

        <button>{'>'}</button>
      </div>
    </div>
  );
};
