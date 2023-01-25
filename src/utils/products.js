import { ListadoDeProductos } from "@/data/productList"

export const getProductsBySearchQuery = (searchQuery = "") => {
    if(!searchQuery) return []

    return ListadoDeProductos.filter(product => {
        return product?.name?.toLocaleLowerCase()?.includes(searchQuery)
        || product?.tags?.toLocaleLowerCase()?.includes(searchQuery)
        || product?.category?.toLocaleLowerCase()?.includes(searchQuery)
        || product?.subCategory?.toLocaleLowerCase()?.includes(searchQuery)
        || product?.description?.toLocaleLowerCase()?.includes(searchQuery)
    })
}