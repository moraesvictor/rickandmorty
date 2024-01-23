import { Metadata } from "next";
import { CardList } from "./components/CardList/CardList";

export const metadata: Metadata = {
  title: 'Characters | Ricky and Morty',
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24 pb-24">
      <CardList />
    </main>
  );
}
