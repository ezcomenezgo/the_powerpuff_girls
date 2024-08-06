/*
 * @Author:Claire Li
 * @Date:2024-08-06 21:11:18
 * @LastEditors:Claire Li
 * @LastEditTime:2024-08-06 22:38:22
 * @Description:
 */
import { Show, Episode } from "@/app/lib/definitions";

export async function fetchShowById(id: number): Promise<Show> {
  try {
    const res = await fetch(`https://api.tvmaze.com/shows/${id}?embed=episodes`);

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    return res.json();
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Failed to fetch show data.');
  }
}

export async function fetchEpisodeById(id: number): Promise<Episode> {
  try {
    const res = await fetch(`https://api.tvmaze.com/episodes/${id}`);

    if (!res.ok) {
      throw new Error('Failed to fetch episode data');
    }

    return res.json();
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Failed to fetch episode data.');
  }
}