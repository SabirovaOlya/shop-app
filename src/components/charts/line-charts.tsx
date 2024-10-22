import { LineChart } from '@mui/x-charts/LineChart';

export const LineChartStatictics = () => {
    return (
        <div className='bg-white p-2 mx-auto shadow-2xl rounded-lg'>
            <LineChart
                xAxis={[{
                    data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                }]}
                series={[
                    {
                        data: [2, 4, 6, 7.5, 5, 8, 9, 7, 6.5, 10, 8.5, 11],
                        area: true,
                        color: '#6482AD'
                    },
                ]}
                height={300}
            />
        </div>
    );
}