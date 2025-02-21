'use client'

import Image from 'next/image';
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import React from 'react'

function Header() {
    const {user}=useKindeBrowserClient();

  return (
    <div className='bg-blue-700 text-white p-4 flex justify-between items-center'>
        <div>
        <h1 className="text-xl font-bold">ESCT e-Library</h1>
        </div>
        <div className=' flex items-center gap-3' >
          <div>
            <h2 className='text-xs font-bold'>{user?.given_name} {user?.family_name}</h2>
            </div>
            <Image
                src={user?.picture || '/default-avater.png'}
                width={35}
                height={35}
                alt='user'
                className=' rounded-full'
            />
        </div>
    </div>
  )
}

export default Header