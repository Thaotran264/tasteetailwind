import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { useRouter } from 'next/router'
const MenuButton = () => {
    const router = useRouter()
    const handleClick = () => {
        router.push('/profile')
    }
    return (
        <button className='bg-orange-300 text-slate-900 p-2 fixed bottom-5 right-5'
            onClick={handleClick}><AiOutlineMenu /></button>
    )
}

export default MenuButton