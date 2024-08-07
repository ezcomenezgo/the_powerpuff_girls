/*
 * @Author:Claire Li
 * @Date:2024-08-06 21:10:00
 * @LastEditors:Claire Li
 * @LastEditTime:2024-08-07 19:39:40
 * @Description:
 */
import { fetchShowById, fetchEpisodesByShowId } from "@/app/lib/data";
import { Show, Episode } from "@/app/lib/definitions"; 
import Image from 'next/image';
import Link from 'next/link';

export default async function Page() {
  const show: Show = await fetchShowById(6771);
  const episodes: Episode[] = await fetchEpisodesByShowId(6771);
  return (
    <main className="p-10">
      <div className="space-y-3">
        <h1 className="font-bold text-3xl">{show.name}</h1>
        <div className="sm:flex">
          <div className="sm:flex">
            <Image 
              src={show.image.original}
              width={250}
              height={190}
              className="hidden md:block"
              alt="Show image showing desktop version"
            />
            <Image 
              src={show.image.medium}
              width={125}
              height={95}
              className="block float-left mr-3 md:hidden"
              alt="Show image showing mobile version"
            />
            <span className="w-full sm:w-2/3 sm:ml-5" dangerouslySetInnerHTML={{__html: show.summary}} />
          </div>
          <div className="w-full bg-slate-700 p-5 my-5 rounded-2xl sm:w-1/3 sm:m-5">
            <h3 className="text-xl">
              Show Info
            </h3>
            <p>
              Show Type: {show.type}
            </p>
            <p className="w-full">
              Official site: 
              <a href={show.officialSite ?? undefined} className=" block max-w-full text-blue-500 underline overflow-hidden">
                {show.officialSite ?? 'N/A'}
              </a>
            </p>
            <p>
              Rate: {show.rating.average}
            </p>
          </div>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>Number</th>
              <th>Date</th>
              <th>Name</th>
            </tr>
          </thead>
          {episodes.map((episode) => {
            return (
              <tbody key={episode.id}>
                <tr>
                  <td>{episode.number}</td>
                  <td>{episode.airdate}</td>
                  <td>
                    <Link
                      href={`/episodes/${episode.id}`}
                    >
                      {episode.name}
                    </Link>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </main>
  )
}