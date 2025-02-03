import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <Link href={'/market'} className="rounded-full border border-solid border-black/[1] px-4 py-2 text-white bg-black font-bold ">Acessar Loja</Link>
      </main>
    </div>
  );
}
