"use client";
import { useQuery } from "react-query";
import { Card } from "../Card/Card";
import { Loading } from "../Loading/Loading";
import { Suspense, useState } from "react";
import { Pagination } from "../Pagination/Pagination";
import { Header } from "../Header/Header";
import { useDebouncedCallback } from "use-debounce";

interface RickAndMortyCharacter {
  created: string;
  episode: string[];
  gender: string;
  id: number;
  image: string;
  location: {
    name: string;
    url: string;
  };
  name: string;
  origin: {
    name: string;
    url: string;
  };
  species: string;
  status: string;
  type: string;
  url: string;
}

interface Info {
  count: number;
  next: string | null;
  pages: number;
  prev: string | null;
}

interface Data {
  info: Info;
  results: RickAndMortyCharacter[];
}

export const CardList = () => {
  const [page, setPage] = useState(1);
  const [name, setName] = useState("");
  const { data, isLoading } = useQuery<Data>({
    queryKey: ["characters", page, name],
    queryFn: async () =>
      fetch(`https://rickandmortyapi.com/api/character?page=${page}&name=${name}`, {
        cache: "no-cache",
      })
        .then(async (res) => await res.json())
        .catch((err) => console.log(err)),
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });

  const handleSearch = useDebouncedCallback((searchTerm) => {
    setName(searchTerm)
  }, 300)

  const characters = data?.results || []

  return (
    <div>
      <Header title="Characters" className="justify-between">
        <input
          placeholder="Type a name..."
          className="border rounded-lg p-3 border-gray-700 active:border-2 text-gray-800"
          onChange={(event) => handleSearch(event.target.value)}
        />
      </Header>
      {isLoading ? <Loading /> :
        <div className="grid grid-cols-4 gap-2 row w-full">
          {
            characters?.map((char) => (
              <Suspense key={char.id}>
                <Card
                  name={char.name}
                  imageUrl={char.image}
                  status={char.status}
                />
              </Suspense>

            ))}
        </div>}
      <Pagination
        className="mt-5"
        currentPage={page}
        onChangePage={(index) => setPage(index)}
        totalPages={data?.info?.pages || 45}
      />
    </div>
  );
};
