import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play} from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full" />
            <div className="w-3 h-3 bg-yellow-500 rounded-full" />
            <div className="w-3 h-3 bg-green-500 rounded-full" />
        </div>
      <nav className="space-y-5 mt-10">
        <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
          <HomeIcon />
          Home
        </a>
        <a href="" className="flex items-center gap-3 text-sm  font-semibold text-zinc-200">
          <Search />
          Search
        </a>
        <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
          <Library />
          Your Library
        </a>
      </nav>

        <nav className="mt-6 pt-6 border-t botder-zinc-800 flex flex-col gap-3">
          <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Hot Hits Brasil</a>
          <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Errejota cult Drill</a>
          <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Melhor Opção</a>
          <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Não Estou bem</a>
          <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Techno</a>
        </nav>
      </aside>
      <main className="flex-1 p-6">
        <div className="flex items-center gap-4">
          <button>
            <ChevronLeft className="rounded-full bg-black/40 p-1"/>
          </button>
          <button>
            <ChevronRight className="rounded-full bg-black/40 p-1"/>
          </button>
        </div>

          <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>

          <div className="grid grid-cols-3 gap-4 mt-4">
            <a href="#" className="bg-white/10 rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
              <Image src="/album.jpg" width={104} height={104} alt="Capa Astroworld" />
              <strong>Astroworld</strong>
              <button className="p-2 rounded-full bg-green-400 text-black ml-auto mr-10">
                <Play />
              </button>
            </a>
            <a href="#"  className="bg-white/10 rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
              <Image src="/album.jpg" width={104} height={104} alt="Capa Astroworld" />
              <strong>Astroworld</strong>
            </a>
            <a href="#"  className="bg-white/10 rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
              <Image src="/album.jpg" width={104} height={104} alt="Capa Astroworld" />
              <strong>Astroworld</strong>
            </a>
            <a href="#"  className="bg-white/10 rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
              <Image src="/album.jpg" width={104} height={104} alt="Capa Astroworld" />
              <strong>Astroworld</strong>
            </a>
            <a href="#"  className="bg-white/10 rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
              <Image src="/album.jpg" width={104} height={104} alt="Capa Astroworld" />
              <strong>Astroworld</strong>
            </a>
            <a href="#"  className="bg-white/10 rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
              <Image src="/album.jpg" width={104} height={104} alt="Capa Astroworld" />
              <strong>Astroworld</strong>
            </a>
          </div>
        </main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 p-6">
        footer
      </footer>
    </main>
  )
}
