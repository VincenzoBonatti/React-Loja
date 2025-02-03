import Produto from "../produto/page"

export default function ListaProdutos() {
    let lista = []
    for (let i = 0; i < 6; i++) {
        lista.push(<Produto/>)
        
    }
    return lista
}