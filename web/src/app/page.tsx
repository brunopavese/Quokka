export default async function Home() {
  const data = await getData();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="font-bold text-2xl">Contagem: {data}</h1>
    </main>
  );
}

export const getData = async () => {
  const response = await fetch('http://localhost:3333/message/count');
  const data = await response.json();

  return data;
};
