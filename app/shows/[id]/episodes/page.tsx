/*
 * @Author:Claire Li
 * @Date:2024-08-06 23:01:24
 * @LastEditors:Claire Li
 * @LastEditTime:2024-08-07 00:46:19
 * @Description:
 */
import { fetchEpisodesByShowId } from "@/app/lib/data";
import { Episode } from "@/app/lib/definitions"; 

export default async function Page() {
  const episodes: Episode[] = await fetchEpisodesByShowId(6771)
  console.log('episodes:', episodes);
  return (
    <>
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
                <td>{episode.name}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </>
    // <main>
    //   <div role="tablist" className="tabs tabs-boxed">
    //     <a role="tab" className="tab">Tab 1</a>
    //     <a role="tab" className="tab tab-active">Tab 2</a>
    //     <a role="tab" className="tab">Tab 3</a>
    //   </div>
    // </main>
  );
}