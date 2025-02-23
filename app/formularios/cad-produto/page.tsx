import Link from "next/link";

export default function CadastroProduto() {

    
    return(
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
    )

}