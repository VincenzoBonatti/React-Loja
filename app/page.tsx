import CadastroProduto from "./formularios/cad-produto/page";
import CadastroUsuario from "./formularios/cad-usuário/page";
import ListaUsuarios from "./lista-usuarios/page";

export default function Home() {



  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex gap-8 row-start-2 items-center sm:items-start justify-center w-full">
          
          <CadastroUsuario/>

          <CadastroProduto/>
          
          
      </main>
    </div>
  );
}
