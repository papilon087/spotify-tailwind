import { Play } from "lucide-react";
import Image from "next/image";

export function CardPlayer() {
  return(
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
  )
}