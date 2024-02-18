"use client";

import { useDebouncedCallback } from "use-debounce";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { Input } from "./ui/input";

export function Search() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
    if (term.length) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <Input
      type="search"
      placeholder="Search Albums ..."
      onChange={(e) => handleSearch(e.target.value)}
      defaultValue={searchParams.get("query")?.toString() || ""}
      className="w-1/3"
      id="albums-search"
    />
  );
}
