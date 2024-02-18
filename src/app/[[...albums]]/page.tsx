import { AlbumsList } from "@/components/albums-list";
import { AlbumsSkeleton } from "@/components/albums-skeleton";
import { Search } from "@/components/search";
import { Pagination } from "@/components/pagination";
import { getAlbums } from "@/lib/api";
import { Suspense } from "react";

export default async function AlbumsPage({
  searchParams,
}: {
  searchParams: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams.query || "";
  const page = searchParams.page || "1";

  const totalPages = 10;

  return (
    <main className="container pt-16">
      <div className="flex justify-center items-center my-4 mb-16">
        <Search />
      </div>

      <Suspense key={query + page} fallback={<AlbumsSkeleton />}>
        <AlbumsList page={page} query={query} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination />
      </div>
    </main>
  );
}
