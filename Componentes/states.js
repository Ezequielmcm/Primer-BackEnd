import { TYPES } from "./actions";

export const initialState = {
    products: [
        {id: 1, name: "Remeras", price: 100, p:"La mejor remera al mejor precio" ,src:"https://www.cottonclub.com.ar/pub/media/catalog/product/cache/65e2670acbf1788249a95924f3789a80/0/a/0a1a2803-5a72-4a5a-82d3-a2e89d7069a3.jpg"},
        {id: 2, name: "Zapatillas", price: 200, p:"Zapatillas de la mejor calidad" ,src:"https://calzadosbatistella.com.ar/shop/84022-superlarge_default/zapatillas-botitas-urbanas-de-cuero-en-negro-combinadas.jpg"},
        {id: 3, name: "Pantalones", price: 300, p:"Pantalones extras comodos y flexibles" ,src:"https://alcatraz.com.ar/wp-content/uploads/2018/05/Pantalon-Ripstop-negro-frente2.jpg"},
        {id: 4, name: "Relojes", price: 400, p:"Reloj de mano, para hora, mensajes y mucho más!!" ,src:"https://katensa.com/store/wp-content/uploads/2021/07/katensa-ingreso-solidario-falabella-exito-alkosto-reloj-inteligente-smartwatch-band-5-fit-xiaomi-1.jpg"},
        {id: 5, name: "Gorras", price: 500, p:"Las meores gorras para protejerte en un día caluroso!" ,src:"https://d3ugyf2ht6aenh.cloudfront.net/stores/564/890/products/go-jean-azul-oscuro1-29c6e7dfcd8e30434f16323444324210-480-0.jpg"},
        {id: 6, name: "Buzos", price: 600, p:"Buzos de todos los colores y de la mejor tela" ,src:"https://cdn.shopify.com/s/files/1/1788/6517/products/010_ROSA_TROPICAL_large.jpg?v=1497367164"},
        {id: 7, name: "Camperas", price: 700, p:"Camperas super abrigadas y comodas" ,src:"https://d3ugyf2ht6aenh.cloudfront.net/stores/001/005/896/products/productos-tamano-ok-101-9d720fc342ef8522cd15816172245682-1024-1024.png"},
        {id: 8, name: "Shorts", price: 800, p:"Shorts para un día de playa y sol!" ,src:"https://www.lavanguardia.com/files/og_thumbnail/uploads/2020/08/22/5faa5b9aaa15a.jpeg"}
    ], 
    cart: [],
}

export function secundState (state, action) {
    switch (action.type) {
        case TYPES.READ_STATES: { 
            return {
                ...state, 
                products: action.payload[0],
                cart: action.payload[1]
            }
        }
        case TYPES.ADD_TO_CART: {
            const newItem = state.products.find((producto) => producto.id === action.payload)
            
            const newItemInCart = state.cart.find((item) => item.id === newItem.id)
            return newItemInCart ? {
                ...state,
                cart: state.cart.map((item) => item.id === newItem.id ? {...item, quantity: item.quantity + 1} : item) 
            } 
            : {
                ...state,
                cart: [...state.cart, {...newItem, quantity: 1}],
            }
        }
        case TYPES.REMOVE_TO_CART: {
            const removeItem = state.cart.find((item) => item.id === action.payload)
            
            return removeItem.quantity > 1 ? {
                ...state,
                cart: state.cart.map((item) => item.id === action.payload ? {...item, quantity: item.quantity - 1} : item)
            } : {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload)
            }
        }
        case TYPES.REMOVE_ALL_TO_CART: {
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload)
            }
        }
        case TYPES.DELETE_CART: {
            return {
                ...state,
                cart: []
            }
        }
        default:
            return state;
    }
}