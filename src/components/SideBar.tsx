import { HomeIcon, Search, Library } from "lucide-react";

export function SideBar(){
  return(
    <aside className="w-72 bg-zinc-950 p-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>

          </div>
          <nav className="space-y-5 mt-10">
            <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200 hover:text-white">
              <HomeIcon/>
              Home
            </a>

            <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200 hover:text-white">
            <Search/>
              Search
            </a>

            <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200 hover:text-white">
            <Library/>
              Your Library
            </a>
          </nav>
          <nav className="flex flex-col gap-3 mt-6 pt-6 border-t border-zinc-800">
           <a href=""  className="text-sm text-zinc-400 hover:text-zinc-100">Baroni</a>
           <a href=""  className="text-sm text-zinc-400 hover:text-zinc-100">Nostalgia</a>
           <a href=""  className="text-sm text-zinc-400 hover:text-zinc-100">Creme</a>
           <a href=""  className="text-sm text-zinc-400 hover:text-zinc-100">Minha Playlist</a>
           <a href=""  className="text-sm text-zinc-400 hover:text-zinc-100">Playlist Sertanojo</a>
          </nav>
        </aside>

  )
}