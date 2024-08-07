/*
 * @Author:Claire Li
 * @Date:2024-08-06 21:10:00
 * @LastEditors:Claire Li
 * @LastEditTime:2024-08-07 20:36:59
 * @Description:
 */
import { fetchShowById, fetchEpisodesByShowId } from "@/app/lib/data";
import { Show, Episode } from "@/app/lib/definitions"; 
import EpisodesList from "@/app/ui/shows/episodes-list";
import ShowInfo from "@/app/ui/shows/info";

export default async function Page() {
  const show: Show = await fetchShowById(6771);
  const episodes: Episode[] = await fetchEpisodesByShowId(6771);
  return (
    <main className="p-10">
      <ShowInfo show={show} />
      <EpisodesList episodes={show._embedded.episodes} />
    </main>
  )
}