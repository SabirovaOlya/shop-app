import { PieChart } from '@mui/x-charts/PieChart';


export const PieChartProducts = () => {

    return (
        <div className='bg-white p-2 mx-auto shadow-2xl rounded-lg py-8'>
            <PieChart
                series={[
                    {
                        data: [
                            { id: 0, value: 10, label: 'series A', color: '#87A2FF' },
                            { id: 1, value: 15, label: 'series B', color: '#091057' },
                            { id: 2, value: 20, label: 'series C', color: '#006BFF' },
                        ],
                    }
                ]}
                height={250}
            />
        </div>
    )
}