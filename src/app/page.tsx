import { Footer } from '@/components/Footer'
import { Sidebar } from '@/components/Sidebar'
import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume, Maximize2} from 'lucide-react'
import Image from 'next/image'

export default function Home() {

  // 34:08
  return (
    <main className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
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
            <a href="#" className="bg-white/5  group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
              <Image src="/album.jpg" width={104} height={104} alt="Capa Astroworld" />
              <strong>Astroworld</strong>

              <button className="w-12 h-12 flex items-center justify-center pl-0.5 rounded-full bg-green-400 text-black ml-auto mr-10 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a href="#"className="bg-white/5  group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
              <Image src="/album.jpg" width={104} height={104} alt="Capa Astroworld" />
              <strong>Astroworld</strong>

              <button className="w-12 h-12 flex items-center justify-center pl-0.5 rounded-full bg-green-400 text-black ml-auto mr-10 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a href="#"className="bg-white/5  group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
              <Image src="/album.jpg" width={104} height={104} alt="Capa Astroworld" />
              <strong>Astroworld</strong>

              <button className="w-12 h-12 flex items-center justify-center pl-0.5 rounded-full bg-green-400 text-black ml-auto mr-10 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a href="#" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
              <Image src="/album.jpg" width={104} height={104} alt="Capa Astroworld" />
              <strong>Astroworld</strong>

              <button className="w-12 h-12 flex items-center justify-center pl-0.5 rounded-full bg-green-400 text-black ml-auto mr-10 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a href="#"className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
              <Image src="/album.jpg" width={104} height={104} alt="Capa Astroworld" />
              <strong>Astroworld</strong>

              <button className="w-12 h-12 flex items-center justify-center pl-0.5 rounded-full bg-green-400 text-black ml-auto mr-10 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a href="#" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/2100 transition-colors">
              <Image src="/album.jpg" width={104} height={104} alt="Capa Astroworld" />
              <strong>Astroworld</strong>

              <button className="w-12 h-12 flex items-center justify-center pl-0.5 rounded-full bg-green-400 text-black ml-auto mr-10 invisible group-hover:visible">
                <Play />
              </button>
            </a>
          </div>

          <h2 className="font-semibold text-2xl mt-10">Made for Gustavo Schell Souza</h2>

          <div className="grid grid-cols-8 gap-4  mt-4">
            <a href="" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10"> 
              <Image src="/album.jpg" className="w-full" width={120} height={120} alt="Capa Astroworld" />
              <strong>Daily Mix 1</strong>
              <span className="text-sm text-zinc-500" >Wallows, COIN, girl in red and more</span>
            </a>
            <a href="" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10"> 
              <Image src="/album.jpg" className="w-full" width={120} height={120} alt="Capa Astroworld" /> 
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-500">Wallows, COIN, girl in red and more</span>   
            </a>
            <a href="" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10"> 
              <Image src="/album.jpg" className="w-full" width={120} height={120} alt="Capa Astroworld" />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-500">Wallows, COIN, girl in red and more</span>
            </a>
            <a href="" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10"> 
              <Image src="/album.jpg" className="w-full" width={120} height={120} alt="Capa Astroworld" />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-500">Wallows, COIN, girl in red and more</span>
            </a>
            <a href="" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10"> 
              <Image src="/album.jpg" className="w-full" width={120} height={120} alt="Capa Astroworld" />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-500">Wallows, COIN, girl in red and more</span>
            </a>
          </div>
        </main>
      </div>
      <Footer />
    </main>
  )
}
