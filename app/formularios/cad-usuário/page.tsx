import Link from "next/link";
import { FormEvent } from "react";

export default function CadastroUsuario() {

    async function cadastrar(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        const response = fetch("http://localhost:3333/users", {
            method: 'POST',
            body: formData,
        })

        const data = (await response).json()
    }


    return (
        <div className="w-[30%] flex flex-col items-center">
            <h1 className="font-bold text-xl text-black">Entrar na loja</h1>
            <form onSubmit={cadastrar} className="bg-black p-5 flex flex-col items-start justify-center gap-5 w-[100%]">
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
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    )

}