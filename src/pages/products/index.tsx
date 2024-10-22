import { Routes, Route } from 'react-router-dom'
import ProductList from './list/index'

function ProductsRouting() {
    return (
        <Routes>
            <Route path="/" element={<ProductList />} />
        </Routes>
    )
}

export default ProductsRouting