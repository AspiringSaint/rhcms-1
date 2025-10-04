import PageLayout from "../common/PageLayout";

const SchedulePage = () => {

    const tabItems = [
        { to: '/admin/schedules', label: 'Schedule list', end: true },
        { to: '/admin/schedules/add', label: 'Add Schedule' }
    ];

    return <PageLayout title={"Schedule Management"} tabs={tabItems} />
};

export default SchedulePage;
