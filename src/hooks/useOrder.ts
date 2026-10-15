import { useState } from "react"
import type { MenuItem, OrderItem } from "../types"

export const useOrder = () => {
    const [order, setOrder] = useState<OrderItem[]>([])
    const [tip, setTip] = useState(0)

    function addItem(item: MenuItem) {
        const itemExists = order.findIndex((orderItem) => orderItem.id === item.id)

        if (itemExists >= 0) {
            const updatedOrder = order.map((orderItem) => {
                if (orderItem.id === item.id) {
                    return {
                        ...orderItem, quantity: orderItem.quantity + 1,
                    }
                }
                return orderItem
            })
            setOrder(updatedOrder)
        } else {
            setOrder((prevOrder) => [...prevOrder, { ...item, quantity: 1 }])
        }
    }

    function removeItem(id: MenuItem['id']) {
        setOrder((prevOrder) => prevOrder.filter((item) => item.id !== id))
    }

    function placeOrder() {
        setOrder([])
        setTip(0)
    }

    return {
        order,
        tip,
        setTip,
        addItem,
        removeItem,
        placeOrder
    }
}
