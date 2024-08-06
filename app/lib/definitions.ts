/*
 * @Author:Claire Li
 * @Date:2024-08-06 21:11:36
 * @LastEditors:Claire Li
 * @LastEditTime:2024-08-06 22:36:22
 * @Description:
 */
export interface Show {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  genres: string[];
  status: string;
  runtime: number;
  averageRuntime: number;
  premiered: string;
  ended: string;
  officialSite: string | null;
  schedule: Schedule;
  rating: Rating;
  weight: number;
  network: Network | null;
  webChannel: WebChannel | null;
  dvdCountry: DvdCountry | null;
  externals: Externals;
  image: Image;
  summary: string;
  updated: number;
  _links: Links;
  _embedded: Embedded;
}

export interface Schedule {
  time: string;
  days: string[];
}

export interface Rating {
  average: number;
}

export interface Network {
  id: number;
  name: string;
  country: Country;
  officialSite: string | null;
}

export interface Country {
  name: string;
  code: string;
  timezone: string;
}

export interface WebChannel {
  // Define properties as needed (or use any if not specified)
}

export interface DvdCountry {
  // Define properties as needed (or use any if not specified)
}

export interface Externals {
  tvrage: number | null;
  thetvdb: number;
  imdb: string;
}

export interface Image {
  medium: string;
  original: string;
}

export interface Links {
  self: Link;
  previousEpisode: LinkWithName;
}

export interface Link {
  href: string;
}

export interface LinkWithName extends Link {
  name: string;
}

export interface Embedded {
  episodes: Episode[];
}

export interface Episode {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  type: string;
  airdate: string;
  airtime: string;
  airstamp: string;
  runtime: number;
  rating: Rating | null;
  image: Image;
  summary: string;
  _links: EpisodeLinks;
}

export interface EpisodeLinks {
  self: Link;
  show: LinkWithName;
}