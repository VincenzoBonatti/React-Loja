'use client'
import { useState, useEffect } from "react";
import Image from 'next/image'
import imagem from '/public/mesa.png'

type Item = {
    id: string,
    name: string,
    estoque: number,
    preco: number
}

export default function ListaProdutos() {
    const [produtos, setProdutos] = useState<Array<Item>>([])

    useEffect(() => {
        fetch(`${process.env.api_url}/products`, {
            headers: {
                "Content-Type": "Application/json",
                "Origin": "*"
            }
        }).then(async (data) => {
            let transformed = await data.json() as unknown as Array<Item>
            setProdutos(transformed)
        })
    },[])

    console.log(produtos)

    return(
        <div className="flex gap-10 flex-wrap">
            {produtos && produtos?.map((produto, i) =>{
                return (
                    <div key={i} id={produto.id} className="bg-black p-5 flex flex-col rounded-[5%] gap-2">
                        <Image src={imagem} alt="" width={225} className='rounded-[8%]' />
                        <p>{produto.name}</p>
                        <div className="flex gap-1">
                            <h2 className="font-bold">Estoque:</h2>
                            <p>{produto.estoque}</p>
                        </div>
                        <div className="flex gap-1">
                            <h2 className="font-bold">Preço:</h2>
                            <p>R${produto.preco}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )

}