"use client";
import { useQuery } from "react-query";
import { Card } from "../Card/Card";
import { Loading } from "../Loading/Loading";
import { Suspense, useState } from "react";
import { Pagination } from "../Pagination/Pagination";
import { Header } from "../Header/Header";

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
    queryKey: ["characters", page],
    queryFn: async () =>
      fetch(`https://rickandmortyapi.com/api/character?page=${page}`, {
        cache: "no-cache",
      })
        .then(async (res) => await res.json())
        .catch((err) => console.log(err)),
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });

  const characters: RickAndMortyCharacter[] = data?.results || [];

  if (isLoading) return <><Loading />
    <Pagination
      className="mt-5"
      currentPage={page}
      onChangePage={(index) => setPage(index)}
      totalPages={100}
    /></>;

  return (
    <div>
      <Header title="Characters" className="justify-between">
        <input
          placeholder="Type a name..."
          className="border rounded-lg p-3 border-gray-700 active:border-2 text-gray-800"
          onChange={(event) => setName(event.target.value)}
        />
      </Header>
      <div className="grid grid-cols-4 gap-2 row">
        {characters?.map((char) => (
          <Suspense>
            <Card
              name={char.name}
              key={char.id}
              imageUrl={char.image}
              status={char.status}
            />
          </Suspense>

        ))}
        <Pagination
          className="mt-5"
          currentPage={page}
          onChangePage={(index) => setPage(index)}
          totalPages={data?.info.pages || 0}
        />
      </div>
    </div>
  );
};
