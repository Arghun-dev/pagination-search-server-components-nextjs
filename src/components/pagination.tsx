"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";

export function Pagination() {
  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createPageURL = (pageNumber: number | string) => {
    console.log(pageNumber);
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex space-x-4 mt-12">
      <button
        className="bg-gray-700 text-white px-4 py-2 rounded"
        onClick={() => {
          createPageURL(2);
        }}
      >
        Page 2
      </button>
      <button
        className="bg-gray-700 text-white px-4 py-2 rounded"
        onClick={() => {
          createPageURL(3);
        }}
      >
        Page 3
      </button>
      <button
        className="bg-gray-700 text-white px-4 py-2 rounded"
        onClick={() => {
          createPageURL(4);
        }}
      >
        Page 4
      </button>
    </div>
  );
}
