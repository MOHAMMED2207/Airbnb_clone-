import { SearshResulr, SearshResulrItems } from "../Components/Type/app";

export const getExplore = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/b/4G1G`);
    const ExplorData = await res.json();
    return ExplorData;
  } catch (error) {
    console.log(error);
  }
};

export const getLiveData = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/b/VHHT`);
    const LiveData = await res.json();
    return LiveData;
  } catch (error) {
    console.log(error);
  }
};

export const getSearchResult = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/b/5NPS`)
      .then((res) => res.json())
      .then((res) => res);
    return res;
  } catch (error) {
    console.log(error);
  }
};
