import { TextInput } from '@/components/TextInput';

export default async function Home() {
  const data = await getData();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-20 px-8 md:py-8 bg-zinc-800">
      <h1 className="font-bold text-2xl text-slate-100">Contagem: {data}</h1>
      <div className="rounded-md bg-zinc-700 inline-block whitespace-normal p-4 max-w-2xl">
        <p className="text-slate-100 text-l font-normal">
          Isso é uma mensagem bem maior que a anterior
        </p>
      </div>
      <TextInput />
    </main>
  );
}

export const getData = async () => {
  const response = await fetch('http://localhost:3333/message/count', {
    next: {
      revalidate: 30,
    },
  });
  const data = await response.json();

  return data;
};
