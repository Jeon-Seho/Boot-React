import { Navigate, Route } from "react-router";
import { lazy, Suspense } from "react"

const Loading = () => <div>Loading....</div>

const ProductsIndex = lazy(() => import("../pages/products/indexPage"))
const ProductsList = lazy(() => import("../pages/products/listPage"))

export default function productsRouter() {
    return (
        {
            path: "products",
            Component: ProductsIndex,
            children: [
                {
                    path: "list",
                    element: <Suspense fallback={<Loading/>}><ProductsList/></Suspense>
                }
            ]
        }
    )
}
