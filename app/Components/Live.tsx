import { getLiveData } from "../utils/api";
import LiveCard from "./LiveCard";
import { ExploreLive } from "./Type/app";

const Live = async () => {
  const liveData: ExploreLive = await getLiveData();
  return (
    <section className="pt-6">
      <div className="container">
        <div className="flex space-x-3 overflow-scroll p-3 no-scroll-bar">
          {liveData.map((item, ix) => (
            <LiveCard key={ix} img={item.img} title={item.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Live;
