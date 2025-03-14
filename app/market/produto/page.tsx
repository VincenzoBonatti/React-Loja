import Image from 'next/image'
import imagem from '/public/mesa.png'

export default function Produto() {


    return (
        <div className='flex flex-col justify-center items-center gap-5 bg-black w-fit p-3 rounded-[8%]'>
            <Image src={imagem} alt="" width={225} className='rounded-[8%]' />
            <div>
                <p>Mesa retratil</p>
                <p>Estoque: xx</p>
                <p>Preço: xx,xx</p>
            </div>
        </div>
    )
}