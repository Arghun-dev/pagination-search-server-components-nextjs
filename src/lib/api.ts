type Album = {
  userId: number;
  id: number;
  title: string;
};

type SuccessResponse = {
  success: true;
  data: Album[];
};

type ErrorResponse = {
  success: false;
  data: null;
  error: any;
};

interface GetAlbumsProps {
  page: string;
  query: string;
}

export async function getAlbums({
  page,
  query,
}: GetAlbumsProps): Promise<SuccessResponse | ErrorResponse> {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/albums?_page=${page}&_limit=5&q=${query}`
    );
    const data = await res.json();

    return {
      success: true,
      data,
    };
  } catch (error) {
    return {
      success: false,
      data: null,
      error,
    };
  }
}
