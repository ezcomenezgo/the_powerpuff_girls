/*
 * @Author:Claire Li
 * @Date:2024-08-06 22:23:15
 * @LastEditors:Claire Li
 * @LastEditTime:2024-08-07 01:39:49
 * @Description:
 */
import { fetchEpisodeById } from "@/app/lib/data";
import { Episode } from "@/app/lib/definitions"; 
import Image from 'next/image';

export default async function Page({ params }: { params: { id: string }}) {
  const episode: Episode = await fetchEpisodeById(Number(params.id))
  return (
    <main>
      This is TV show page.
      <h1>{episode.name}</h1>
      {episode.summary}
      <Image 
        src={episode.image.original}
        width={1000}
        height={760}
        className="hidden md:block"
        alt="Episode image showing desktop version"
      />
    </main>
  )
}