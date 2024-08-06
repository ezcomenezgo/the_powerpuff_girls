/*
 * @Author:Claire Li
 * @Date:2024-08-06 21:11:18
 * @LastEditors:Claire Li
 * @LastEditTime:2024-08-06 22:18:17
 * @Description:
 */
import { Show } from "@/app/lib/definitions";

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