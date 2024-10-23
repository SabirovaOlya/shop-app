import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { https } from "../../../services/https";
import { IProduct } from "../../../types";
import default_image from '../../../assets/images/image.png'
import { Rating } from "@mui/material";

const ProductSingle = () => {
    const { id } = useParams();
    const [product, setProduct] = useState<IProduct | null>(null);
    const [selectedImage, setSelectedImage] = useState<{ id: string, image: string } | null>()
    const [count, setCount] = useState(1)

    const getData = async () => {
        try {
            const res = await https.get(`/products/${id}/`)
            const { data } = res;
            setSelectedImage(data?.images?.[0] || null)
            setProduct(data)
        }
        catch (err) {
            console.log(err);
        }
    }


    useEffect(() => {
        getData()
    }, [id]);



    return (
        <div className="mt-5 px-3 bg-white">
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex justify-center">
                    <img
                        className="w-full h-auto rounded"
                        src={selectedImage ? selectedImage?.image : default_image}
                        alt={product?.name}
                    />
                </div>
                <div className="flex-col p-3">
                    <p className="text-3xl font-bold">{product?.name}</p>
                    <Rating className="mt-3" name="read-only" value={5} readOnly />
                    <div className="mt-5">
                        <p className="text-2xl font-bold">${product?.discount ? (100 - product?.discount) / 100 * product?.price : product?.price}</p>
                        {product?.discount && <p className="italic text-xs">(with {product?.discount}% discount)</p>}
                    </div>
                    <div className="mt-8">
                        <div className="">
                            <button onClick={() => {
                                if (count > 1) {
                                    setCount((prev) => prev - 1)
                                }
                            }}
                                className="border w-8 h-8 font-bold rounded bg-gray-200 border-gray-600"
                            >-</button>
                            <span className="mx-2">{count}</span>
                            <button onClick={() => {
                                if (product?.count && product?.count > count) {
                                    setCount((prev) => prev + 1)
                                }
                            }}
                                className="border w-8 h-8 font-bold rounded bg-gray-200 border-gray-600"
                            >+</button>
                        </div>
                    </div>
                    <p className="text-s mt-8">{product?.description}</p>

                </div>
            </div>
        </div>


    )
}

export default ProductSingle