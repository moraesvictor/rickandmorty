"use client";
import { useQuery } from "react-query";
import { Card } from "../Card/Card";
import { Loading } from "../Loading/Loading";
import { useState } from "react";
import { Pagination } from "../Pagination/Pagination";
import { info } from "console";

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
  const { data, isLoading } = useQuery<Data>({
    queryKey: ["characters", page],
    queryFn: async () =>
      fetch(`https://rickandmortyapi.com/api/character?page=${page}`, {
        cache: "no-cache",
      })
        .then(async (res) => await res.json())
        .catch((err) => console.log(err)),
    refetchOnWindowFocus: false,
    staleTime: 60 * 5 * 1000,
  });

  console.log(data);
  const characters: RickAndMortyCharacter[] = data?.results || [];

  if (isLoading) return <Loading />;

  return (
    <div className="grid grid-cols-4 gap-2 row">
      {characters.map((char) => (
        <Card
          key={char.id}
          imageUrl={char.image}
          status={char.status}
          title={char.name}
        />
      ))}
      <Pagination
        currentPage={page}
        onChangePage={(index) => setPage(index)}
        totalPages={data?.info.pages || 0}
      />
    </div>
  );
};
