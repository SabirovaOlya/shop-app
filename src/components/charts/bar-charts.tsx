import { BarChart } from '@mui/x-charts/BarChart';

export const BarChartStatistics = () => {
    return (
        <div className='bg-white p-2 mx-auto shadow-2xl rounded-lg'>
            <BarChart
                xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
                series={[
                    { data: [4, 3, 5], color: '#F9DBBA' },
                    { data: [1, 6, 3], color: '#A02334' },
                    { data: [2, 5, 6], color: '#FFAD60' },
                ]}
                height={300}
            />
        </div>
    );
}