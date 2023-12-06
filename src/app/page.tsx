import { CardList } from "./components/CardList/CardList";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24 pb-24">
      <CardList />
    </main>
  );
}
