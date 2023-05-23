import { ButtonRightLeft } from '@/components/ButtonRightLeft'
import { CardPlayer } from '@/components/CardPlayer'
import { Footer } from '@/components/Footer'
import { FormPlayer } from '@/components/FormPlayer'
import { Sidebar } from '@/components/Sidebar'

export default function Home() {

  return (
    <main className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
      <main className="flex-1 p-6">
          <ButtonRightLeft />
          <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>
          <CardPlayer />
          <h2 className="font-semibold text-2xl mt-10">Made for Gustavo Schell Souza</h2>
          <FormPlayer />
        </main>
      </div>
      <Footer />
    </main>
  )
}
