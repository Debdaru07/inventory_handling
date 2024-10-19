import React from 'react'

type HeaderProps = {
    name: string;
}

const Headers = ( {name} : HeaderProps) => {
  return (
    <h1 className='text-xl font-bold text-gray-700'>
        {name}
    </h1>
  )
}

export default Headers;