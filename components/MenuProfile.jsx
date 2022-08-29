import React, { useState } from 'react'
import { AiOutlineSetting } from 'react-icons/ai'
import DonHang from './Modal/DonHang'

const MenuProfile = ({ icon, text }) => {
    const [show, setShow] = useState(false)
    const handleShow = () => {
        setShow(!show)
    }
    return (
        <>
            <section className='flex items-center bg-white mb-1 px-2 py-2 gap-2 rounded'>
                <div className=''>
                    {icon}
                </div>
                <div className='flex flex-start justify-between px-1 w-full '>
                    <p>{text}</p>
                    <button onClick={handleShow}>
                        <AiOutlineSetting className='text-lg' />
                    </button>
                </div>
            </section>
            {show && <DonHang setShow={setShow} text={text} />}
        </>

    )
}

export default MenuProfile