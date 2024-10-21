import { Routes, Route } from 'react-router-dom'
import Statistics from './index'

function StatisticsRouting() {
    return (
        <Routes>
            <Route path="/" element={<Statistics />} />
        </Routes>
    )
}

export default StatisticsRouting