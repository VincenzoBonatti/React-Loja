'use client'
import { FormEvent, useState } from "react";



export default function CadastroUsuario() {
    
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        senha: '',
      })

    async function cadastrar(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        
        fetch(`${process.env.api_url}/users`, {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "Application/json",
                "Origin": "*"
            },
        }).then((data) =>{
            console.log(data)  
        })
    }

    const handleInputChange = (event: { target: { name: any; value: any; }; }) => {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value,
        });
      };


    return (
        <div className="w-[30%] flex flex-col items-center">
            <h1 className="font-bold text-xl text-black">Entrar na loja</h1>
            <form onSubmit={cadastrar} className="bg-black p-5 flex flex-col items-start justify-center gap-5 w-[100%]">
                <div className="w-[100%]">
                    <h2>Nome completo:</h2>
                    <input type="text" name="name" value={formData.name} onChange={handleInputChange} className="text-black px-2 py-1 rounded-full w-[100%]"/>
                </div>
                <div className="w-[100%]">
                    <h2>Email:</h2>
                    <input type="text" name="email" value={formData.email} onChange={handleInputChange} className="text-black px-2 py-1 rounded-full w-[100%]"/>
                </div>
                <div className="w-[100%]">
                    <h2>Senha</h2>
                    <input type="password" name="senha" value={formData.senha} onChange={handleInputChange} className="text-black px-2 py-1 rounded-full w-[100%]"/>
                </div>
                <button type="submit" className="rounded-full border border-solid border-white/[1] px-4 py-2 text-black bg-white font-bold ">Cadastrar</button>
            </form>
        </div>
    )

}