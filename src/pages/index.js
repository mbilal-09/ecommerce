import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Filter from '@/components/Filter'
import CardForm from '@/components/CardForm'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Header />
      <div className='flex w-full'>
        <div className='w-1/4'>
          <Filter />
        </div>
        <div className='w-3/4'>
          <CardForm />
        </div>
      </div>
    </main>
  )
}
