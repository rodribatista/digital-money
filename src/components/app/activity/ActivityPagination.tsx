"use client";
import {useEffect, useState} from 'react';
import {useRouter, useSearchParams} from "next/navigation";

export const ActivityPagination = () => {

  const router = useRouter()
  const params = useSearchParams()

  const [page, setPage] = useState(params.get("page") || "1");

  useEffect(() => {
    router.push(`/app/activity?page=${page}`)
  }, [page]);

  return (
    <div className={"w-full flex flex-row gap-5 justify-center"}>
      <button onClick={() => setPage("1")}
              className={`py-1 px-2 rounded ${page == "1" ? "bg-black text-white" : "bg-gray-500"}`}>
        1
      </button>
      <button onClick={() => setPage("2")}
              className={`py-1 px-2 rounded ${page == "2" ? "bg-black text-white" : "bg-gray-500"}`}>
        2
      </button>
      <button onClick={() => setPage("3")}
              className={`py-1 px-2 rounded ${page == "3" ? "bg-black text-white" : "bg-gray-500"}`}>
        3
      </button>
    </div>
  );

};
