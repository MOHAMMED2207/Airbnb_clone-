import { getExplore } from "../utils/api";
import ExploreCard from "./ExploreCard";
import { ExploreData } from "./Type/app";
import MainHeading from "./MainHeading";

const Explore = async () => {
  const exploreData: ExploreData = await getExplore();

  return (
    <section className="pt-6">
      <div className="container">
        <MainHeading title="Explore Nearby" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  ">
          {exploreData.map((item, ix) => (
            <ExploreCard
              key={ix}
              img={item.img}
              distance={item.distance}
              location={item.location}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Explore;
