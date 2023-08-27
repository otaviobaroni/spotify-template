import { Shuffle, SkipBack, Play, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume, Maximize2 } from "lucide-react";
import Image from "next/image";

export function Footer(){
  return(
        <footer className="bg-zinc-800 border-t border-zinc-700 px-6 py-4 flex items-start justify-between">
        <div className="flex items-center gap-3">
          <Image src="/mdt_album.jpeg" width={56} height={56} alt="Maquina do tempo - Matue"/>
          <div className="flex flex-col">
            <strong className="font-normal">Gorilla Roxo</strong>
            <span className="text-xs text-zinc-500">Matuê</span>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-6">
            <Shuffle size={20} className="text-zinc-300"/>
            <SkipBack size={20} className="text-zinc-300"/>
            <button className="w-10 h-10 flex items-center justify-center pl-1 bg-white rounded-full text-black">
                <Play size={20}/>
            </button>
            <SkipForward size={20} className="text-zinc-300"/>
            <Repeat size={20} className="text-zinc-300"/>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-zinc-500">1:12</span>
            <div className="h-1 rounded-full w-96 bg-zinc-600">
              <div className="bg-zinc-200 w-40 h-1 rounded-full"></div>
            </div>
            <span className="text-xs text-zinc-500">2:45</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Mic2 size={20}/>
          <LayoutList size={20}/>
          <Laptop2 size={20}/>
          <div className="flex items-center gap-2">
            <Volume/>
            <div className="h-1 rounded-full w-24 bg-zinc-600">
              <div className="bg-zinc-200 w-10 h-1 rounded-full"></div>
            </div>
          </div>
          <Maximize2 size={20}/>
        </div>
        </footer>
  )
}