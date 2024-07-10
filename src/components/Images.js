import Image from 'next/image'
import React from 'react'

const Images = () => {
  return (
    <div>
         <Image src="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image"  width={500} height={300} priority/>
         <Image src="https://images.pexels.com/photos/452099/pexels-photo-452099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image"  width={500} height={300} priority/>
    </div>
  )
}

export default Images