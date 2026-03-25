import React from 'react'

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <p>Sidebar</p>
            {children}
            <p>Footer</p>
        </div>
    )
}

export default DashboardLayout
