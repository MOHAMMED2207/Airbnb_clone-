export type ExploreItems = {
  img: string;
  location: string;
  distance: string;
};
export type ExploreData = ExploreItems[];

// ================================================================

export type LiveItems = {
  img: string;
  title: string;
};
export type ExploreLive = LiveItems[];

// ================================================================
export type SearshResulrItems = {
  location: string;
  title: string;
  description: string;
  star: string;
  price: string;
  long: string;
  img:string
  lat: string;
  total: string;
};

export type SearshResulr = SearshResulrItems[];
