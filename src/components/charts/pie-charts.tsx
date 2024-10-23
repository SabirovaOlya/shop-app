import { PieChart } from '@mui/x-charts/PieChart';


export const PieChartProducts = ({ pieStatistics }: any) => {
    return (
        <div className='bg-white p-2 mx-auto shadow-2xl rounded-lg py-8'>
            <PieChart
                series={[
                    {
                        data: [
                            { id: 0, value: pieStatistics?.positive, label: 'Positive', color: '#87A2FF' },
                            { id: 1, value: pieStatistics?.negative, label: 'Negative', color: '#091057' },
                        ],
                    }
                ]}
                height={250}
            />
        </div>
    )
}