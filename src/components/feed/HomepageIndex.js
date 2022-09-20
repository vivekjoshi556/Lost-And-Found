import FeedCard from "./FeedCard";
import Button from "../ui/Button";
import Input from "../ui/Input";

const HomepageIndex = () => {
  return (
    <div className="px-6 bg-[#DBF4F9] min-h-screen pt-24">
      <div className = "grid grid-cols-4">
        <div className = "col-span-3"><Input label="Search" className=" w-3/12 mt-5 "></Input></div>
        <div>
            <Button className=" mt-5 ml-72">Filter</Button>
        </div>
      </div>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-4 gap-y-4 lg:grid-cols-4">
        <FeedCard className="my-auto mx-auto"></FeedCard>
        <FeedCard className="my-auto mx-auto"></FeedCard>
        <FeedCard className="my-auto mx-auto"></FeedCard>
        <FeedCard className="my-auto mx-auto"></FeedCard>
        <FeedCard className="my-auto mx-auto"></FeedCard>
        <FeedCard className="my-auto mx-auto"></FeedCard>
        <FeedCard className="my-auto mx-auto"></FeedCard>
        <FeedCard className="my-auto mx-auto"></FeedCard>
        <FeedCard className="my-auto mx-auto"></FeedCard>
      </div>
    </div>
  );
};

export default HomepageIndex;