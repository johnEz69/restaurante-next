import React from 'react'
import Image from 'next/image'

const Logo = () => {
  return (
    <>
      <div>
        <Image
          src="/images/logo.png"
          alt="imagen logo"
          width={70}
          height={70}
        />
      </div>
      <style jsx>{`
        div {
          width:1rem;
          height:2rem;
         
          
        }
      `}</style>
    </>
  )
}

export default Logo


