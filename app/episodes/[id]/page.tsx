/*
 * @Author:Claire Li
 * @Date:2024-08-06 22:23:15
 * @LastEditors:Claire Li
 * @LastEditTime:2024-08-08 14:59:11
 * @Description: Specific episode introduction page
 */
import { fetchEpisodeById } from "@/app/lib/data";
import { Episode } from "@/app/lib/definitions"; 
import Image from 'next/image';

export default async function Page({ params }: { params: { id: string }}) {
  const episode: Episode = await fetchEpisodeById(Number(params.id))
  return (
    <main className="p-10 min-h-screen">
      <h1 className="font-bold text-3xl mb-5">{episode.name}</h1>
      <div className="sm:flex">
        <Image 
          src={episode.image?.medium || ''}
          width={500}
          height={380}
          className="block mb-5 md:hidden"
          alt="Episode image showing mobile version"
        />
        <span dangerouslySetInnerHTML={{__html: episode.summary}} />
        <Image 
          src={episode.image?.original || ''}
          width={1000}
          height={760}
          className="hidden md:block md:ml-5"
          alt="Episode image showing desktop version"
        />
        
      </div>
    </main>
  )
}