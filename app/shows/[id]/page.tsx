/*
 * @Author:Claire Li
 * @Date:2024-08-06 21:10:00
 * @LastEditors:Claire Li
 * @LastEditTime:2024-08-06 22:34:12
 * @Description:
 */
import { fetchShowById } from "@/app/lib/data";
import { Show } from "@/app/lib/definitions"; 
import Image from 'next/image';

export default async function Page() {
  const show: Show = await fetchShowById(6771)
  console.log('show:', show, show._embedded.episodes.length);
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
    </main>
  )
}