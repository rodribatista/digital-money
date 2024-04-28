import {ActivityList} from "@/components/app/activity/ActivityList";
import {ActivityFilterButton} from "@/components/app/activity/ActivityFilter";
import {ActivityPagination} from "@/components/app/activity/ActivityPagination";

const ActivityPage = () => {
  return (
    <>
      <h1 className={"self-start text-black font-semibold"}>Actividad</h1>
      <section className={"w-full p-5 flex flex-col gap-5 rounded-md bg-white text-black shadow-md md:p-10 xl:p-15"}>
        <div className={"pb-5 flex flex-row justify-between border-b border-gray-500"}>
          <h2 className={"text-xl font-semibold"}>Tu actividad</h2>
          <ActivityFilterButton/>
        </div>
        <ActivityList onlyLast={false}/>
        <ActivityPagination/>
      </section>
    </>
  );
};

export default ActivityPage;
