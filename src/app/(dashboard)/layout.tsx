
import DashSidebar from '@/components/custom/DashSidebar'
import { Church } from 'lucide-react'
import React from 'react'

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <section>
            <DashSidebar children={children} />
        </section>
    )
}

export default DashboardLayout
