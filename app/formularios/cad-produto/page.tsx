'use client'
import { FormEvent, useState } from "react";



export default function CadastroProduto() {


  const [formData, setFormData] = useState({
    name: '',
    estoque: '',
    preco: '',
  })

  async function cadastrar(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    
    formData.estoque = parseInt(formData.estoque)
    formData.preco = parseFloat(formData.preco)
    
    fetch(`${process.env.api_url}/products`, {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "Application/json",
        "Origin": "*"
      },
    }).then((data) => {
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
    <h1 className="font-bold text-xl text-black">Cadastrar produto</h1>
    <form onSubmit={cadastrar} className="bg-black p-5 flex flex-col items-start justify-center gap-5 w-[100%]">
      <div className="w-[100%]">
        <h2>Produto:</h2>
        <input type="text" name="name" value={formData.name} onChange={handleInputChange} className="text-black px-2 py-1 rounded-full w-[100%]" />
      </div>
      <div className="w-[100%]">
        <h2>Quantidade em estoque:</h2>
        <input type="text" name="estoque" value={formData.estoque} onChange={handleInputChange} className="text-black px-2 py-1 rounded-full w-[100%]" />
      </div>
      <div className="w-[100%]">
        <h2>Preço:</h2>
        <input type="text" name="preco" value={formData.preco} onChange={handleInputChange} className="text-black px-2 py-1 rounded-full w-[100%]" />
      </div>
      <button type="submit" className="rounded-full border border-solid border-white/[1] px-4 py-2 text-black bg-white font-bold ">Cadastrar produto</button>
    </form>
  </div>
)

}