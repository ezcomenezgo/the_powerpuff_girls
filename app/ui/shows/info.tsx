/*
 * @Author:Claire Li
 * @Date:2024-08-07 20:22:18
 * @LastEditors:Claire Li
 * @LastEditTime:2024-08-07 20:31:38
 * @Description:
 */
import { Show } from "@/app/lib/definitions";
import Image from 'next/image';

export default function ShowInfo({show}: {show: Show}) {
  return (
    <section>
      <h1 className="font-bold text-3xl mb-5">{show.name}</h1>
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
    </section>
  )
}
