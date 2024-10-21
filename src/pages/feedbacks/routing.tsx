import { Routes, Route } from 'react-router-dom'
import Feedbacks from './index'

function FeedbacksRouting() {
    return (
        <Routes>
            <Route path="/" element={<Feedbacks />} />
        </Routes>
    )
}

export default FeedbacksRouting