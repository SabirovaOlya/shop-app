import StatisticsRouting from "../pages/statistics/routing"
import FeedbacksRouting from "../pages/feedbacks/routing"

interface RouteType {
    path: string
    element: JSX.Element
    children?: RouteType[]
}

export const routes: RouteType[] = [
    {
        path: '/',
        element: <StatisticsRouting />
    },
    {
        path: '/feedbacks/*',
        element: <FeedbacksRouting />
    },
    // {
    //     path: '/products/*',
    //     element: 
    // },
]