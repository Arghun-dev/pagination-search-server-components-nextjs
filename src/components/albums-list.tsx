import { getAlbums } from "@/lib/api";
import { AlbumsError } from "@/lib/exceptions";

interface AlbumsListProps {
  page: string;
  query: string;
}

export async function AlbumsList({ page, query }: AlbumsListProps) {
  const res = await getAlbums({ page, query });

  if (!res.success) {
    throw new AlbumsError(res.error);
  }

  return res.data.map((album) => (
    <div key={album.id} className="rounded border border-gray-200 p-4 m-4">
      <p>{album.title}</p>
    </div>
  ));
}
