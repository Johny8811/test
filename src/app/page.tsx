import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <div className="p-4">
        <h1 className="text-3xl font-semibold">Alliance Book</h1>
      </div>

      <div className="flex border-2 rounded-lg border-neutral-300">
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
      </div>
    </div>
  );
}
