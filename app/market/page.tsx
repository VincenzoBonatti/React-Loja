import Header from '../header/page';
let a = 2



export default function Loja() {
    return (
        <main className="size-full flex items-center justify-center">
            <div className="size-90">
                {a == 2 && (
                    <Header/>
                )}
            </div>
        </main>
    )
}