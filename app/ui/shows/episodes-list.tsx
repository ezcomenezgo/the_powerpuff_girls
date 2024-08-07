/*
 * @Author:Claire Li
 * @Date:2024-08-07 19:32:34
 * @LastEditors:Claire Li
 * @LastEditTime:2024-08-07 22:32:07
 * @Description:
 */
'use client'

import { Episode } from "@/app/lib/definitions";
import Link from 'next/link';
import { useState } from 'react';

export default function EpisodesList({episodes}: {episodes: Episode[]}) {
  const episodesCopy: Episode[] = [...episodes];
  const episodesBySeasonsMap: Map<number, Episode[]> = groupEpisodesBySeason(episodesCopy);
  const [activeTab, setActiveTab] = useState(1);

  const renderEpisodesBySeason = () => {
    const episodes = episodesBySeasonsMap.get(activeTab);
    return episodes?.map((episode) => {
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
      )
    })
  }

  return (
    <section>
      <h3 className="my-5 text-xl font-bold">Episode List</h3>
      <div role="tablist" className="tabs tabs-bordered">
        {Array.from(episodesBySeasonsMap.keys()).map(key => {
          return (
            <a 
              key={key}
              role="tab"
              className={`tab ${activeTab === key ? 'tab-active' : ''}`}
              onClick={() => setActiveTab(key)}
            >
              Season {key}
            </a>
          )
        })}
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Number</th>
            <th>Date</th>
            <th>Name</th>
          </tr>
        </thead>
        {renderEpisodesBySeason()}
      </table>
    </section>
  )
}

function groupEpisodesBySeason(episodes: Episode[]): Map<number, Episode[]> {
  const seasons: Map<number, Episode[]> = new Map();
  episodes.forEach((episode: Episode) => {
    let seasonNumber = episode.season;

    if (!seasons.has(seasonNumber)) {
      seasons.set(seasonNumber, []);
    }

    const seasonEpisodes = seasons.get(seasonNumber);
    if (seasonEpisodes) {
      seasonEpisodes.push(episode)
    }
  })

  return seasons;
}