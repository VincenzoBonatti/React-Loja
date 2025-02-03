import ListaProdutos from "./lista-produtos/page"

export default function Loja() {
    return (
        <main className="size-full flex items-center justify-center">
            <div className="w-[50%] flex gap-10 flex-wrap justify-center">
            <ListaProdutos/>
            </div>
        </main>
    )
}