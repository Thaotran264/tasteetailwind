import React from 'react'
import Header from '../Header'

const Merchant = ({ children }) => {
    return (
        <>
            <Header />
            <main className="mt-16">{children}</main>
        </>

    )
}

export default Merchant