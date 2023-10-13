import React from 'react'
import Container from './Container'

const Banner = () => {
  return (
    <div>
            <Container className={'h-96 w-1/2'}>

                        <div className='flex flex-col items-center justify-center text-white h-full gap-9'>
                            <p className='uppercase  text-6xl font-serif'>
                                Ahsan ullah
                            </p>    
                            <p className='text-3xl text-blue-500 font-sans '>
                                i'm a designer.
                            </p>
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>
                               Libero fuga commodi mollitia enim repellat repellendus?
                            </p>
                        </div>
            </Container>

    </div>
  )
}

export default Banner