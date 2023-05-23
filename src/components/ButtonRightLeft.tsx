import { ChevronLeft, ChevronRight } from "lucide-react";

export function ButtonRightLeft() {
  return(
    <div className="flex items-center gap-4">
    <button>
      <ChevronLeft className="rounded-full bg-black/40 p-1"/>
    </button>
    <button>
      <ChevronRight className="rounded-full bg-black/40 p-1"/>
    </button>
  </div>
  )
}