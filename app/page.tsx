import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex gap-8 row-start-2 items-center sm:items-start justify-center w-full">
          <div className="w-[30%] flex flex-col items-center">
            <h1 className="font-bold text-xl text-black">Entrar na loja</h1>
            <form action="" className="bg-black p-5 flex flex-col items-start justify-center gap-5 w-[100%]">
              <div>
                <h2>Nome completo:</h2>
                <input type="text" className="text-black px-2 py-1 rounded-full w-[100%]"/>
              </div>
              <div>
                <h2>Email:</h2>
                <input type="text" className="text-black px-2 py-1 rounded-full"/>
              </div>
              <div>
                <h2>Senha</h2>
                <input type="password" name="" id="" className="text-black px-2 py-1 rounded-full"/>
              </div>
              <Link href={'/market'} className="rounded-full border border-solid border-white/[1] px-4 py-2 text-black bg-white font-bold ">Acessar Loja</Link>
            </form>
          </div>

          <div>
            <h1 className="font-bold text-xl text-black">Cadastrar produto</h1>
            <form action="" className="bg-black p-5 flex flex-col items-start justify-center gap-5">
              <div>
                <h2>Produto:</h2>
                <input type="text" className="text-black px-2 py-1 rounded-full"/>
              </div>
              <div>
                <h2>Preço:</h2>
                <input type="text" className="text-black px-2 py-1 rounded-full"/>
              </div>
              <div>
                <h2>Quantidade em estoque:</h2>
                <input type="text" name="" id="" className="text-black px-2 py-1 rounded-full"/>
              </div>
              <Link href={'/market'} className="rounded-full border border-solid border-white/[1] px-4 py-2 text-black bg-white font-bold ">Cadastrar produto</Link>
            </form>
          </div>
          
      </main>
    </div>
  );
}
