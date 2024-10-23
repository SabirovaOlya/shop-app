import { Routes, Route } from 'react-router-dom'
import ProductList from './list'
import ProductSingle from './single'

function ProductsRouting() {
    return (
        <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/:id" element={<ProductSingle />} />
        </Routes>
    )
}

export default ProductsRouting