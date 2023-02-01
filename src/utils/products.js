export const getProductsBySearchQuery = async(searchQuery = "") => {
    if(!searchQuery) return []
    let products = []

    try {
        const response = await fetch(`https://www.ccacback.com/api/v1/products`)
        const data = await response.json()

        if(Array.isArray(data?.products)) {
            products = data.products.filter(product => {
                return product?.name?.toLocaleLowerCase()?.includes(searchQuery)
                    || product?.tags?.toLocaleLowerCase()?.includes(searchQuery)
                    || product?.category?.toLocaleLowerCase()?.includes(searchQuery)
                    || product?.subCategory?.toLocaleLowerCase()?.includes(searchQuery)
                    || product?.description?.toLocaleLowerCase()?.includes(searchQuery)
            })
        }
    } catch (error) {
        console.log(error)
    }

    return products
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

export const getProductById = async (productId = "") => {
    let product = null

    try {
        const response = await fetch(`https://www.ccacback.com/api/v1/products/${ productId }`)
        const data = await response.json()

        if(data?.ok && Array.isArray(data?.busqueda)) {
            product = data.busqueda[0]
        }
    } catch (error) {
        console.log(error)
    }

    return product
}