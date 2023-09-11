import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import CardForm from '@/components/CardForm'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Header />
      <div className=' w-full'>
          <CardForm />
      </div>
    </main>
  )
}
