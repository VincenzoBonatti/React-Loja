
export default function Header() {
    return(
        <header className="flex justify-around py-4 bg-black items-center">
            <h1 className="font-bold">Loja Exemplo</h1>
            <ul className="flex gap-10">
                <li><h2>inicio</h2></li>
                <li><h2>promoções</h2></li>
                <li><h2>sobre nós</h2></li>
            </ul>
            <h1 className="font-bold">carrinho</h1>
        </header>
    )
}