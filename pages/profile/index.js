import React, { useState } from 'react'
import Merchant from '../../components/Layout/Merchant'
import { AiOutlineSetting, AiFillHeart } from 'react-icons/ai'
import { FaClipboardList } from 'react-icons/fa'
import { MdContactMail, MdOutlineChair } from 'react-icons/md'
import MenuProfile from '../../components/MenuProfile'
import DonHang from '../../components/Modal/DonHang'
const Profile = () => {

    return (
        <div className='rounded bg-slate-100 p-2'>
            {/* <section className='flex items-center mb-2'>
                <div className='w-28 h-24'>
                    <img scr='https://images.pexels.com/photos/13350114/pexels-photo-13350114.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load' alt='' className='w-full h-full' />
                </div>
                <div className='flex flex-start px-1'>
                    <div>
                        <h2>This is name</h2>
                        <p>This is email</p>
                    </div>
                    <button onClick={handleShow}>
                        <AiOutlineSetting />
                    </button>
                </div>
            </section> */}
            <MenuProfile text='Thông tin tài khoản' icon={<FaClipboardList />} />
            <MenuProfile text='Quản lý đơn hàng' icon={<FaClipboardList />} />
            <MenuProfile text='Quán yêu thích' icon={<AiFillHeart />} />
            <MenuProfile text='Quản lý đặt chỗ' icon={<MdOutlineChair />} />
            <MenuProfile text='Sổ địa chỉ' icon={<MdContactMail />} />
            <button className='text-center w-full py-1 bg-white border border-sky-500 rounded'>Đăng xuất</button>
        </div>
    )
}

export default Profile
Profile.getLayout = function getLayout(page) {
    return (
        <Merchant>{page}</Merchant>
    )
}