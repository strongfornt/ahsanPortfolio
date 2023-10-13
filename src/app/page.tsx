import Banner from '@/components/Banner'
import Header from '@/components/Header'
import Social from '@/components/Social'
import Image from 'next/image'

export default function Home() {
  return (
   <main className='bg-bg-img bg-cover'>
    <Header/>
    <Banner/>
    <Social/>
   </main>
  )
}
