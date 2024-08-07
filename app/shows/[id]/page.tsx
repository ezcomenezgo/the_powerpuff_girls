/*
 * @Author:Claire Li
 * @Date:2024-08-06 21:10:00
 * @LastEditors:Claire Li
 * @LastEditTime:2024-08-07 01:39:37
 * @Description:
 */
import { fetchShowById, fetchEpisodesByShowId } from "@/app/lib/data";
import { Show, Episode } from "@/app/lib/definitions"; 
import Image from 'next/image';
import Link from 'next/link';

export default async function Page() {
  const show: Show = await fetchShowById(6771)
  const episodes: Episode[] = await fetchEpisodesByShowId(6771)
  return (
    <main>
      This is TV show page.
      <h1>{show.name}</h1>
      {show.summary}
      <Image 
        src={show.image.original}
        width={1000}
        height={760}
        className="hidden md:block"
        alt="Show image showing desktop version"
      />
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
    </main>
  )
}