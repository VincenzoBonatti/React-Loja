'use client'
import { useEffect, useState } from "react";


export default function ListaUsuarios() {
  let usuarios

  fetch(`${process.env.api_url}/users`,{
    headers: {
    "Content-Type": "Application/json",
    "Origin": "*"
    }
  }).then(async(data) =>{
    usuarios = await data.json()
    console.log(usuarios)
  })


  return <h1>I've rendered times!</h1>;

    
}