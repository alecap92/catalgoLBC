import { companyList } from "@/data/companyList"
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

export const getCompaniesWithStock = (productId = "") => {
    const idNumber = Number(productId)

    if(isNaN(idNumber)) return []

    return companyList.filter(company => Array.isArray(company?.productos) && company.productos.includes(idNumber))
}