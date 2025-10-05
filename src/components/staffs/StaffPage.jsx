import PageLayout from '../common/PageLayout';

const StaffPage = () => {

    const tabItems = [
        { to: '/admin/staffs', label: 'Staff List', end: true },
        { to: '/admin/staffs/register', label: 'Register Staff' }
    ]

    return <PageLayout title={"Staff Management"} tabs={tabItems} />
};

export default StaffPage;
