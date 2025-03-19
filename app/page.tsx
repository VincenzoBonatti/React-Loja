import Link from "next/link";
import CadastroProduto from "./formularios/cad-produto/page";
import CadastroUsuario from "./formularios/cad-usuário/page";
import ListaUsuarios from "./lista-usuarios/page";

export default function Home() {

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center justify-center w-full">
        <div className="flex gap-8 row-start-2 items-center sm:items-start justify-center w-full">
          <CadastroUsuario />

          <CadastroProduto />
        </div>
        <Link href={'/market'} className="rounded-full border border-solid border-black/[1]  text-white bg-black p-3 font-bold ">Acessar Loja</Link>
        <ListaUsuarios/>
        
      </main>
    </div>
  );
}
