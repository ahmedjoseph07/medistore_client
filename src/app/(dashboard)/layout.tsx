import DashSidebar from '@/components/custom/DashSidebar'


const DashboardLayout = ({
    children,
    seller,
    admin
}: {
    children: React.ReactNode,
    seller: React.ReactNode,
    admin: React.ReactNode
}) => {

    const user = {
        role: "admin"
    }

    return (
        <section>
            <DashSidebar children={children} seller={seller} admin={admin} role={user?.role} />
        </section>
    )
}

export default DashboardLayout
