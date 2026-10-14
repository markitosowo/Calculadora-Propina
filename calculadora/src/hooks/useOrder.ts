import {db} from '../Data/db'


export const useMenu = () = {

 const initialOrder = () => {
        const localStorageCart = window.localStorage.getItem('cart');
        return localStorageCart ? JSON.parse(localStorageCart) : [];
    };






 const min_items = 1;
 const max_items = 5;
    
const order : OrderItem[];
const tip = 0

function addItem(id) {
        const updatedMenu = menu.map((item) => {

            if (item.id === id && item.quantity < max_items) {

                return {
                    ...item, quantity: item.quantity + 1,
                };

            }
            return item;
        });
        setMenu(updatedMenu);

    }

   function decreaseQuantity(id) {
        const item = cart.find((guitar) => guitar.id === id);

        if (item.quantity === min_items) {
            removeFromCart(id)
        } else {
            const updatedCart = cart.map((guitar) => {

                if (guitar.id === id) {
                    return {
                        ...guitar, quantity: guitar.quantity - 1,
                    };
                }
                return guitar;
            })

            setCart(updatedCart);

        }
    }

    function removeItem(id) {

        setCart((prevCart) => prevCart.filter((guitar) => guitar.id !== id));

    }

  




}