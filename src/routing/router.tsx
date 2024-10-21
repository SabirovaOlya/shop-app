import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routes } from './routes'

import './style.scss'

interface RouterProps {
    isSidebarMini: boolean
}

const Router: React.FC<RouterProps> = ({ isSidebarMini }) => {
    return (
        <div className={isSidebarMini ? 'mini_content' : 'content'}>
            <Suspense fallback={<></>}>
                <Routes>
                    {routes?.map((route, index) => (
                        <Route key={index} path={route?.path} element={route?.element}>
                            {route?.children?.map((childRoute, childIndex) => (
                                <Route
                                    key={childIndex}
                                    path={childRoute?.path}
                                    element={childRoute?.element}
                                />
                            ))}
                        </Route>
                    ))}
                </Routes>
            </Suspense>
        </div>
    )
}

export default Router