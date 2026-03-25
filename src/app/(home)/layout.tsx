import { Footer } from '@/components/custom/Footer'
import { Navbar } from '@/components/custom/Navbar'
import React from 'react'

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="container flex-1 px-4 mx-auto max-w-9xl my-4">
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default HomeLayout
