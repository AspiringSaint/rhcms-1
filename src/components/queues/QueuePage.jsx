import PageLayout from "../common/PageLayout"

const QueuePage = () => {

    const tabItems = [
        { to: '/admin/queues', label: 'Consultation Queues', end: true },
    ]

    return <PageLayout title={'Queue Management'} tabs={tabItems} />
}

export default QueuePage