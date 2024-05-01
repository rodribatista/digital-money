import React from 'react';
import Link from "next/link";
import {ActivityVoucher} from "@/components/dash/activity/ActivityVoucher";

type ActivityVoucherPageProps = {
  params: {
    id: number
  };
};

const ActivityVoucherPage = ({params}: ActivityVoucherPageProps) => {
  return (
    <>
      <div className={"flex flex-row gap-2 text-black self-start"}>
        <Link href={"/dashboard/activity"} className={"border-b"}>Actividad</Link>
        <span>/</span>
        <h1 className={"font-semibold"}>#{params.id}</h1>
      </div>
      <ActivityVoucher activity_id={params.id}/>
    </>
  );
};

export default ActivityVoucherPage;
