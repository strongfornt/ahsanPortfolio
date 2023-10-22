import Banner from '@/components/Banner'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Social from '@/components/Social'
import Image from 'next/image'


export default function Home() {
  return (
   <main className='bg-black/50 max-h-screen overflow-hidden z-30'>
       <Header/>
    <Banner/>
    <video      muted
          loop
          autoPlay
          className="fixed -top-2 left-0 min-w-full min-h-full object-cover opacity-50 -z-10 ">
<source src='./bgvideo.mp4' />
    </video>
       
     
      
   </main>
  )
}
