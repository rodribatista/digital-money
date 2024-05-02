import {Suspense} from "react";

import {ActivityList} from "@/components/dash/activity/ActivityList";

const ActivityPage = () => {
  return (
    <>
      <h1 className={"self-start text-black font-semibold"}>Actividad</h1>
      <Suspense>
        <ActivityList/>
      </Suspense>
    </>
  );
};

export default ActivityPage;
