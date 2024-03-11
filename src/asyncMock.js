const products = [
    { 
        id: '1' , 
        name: 'iphone 14', 
        price: 1500, 
        category: 'Celular', 
        img:'https://tienda.personal.com.ar/images/720/webp/i_Phone_14_Pro_Deep_Purple_303ce73cf6.png', 
        stock: 15, 
        description:'Descripcion de Iphone 14'
    },
    { id: '2', name: 'samsung A51', price: 500, category: 'Celular', img:'https://http2.mlstatic.com/D_NQ_NP_898273-MLA71678835915_092023-O.webp', stock: 9, description:'Descripcion de Samsung A51'},
    { id: '3', name: 'Auriculares gaming HyperX Cloud Stinger 2 Core', price: 800, category: 'Auricular', img:'https://ar-media.hptiendaenlinea.com/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/6/8/683L9AA-1_T1696454908.png', stock: 35, description:'Descripcion de Auricular'}
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 100)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 1000)
    })
}

export const getProductById = (itemId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === itemId))
        }, 100)
    })
}