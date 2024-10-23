import { useEffect, useState } from "react"
import { BarChartStatistics } from "../../components/charts/bar-charts"
import { LineChartStatictics } from "../../components/charts/line-charts"
import { PieChartProducts } from "../../components/charts/pie-charts"
import { https } from "../../services/https"

type pieStatisticsType = {
    positive: number,
    negative: number
}

const Statistics = () => {
    const [pieStatistics, setPieStatistics] = useState<pieStatisticsType | null>({
        positive: 0,
        negative: 0
    })


    useEffect(() => {
        const fetchStatistics = async () => {
            try {
                const res: any = await https.get(`/feedbacks/statistics-pie/`);
                setPieStatistics(res?.data)

            } catch (err) {
                alert('Error fetching statistics');
            }
        };

        fetchStatistics();
    }, []);


    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="col-span-1">
                <PieChartProducts pieStatistics={pieStatistics} />
            </div>
            <div className="col-span-1">
                <BarChartStatistics />
            </div>
            <div className="col-span-1 md:col-span-2">
                <LineChartStatictics />
            </div>
        </div>

    )
}

export default Statistics