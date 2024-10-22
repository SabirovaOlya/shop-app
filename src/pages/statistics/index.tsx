import { BarChartStatistics } from "../../components/charts/bar-charts"
import { LineChartStatictics } from "../../components/charts/line-charts"
import { PieChartProducts } from "../../components/charts/pie-charts"


const Statistics = () => {
    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="col-span-1">
                <PieChartProducts />
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