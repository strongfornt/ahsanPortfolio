import Banner from '@/components/Banner'

import Footer from '@/components/Footer'
import Header from '@/components/Header'

// import Social from '@/components/Social'
import Image from 'next/image'


export default function Home() {
  return (
  // <div  className=' w-full bg-bg-img  bg-cover bg-fixed priority   '>
     <main className= 'bg-black/50   max-h-screen overflow-hidden '>
       <Header/>
    <Banner/>
    
    {/* <Social /> */}
     <video  
     
    muted
     
          loop
          autoPlay
          className="fixed -top-2 left-0 min-w-full min-h-full object-cover opacity-50 -z-10 ">
<source src='./motion.mp4' />
    </video> 
       
     
      
   </main>
  // </div>
  )
}
