'use client'
import { useEffect, useState } from "react";


export default function ListaUsuarios() {
    const [data, setData] = useState(null)
  
    useEffect(() =>{
      fetch("http://localhost:3333/users")
      .then((res) => res.json())
      .then((data) => setData(data))
    }, [])
    


    
}