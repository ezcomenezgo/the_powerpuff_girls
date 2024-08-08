/*
 * @Author:Claire Li
 * @Date:2024-08-06 21:10:00
 * @LastEditors:Claire Li
 * @LastEditTime:2024-08-08 22:57:23
 * @Description: Specific TV show introduction page
 */
import { fetchShowById, fetchEpisodesByShowId } from "@/app/lib/data";
import { Show, Episode } from "@/app/lib/definitions"; 
import EpisodesList from "@/app/ui/shows/episodes-list";
import ShowInfo from "@/app/ui/shows/info";

export default async function Page({ params }: { params: {id: string}}) {
  const show: Show = await fetchShowById(Number(params.id));
  const episodes: Episode[] = await fetchEpisodesByShowId(Number(params.id));
  return (
    <main className="p-10">
      <ShowInfo show={show} />
      <EpisodesList episodes={show._embedded.episodes} />
    </main>
  )
}