import {Dispatch, SetStateAction} from "react";

type ActivityPaginationProps = {
  page: number,
  setPage: Dispatch<SetStateAction<number>>,
  maxPage: number,
}

export const ActivityPagination = ({page, setPage, maxPage}: ActivityPaginationProps) => {
  return (
    <div className={"w-full flex flex-row gap-5 justify-center"}>
      {Array.from({length: maxPage}, (_, i) => i + 1).map((i) => (
        <button key={`btn-page-${i}`} onClick={() => setPage(i)}
                className={`py-1 px-2 rounded ${page == i ? "bg-black text-white" : "bg-gray-500"}`}>
          {i}
        </button>
      ))}
    </div>
  );
};
