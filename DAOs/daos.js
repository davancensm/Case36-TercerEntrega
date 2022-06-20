let persistencia = 'mongo'

let productServices
let cartServices
switch (persistencia) {
            case 'fs':
                let Dao = await import('../manager/fsManager.js')
                productServices = new Dao.ProductManager()
                cartServices = new Dao.CartManager()
                break;
            case 'mongo':
                let mongo = await import('../manager/mongoManager.js')
                productServices = new mongo.ProductManager()
                cartServices = new mongo.CartManager()
                break;
            default:
                let DaoDefault = await import('../manager/fsManager.js')
                productServices = new DaoDefault.ProductManager()
                cartServices = new DaoDefault.CartManager()
                break;

                
}
export {productServices, cartServices}