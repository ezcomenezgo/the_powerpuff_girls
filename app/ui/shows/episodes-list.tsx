/*
 * @Author:Claire Li
 * @Date:2024-08-07 19:32:34
 * @LastEditors:Claire Li
 * @LastEditTime:2024-08-07 20:36:35
 * @Description:
 */
import { Episode } from "@/app/lib/definitions";
import Link from 'next/link';

export default function EpisodesList({episodes}: {episodes: Episode[]}) {
  return (
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
  )
}