import PageLayout from "../common/PageLayout"

const PatientsPage = () => {

    const tabItems = [
        { to: '/admin/patients', label: 'Patient List', end: true },
        { to: '/admin/patients/register', label: 'Register Patient' }
    ]

    return <PageLayout title={"Patient Management"} tabs={tabItems} />
}

export default PatientsPage