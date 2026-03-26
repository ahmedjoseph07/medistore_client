

import { DashSidebar } from '@/components/custom/DashSidebar'
import React from 'react'

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <section>
            <DashSidebar />
            {children}
            <p>Footer</p>
        </section>
    )
}

export default DashboardLayout
