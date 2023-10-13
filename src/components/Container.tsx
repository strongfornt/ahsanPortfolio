import React from 'react'
interface Props{
  children:React.ReactNode | React.ReactNode [];
  className?:any;
}

const Container = ({children,className}:Props) => {
  return (
    <div className={`${className} max-w-6xl  mx-auto `}>{children}</div>
  )
}

export default Container