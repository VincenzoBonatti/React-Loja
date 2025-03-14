'use client'
import { useEffect, useState } from "react";

export default function ListaUsuarios() {
    const [usuarios, setUsuarios] = useState<any | null>


    useEffect(() => {
        fetch(`${process.env.api_url}/users`, {
            headers: {
                "Content-Type": "Application/json",
                "Origin": "*"
            }
        }).then(async (data) => {
            setUsuarios(await data.json())
        })
        console.log(usuarios)
    }, [])

    
        

    return( 
        <div>
            {usuarios && usuarios.map((user, i) =>{
                
                <li key={i}>
                    {user.name}
                </li>
                
            })}
        </div>)

}