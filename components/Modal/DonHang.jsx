import React, { useState } from 'react'
import { AiOutlineClose, AiFillFilter } from 'react-icons/ai'
import { FcFilledFilter } from 'react-icons/fc'
const DonHang = ({ setShow, text }) => {
    const [addAdress, setAddAdress] = useState(false)
    const handleClose = () => {
        setShow(false)
    }
    const handleAddAdress = () => {
        setAddAdress(!addAdress)
    }
    return (
        <div className='h-[80vh] z-50 fixed top-16 left-0 right-0 mx-auto bg-[#e5e5e5] px-2 py-1'>
            <div className='py-3 px-2 bg-white mb-2 rounded flex items-center w-full'>
                {
                    text == 'Quản lý đơn hàng' &&
                    <>
                        <h2 className='text-center'>Quản lý đơn hàng</h2>
                        <button className='px-2 py-2 rounded' onClick={handleClose}><FcFilledFilter /></button>
                    </>
                }
                {
                    text == 'Quán yêu thích' && <h2 className='text-center'>Quán yêu thích</h2>
                }
                {
                    text == 'Quản lý đặt chỗ' && <h2 className='text-center'>Đặt chỗ</h2>
                }
                {
                    text == 'Sổ địa chỉ' && <h2 className='text-center'>Sổ địa chỉ</h2>
                }
                {
                    text == 'Thông tin tài khoản' && <h2 className='text-center'>Thông tin tài khoản</h2>
                }

                <button className='px-2 py-2 rounded ml-auto' onClick={handleClose}><AiOutlineClose /></button>
            </div>
            {
                text == 'Quản lý đơn hàng' &&
                <>
                    <section className='bg-white p-2 rounded flex flex-col mb-2'>
                        <div className='flex justify-between mb-1'>
                            <span>26/04/2022</span>
                            <p className='text-orange-400'>#1313613</p>
                        </div>
                        <div className='flex justify-between mb-1'>
                            <p>Người tạo: <span>ABC</span></p>
                            <p className='text-green-400'>Hoàn thành</p>
                        </div>
                        <p className='text-lg text-slate-500 mb-2'>Thành tiền: 202.000 đ</p>
                        <button className=' mx-auto px-2 py-1 border border-sky-300 rounded'>Xem chi tiết</button>
                    </section>
                    <section className='bg-white p-2 rounded flex flex-col'>
                        <div className='flex justify-between mb-1'>
                            <span>26/04/2022</span>
                            <p className='text-orange-400'>#1313613</p>
                        </div>
                        <div className='flex justify-between mb-1'>
                            <p>Người tạo: <span>ABC</span></p>
                            <p className='text-green-400'>Hoàn thành</p>
                        </div>
                        <p className='text-lg text-slate-500 mb-2'>Thành tiền: 202.000 đ</p>
                        <button className=' mx-auto px-2 py-1 border border-sky-300 rounded'>Xem chi tiết</button>
                    </section>
                </>
            }
            {
                text == 'Quán yêu thích' && <>
                    <section className='bg-white p-2 rounded flex flex-col mb-2'>
                        <div className='flex justify-between mb-1'>
                            <span>26/04/2022</span>
                            <p className='text-orange-400'>#1313613</p>
                        </div>
                        <div className='flex justify-between mb-1'>
                            <p>Người tạo: <span>ABC</span></p>
                            <p className='text-green-400'>Hoàn thành</p>
                        </div>
                        <p className='text-lg text-slate-500 mb-2'>Thành tiền: 202.000 đ</p>
                        <button className=' mx-auto px-2 py-1 border border-sky-300 rounded'>Xem chi tiết</button>
                    </section>
                </>
            }
            {
                text == 'Sổ địa chỉ' && <>
                    <button className='w-full mb-2 bg-white rounded py-2' onClick={handleAddAdress}>Thêm địa chỉ</button>
                    {
                        addAdress && <section className='rounded w-full mb-2 bg-white'>
                            <form className='p-2'>
                                <div className='flex flex-col mb-2'>
                                    <label>Họ và tên</label>
                                    <input className='border border-slate-500 rounded py-1' type='text' />
                                </div>
                                <div className='flex flex-col mb-2'>
                                    <label>Số điện thoại</label>
                                    <input className='border border-slate-500 rounded py-1' type='text' />
                                </div>
                                <div className='flex flex-col mb-2'>
                                    <label>Tỉnh/thành phố</label>
                                    <input className='border border-slate-500 rounded py-1' type='select' />
                                </div>
                                <div className='flex flex-col mb-2'>
                                    <label>Quận/huyện</label>
                                    <input className='border border-slate-500 rounded py-1' type='select' />
                                </div>
                                <div className='flex flex-col mb-2'>
                                    <label>Địa chỉ cụ thể</label>
                                    <input className='border border-slate-500 rounded py-1' type='text' />
                                </div>
                                <div className='flex flex-col mb-2'>
                                    <p>Đặt làm địa chỉ mặc định</p>
                                    <input type='radio' value='có' id='yes' name='defaut' />
                                    <label for='yes'>Có</label>
                                    <input type='radio' value='không' id='no' name='defaut' />
                                    <label for='no'>Không</label>
                                </div>
                                <div className='w-full justify-center flex gap-1'>
                                    <button className='text-green-400 rounded border px-2 py-2' type='submit'>Thêm địa chỉ</button>
                                    <button className='text-red-600 rounded border px-2 py-2' onClick={() => setAddAdress(!addAdress)}>Đóng</button>
                                </div>
                            </form>
                        </section>
                    }

                    <section className='bg-white p-2 rounded flex flex-col mb-2'>
                        <div className='flex justify-between mb-1'>
                            <span>26/04/2022</span>
                            <p className='text-orange-400'>#1313613</p>
                        </div>
                        <div className='flex justify-between mb-1'>
                            <p>Người tạo: <span>ABC</span></p>
                            <p className='text-green-400'>Hoàn thành</p>
                        </div>
                        <p className='text-lg text-slate-500 mb-2'>Thành tiền: 202.000 đ</p>
                        <button className=' mx-auto px-2 py-1 border border-sky-300 rounded'>Xem chi tiết</button>
                    </section>
                </>
            }
            {
                text == 'Thông tin tài khoản' && <>
                    <section className='bg-[#e5e5e5] rounded flex flex-col'>
                        <div className='rounded mb-2 bg-white py-2'>
                            <div className='w-28 h-28 border rounded-full mx-auto'><img src='' alt='' /></div>
                            <div className='text-center'>
                                <h4>Name</h4>
                                <p>0123 456 789</p>
                            </div>
                        </div>
                        <div className='rounded bg-white p-2' >
                            <div className='py-1.5'>
                                <h2>Thông tin tài khoản</h2>
                            </div>
                            <form className='flex flex-col'>
                                <div className='flex flex-col'>
                                    <label>Họ và tên</label>
                                    <input type='text' className='border border-slate-500 rounded py-1.5' />
                                </div>
                                <div className='flex flex-col'>
                                    <label>Ngày sinh</label>
                                    <div className='flex gap-1'>
                                        <input type='select' className='border border-slate-500 rounded py-1.5 w-10' />
                                        <input type='select' className='border border-slate-500 rounded py-1.5 w-20' />
                                        <input type='select' className='border border-slate-500 rounded py-1.5 w-14' />
                                    </div>
                                </div>
                                <div className='flex flex-col'>
                                    <label>Giới tính</label>
                                    <input type='radio' className='border border-slate-500 rounded py-1.5' />
                                    <input type='radio' className='border border-slate-500 rounded py-1.5' />
                                    <input type='radio' className='border border-slate-500 rounded py-1.5' />
                                </div>
                                <div className='flex flex-col'>
                                    <label>Địa chỉ</label>
                                    <input type="text" />
                                </div>
                                <div className='flex flex-col'>
                                    <label>Số điện thoại</label>
                                    <input type="phone" />
                                </div>
                                <div className='flex flex-col'>
                                    <label>Email</label>
                                    <input type="text" />
                                </div>
                                <button className='border border-blue-300 px-2 rounded py-1 w-2/4 mx-auto'>Lưu</button>
                            </form>
                        </div>
                    </section>
                </>
            }


        </div>
    )
}

export default DonHang