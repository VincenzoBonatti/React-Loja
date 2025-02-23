'use client'
import { useEffect, useState } from "react";


export default function ListaUsuarios() {
    const [data, setData] = useState(null)
  
    useEffect(() =>{
      fetch("http://localhost:3333/users")
      .then((res) => res.json())
      .then((data) => setData(data))
    }, [])
    


    if (data.length > 0) {
        return(
            {
                data.map(user => (
                  <h1>{user.name}</h1>
                ))
              }
        )
    } else {
        return "Carregando..."
    }
}