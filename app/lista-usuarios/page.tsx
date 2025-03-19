'use client'
import { useEffect, useState } from "react";

type Item = {
    name: string,
    email: string,
    senha: string
}

export default function ListaUsuarios() {
    const [usuarios, setUsuarios] = useState<Array<Item>>([])


    useEffect(() => {
        fetch(`${process.env.api_url}/users`, {
            headers: {
                "Content-Type": "Application/json",
                "Origin": "*"
            }
        }).then(async (data) => {
            let transformed = await data.json() as unknown as Array<Item> 
            setUsuarios(transformed)
        })
    }, [])

    
        

    return( 
        <ul className="text-black">
            {usuarios && usuarios?.map((user, i) =>{
                return (
                    <li key={i} className="my-5">
                        <p>{user.name}</p>
                        <p>{user.email}</p>
                    </li>
                )
                
            })}
        </ul>)

}