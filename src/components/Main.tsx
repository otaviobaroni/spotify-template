import { ChevronLeft, ChevronRight, Play } from "lucide-react"
import Image from "next/image"

export function Main(){
  return(
    <main className="flex-1 p-6">
          <div className="flex items-center gap-4">
            <button className="rounded-full bg-black/40 p-1">
              <ChevronLeft/>
            </button>
            <button className="rounded-full bg-black/40 p-1">
              <ChevronRight/>
            </button>
          </div>

          <h1 className="font-semibold text-3xl mt-15 flex-2">Good Afternoon</h1>
          
          <div className="grid grid-cols-3 gap-4 mt-4">
            <a href="#" className="bg-white/10 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors">
              <Image src="/top50-BR.jpg" width={104} height={104} alt="Capa Top Brasil"/>
              <strong>Top Brasil</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 bg-green-500 rounded-full text-black ml-auto mr-8 invisible group-hover:visible">
                <Play/>
              </button>
            </a>
            <a href="#" className="bg-white/10 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors">
              <Image  src="/top50-BR.jpg" width={104} height={104} alt="Capa Top Brasil"/>
              <strong>Top Brasil</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 bg-green-500 rounded-full text-black ml-auto mr-8 invisible group-hover:visible">
                <Play/>
              </button>
            </a>
            <a href="#" className="bg-white/10 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors">
              <Image src="/top50-BR.jpg" width={104} height={104} alt="Capa Top Brasil"/>
              <strong>Top Brasil</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 bg-green-500 rounded-full text-black ml-auto mr-8 invisible group-hover:visible">
                <Play/>
              </button>
            </a>
            <a href="#" className="bg-white/10 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors">
              <Image src="/top50-BR.jpg" width={104} height={104} alt="Capa Top Brasil"/>
              <strong>Top Brasil</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 bg-green-500 rounded-full text-black ml-auto mr-8 invisible group-hover:visible">
                <Play/>
              </button>
            </a>
            <a href="#" className="bg-white/10 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors">
              <Image src="/top50-BR.jpg" width={104} height={104} alt="Capa Top Brasil"/>
              <strong> Top Brasil</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 bg-green-500 rounded-full text-black ml-auto mr-8 invisible group-hover:visible">
                <Play/>
              </button>
            </a>
            <a href="#" className="bg-white/10 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors">
              <Image src="/top50-BR.jpg" width={104} height={104} alt="Capa Top Brasil"/>
              <strong> Top Brasil</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 bg-green-500 rounded-full text-black ml-auto mr-8 invisible group-hover:visible">
                <Play/>
              </button>
            </a>

          </div>

          <h2 className="font-semibold text-2xl mt-10">Made For Otavio Baroni</h2>
          <div className="grid grid-cols-8 gap-4 mt-4">
            <a href="#" className="bg-white/5  group rounded-md overflow-hidden p-3 hover:bg-white/10 transition-colors flex flex-col gap-2">
              <Image className="w-full" src="/top50-BR.jpg" width={120} height={120} alt="Capa Top Brasil"/>
              <strong className="font-semibold">Daily Mix</strong>
              <span className="text-zinc-400 text-sm">Matuê, L7NNON, Pinneapple and more</span>
                <button className="w-12 h-12 flex items-center justify-center pl-1 bg-green-500 rounded-full text-black ml-auto mr-8 invisible group-hover:visible">
                <Play/>
              </button>
              
            </a>

            <a href="#" className="bg-white/5  group rounded-md overflow-hidden p-3 hover:bg-white/10 transition-colors flex flex-col gap-2">
              <Image className="w-full" src="/top50-BR.jpg" width={120} height={120} alt="Capa Top Brasil"/>
              <strong className="font-semibold">Daily Mix</strong>
              <span className="text-zinc-400 text-sm">Matuê, L7NNON, Pinneapple and more</span>
                <button className="w-12 h-12 flex items-center justify-center pl-1 bg-green-500 rounded-full text-black ml-auto mr-8 invisible group-hover:visible">
                <Play/>
              </button>
            </a>

            <a href="#" className="bg-white/5  group rounded-md overflow-hidden p-3 hover:bg-white/10 transition-colors flex flex-col gap-2">
              <Image className="w-full" src="/top50-BR.jpg" width={120} height={120} alt="Capa Top Brasil"/>
              <strong className="font-semibold">Daily Mix</strong>
              <span className="text-zinc-400 text-sm">Matuê, L7NNON, Pinneapple and more</span>
                <button className="w-12 h-12 flex items-center justify-center pl-1 bg-green-500 rounded-full text-black ml-auto mr-8 invisible group-hover:visible">
                <Play/>
              </button>
            </a>

            <a href="#" className="bg-white/5  group rounded-md overflow-hidden p-3 hover:bg-white/10 transition-colors flex flex-col gap-2">
              <Image className="w-full" src="/top50-BR.jpg" width={120} height={120} alt="Capa Top Brasil"/>
              <strong className="font-semibold">Daily Mix</strong>
              <span className="text-zinc-400 text-sm">Matuê, L7NNON, Pinneapple and more</span>
                <button className="w-12 h-12 flex items-center justify-center pl-1 bg-green-500 rounded-full text-black ml-auto mr-8 invisible group-hover:visible">
                <Play/>
              </button>
            </a>


            <a href="#" className="bg-white/5  group rounded-md overflow-hidden p-3 hover:bg-white/10 transition-colors flex flex-col gap-2">
              <Image className="w-full" src="/top50-BR.jpg" width={120} height={120} alt="Capa Top Brasil"/>
              <strong className="font-semibold">Daily Mix</strong>
              <span className="text-zinc-400 text-sm">Matuê, L7NNON, Pinneapple and more</span>
                <button className="w-12 h-12 flex items-center justify-center pl-1 bg-green-500 rounded-full text-black ml-auto mr-8 invisible group-hover:visible">
                <Play/>
              </button>
            </a>

          </div>

        </main>
  )
}