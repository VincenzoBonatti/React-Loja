'use client'
import { useState, useEffect } from "react";

export default function pagProduto() {
    const [produto, setProduto] = useState({
        id: "",
        name: "",
        estoque: 0,
        preco: 0
    })
    
    useEffect(() => {
        const params = new URLSearchParams(window.location.search)
        const id = params.get("id");

        fetch(`${process.env.api_url}/products/11abf912-d39e-4f1d-b2f3-1f0ba5da0a11`, {
            headers: {
                "Content-Type": "Application/json",
                "Origin": "*"
            }
        }).then(async (data) => {
            let transformed = await data.json()
            return transformed
        }).then((response) => {
            setProduto(response)
        })
    }, [])
    
    console.log(produto)
    

    return (
        <div className="text-black">
            <p>Id: {produto.id}</p>
            <p>Nome: {produto.name}</p>
            <p>Estoque: {produto.estoque}</p>
            <p>Preço: {produto.preco}</p>
        </div>
    )
}