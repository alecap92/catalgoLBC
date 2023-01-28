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

export const getCompaniesWithStock = async (productId = "") => {
    const idNumber = Number(productId)

    if(isNaN(idNumber)) return []

    let data = null
    try {
        const response = await fetch("https://www.ccacback.com/api/v1/companyList")
        data = await response.json()
    } catch (error) {
        return []
    }
    
    if(!Array.isArray(data?.companies)) return []

    return data.companies.filter(company => Array.isArray(company?.productos) && company.productos.includes(idNumber))
}