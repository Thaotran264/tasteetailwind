import Image from 'next/image'
import React from 'react'

const BrandItem = ({item}) => {
  return (
    <div className="w-full h-full bg-white rounded">
        <div className="h-48 w-full">
          <Image
            src={item}
            alt=""
            // layout='fill'
            width='250'
            height='250'
            className="w-full h-full object-cover rounded"
          />
        </div>
        <div className="p-2">
          <h2 className="text-gray-900">Title</h2>
          <p className="text-slate-500 text-xs">
            123 Hai Ba Trung, quan 1, Tp HCM
          </p>
        </div>
      </div>
  )
}

export default BrandItem